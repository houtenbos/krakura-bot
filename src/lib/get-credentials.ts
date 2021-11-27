import * as prompts from 'prompts';
// import * as encryptpwd from 'encrypt-with-password';
import * as fs from 'fs';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';

type platform = "karura" | "kraken";
type credentials = { key: string, secret: string } | { phrase: string};
type credentialsDocument = {[key: string]: credentials }

let password: string;
let key: Buffer;
const iv: Buffer = crypto.randomBytes(16)

export async function askPassword(){
	if( process.env.KRAKURA_PASSWORD )
		return password = process.env.KRAKURA_PASSWORD;

	const response = await prompts({
		type: 'password',
		name: 'password',
		message: 'Fill in your password',
		validate: (password: string | any[]) => !(typeof(password) == 'string' && password.length >= 4 ) ? `Please enter a password with more than 3 characters` : true
		});
	
	password = response.password;
	key = crypto
		.createHash('sha256')
		.update(password)
		.digest();
}

export async function getOrSetApi(platform: platform): Promise<credentials>{
	const storedCredentials = await getApiCredentials();
	
	if( storedCredentials && storedCredentials[platform] )
		return storedCredentials[platform];
	
	// no valid credentials yet
	switch(platform){
		case('kraken'):
			return await setKrakenApiCredentials();
		case('karura'):
			return await setKaruraCredentials();
		default:
			throw new Error(`${platform} not (yet) supported`);
	}
}

async function setKrakenApiCredentials(): Promise<{key: string, secret: string}>{
	const response: {key: string, secret: string} = await prompts([{
		type: 'password',
		name: 'key',
		message: 'What is your kraken api key?',
		validate: (key: string | any[]) => !(typeof(key) == 'string' && key.length > 5 ) ? `Please enter valid key` : true
	},
	{
		type: 'password',
		name: 'secret',
		message: 'What is your kraken api secret?',
		validate: (secret: string | any[]) => !(typeof(secret) == 'string' && secret.length > 8 ) ? `Please enter valid secret` : true
	}
	]);
	
	const {key, secret} = response;
	saveApiCredentials({key, secret}, 'kraken');
	return {key, secret};
}

async function setKaruraCredentials(): Promise<{phrase: string}>{
	const response: {phrase: string} = await prompts([
	{
		type: 'password',
		name: 'phrase',
		message: 'What is your karura phrase?',
		validate: (phrase: string | any[]) => !(typeof(phrase) == 'string' && phrase.length > 8 ) ? `Please enter valid phrase` : true
	}
	]);
	
	const {phrase} = response;
	saveApiCredentials({phrase}, 'karura');
	return {phrase};
}

async function saveApiCredentials(credentials: any, platform: platform) {
	// get existing credentials
	let credentialsDocument = await getApiCredentials();

	if( credentialsDocument==undefined )
		credentialsDocument = {};
	
	credentialsDocument[platform] = credentials;
	
	const path = `./src/config/credentials`;
    
	// Create Cipher
	const cipher = crypto.createCipheriv('aes256', key, iv);
    let encrypted = cipher.update(JSON.stringify(credentialsDocument), 'utf-8', 'hex');
    encrypted += cipher.final('hex');

    fs.writeFileSync(path, encrypted);
}

async function getApiCredentials(): Promise<credentialsDocument | undefined>{
	const path = `./src/config/credentials`;
	if( !fs.existsSync(path) )
		return;
	
	const encryptedCredentials = fs.readFileSync(path).toString();
	if( !password )
		await askPassword();

	try{
    	// Create Decipher
		const decipher = crypto.createDecipheriv('aes256', key, iv);
		let credentials = decipher.update(encryptedCredentials, 'hex', 'utf-8');
		credentials += decipher.final('utf-8');

		return JSON.parse(credentials);
	}
	catch(error){
		throw new Error('Wrong password');
	}
}

