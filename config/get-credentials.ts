import * as prompts from 'prompts';
import * as encryptpwd from 'encrypt-with-password';
import * as fs from 'fs';

type platform = "karura" | "kraken";
type credentials = { key: string; secret: string; } | { address: string; phrase: string};
type credentialsDocument = {[key: string]: credentials }

let password: string;
export async function askPassword(){
	if( process.env.KRAKURA_PASSWORD )
		return password = process.env.KRAKURA_PASSWORD;

	const response = await prompts({
		type: 'text',
		name: 'password',
		message: 'Fill in your password',
		validate: (password: string | any[]) => !(typeof(password) == 'string' && password.length >= 4 ) ? `Please enter a password with more than 3 characters` : true
		});
	
	password = response.password;
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

async function setKrakenApiCredentials(): Promise<{ key: string; secret: string; }>{
	const response: {key: string, secret: string} = await prompts([{
		type: 'text',
		name: 'key',
		message: 'What is your kraken api key?',
		validate: (key: string | any[]) => !(typeof(key) == 'string' && key.length > 5 ) ? `Please enter valid key` : true
	},
	{
		type: 'text',
		name: 'secret',
		message: 'What is your kraken api secret?',
		validate: (secret: string | any[]) => !(typeof(secret) == 'string' && secret.length > 8 ) ? `Please enter valid secret` : true
	}
	]);
	
	const {key, secret} = response;
	saveApiCredentials({key, secret}, 'kraken');
	return {key, secret};
}

async function setKaruraCredentials(): Promise<{ address: string; phrase: string }>{
	const response: {address: string, phrase: string} = await prompts([{
		type: 'text',
		name: 'address',
		message: 'What is your karura address?',
		validate: (address: string ) => !(typeof(address) == 'string' && address.length > 5 ) ? `Please enter an valid address` : true
	},
	{
		type: 'text',
		name: 'phrase',
		message: 'What is your karura phrase?',
		validate: (phrase: string | any[]) => !(typeof(phrase) == 'string' && phrase.length > 8 ) ? `Please enter valid phrase` : true
	}
	]);
	
	const {address, phrase} = response;
	saveApiCredentials({ address, phrase }, 'karura');
	return {address, phrase};
}


async function saveApiCredentials(credentials: any, platform: platform) {
	// get excisting credentials
	let credentialsDocument = await getApiCredentials();
	if( credentialsDocument==undefined )
		credentialsDocument = {};
	
	credentialsDocument[platform] = credentials;
	// save them

	const path = `./config/credentials`;
	const encrypted = encryptpwd.encryptJSON(credentialsDocument, password);
	fs.writeFileSync(path, encrypted);
}

async function getApiCredentials(): Promise<credentialsDocument | undefined>{
	const path = `./config/credentials`;
	if( !fs.existsSync(path) )
		return;
	
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

