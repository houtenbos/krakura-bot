//@ts-check
const prompts = require('prompts');
const encryptpwd = require('encrypt-with-password');
const fs = require('fs');


let password;
async function askPassword(){
	const reponse = await prompts({
		type: 'text',
		name: 'password',
		message: 'Fill in your password',
		validate: password => !(typeof(password) == 'string' && password.length >= 4 ) ? `Please enter a password with more than 3 characters` : true
		});
	
	password = reponse.password;
}

/**
 * set Kraken API credentials
 * @return {Promise<{key: any, secret: any}>}                        
 */
async function setKrakenApiCredentials(){
	const response = await prompts([{
		type: 'text',
		name: 'key',
		message: 'What is your kraken api key?',
		validate: key => !(typeof(key) == 'string' && key.length > 5 ) ? `Please enter valid key` : true
	},
	{
		type: 'text',
		name: 'secret',
		message: 'What is your kraken api secret?',
		validate: secret => !(typeof(secret) == 'string' && secret.length > 8 ) ? `Please enter valid secret` : true
	}
	]);
	
	const {key, secret} = response;
	saveApiCredentials(key, secret, 'kraken');
	return {key, secret};
}

/**
 * @param {String} key
 * @param {String} secret
 * @param {String} platform
 * @return {Void}
 */
function saveApiCredentials(key, secret, platform){
	const path = `./config/credentials`;
	const encrypted = encryptpwd.encryptJSON({[platform]:{key, secret}}, password);
	fs.writeFileSync(path, encrypted);
}

/**
 * @return {Promise<Object>}>}
 */
async function getApiCredentials(){
	const path = `./config/credentials`;
	if( !fs.existsSync(path) )
		return {};
	
	const encryptedCredentials = fs.readFileSync(path).toString();
	if( !password )
		await askPassword();

	try{
		const credentials = encryptpwd.decryptJSON(encryptedCredentials, password);
		return credentials;
	}
	catch(error){
		throw new Error('Wrong password');
	}
}

/**
 * Checks if credentials are stored, if not it creates new credentials
 * @param {String} platform
 * @return {Promise<{key: String, secret: String}>}
 */
async function getOrSetApi(platform){
	const storedCredentials = await getApiCredentials();
	if( storedCredentials[platform] )
		return storedCredentials[platform];
	
	// no valid credentials yet
	if( platform == 'kraken')
	switch(platform){
		case('kraken'):
			return await setKrakenApiCredentials();
		default:
			throw new Error(`${platform} not (yet) supported`);
	}
}

module.exports = {getOrSetApi, askPassword};

