"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrSetApi = exports.askPassword = void 0;
const prompts = require("prompts");
const encryptpwd = require("encrypt-with-password");
const fs = require("fs");
let password;
function askPassword() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.env.KRAKURA_PASSWORD)
            return password = process.env.KRAKURA_PASSWORD;
        const response = yield prompts({
            type: 'password',
            name: 'password',
            message: 'Fill in your password',
            validate: (password) => !(typeof (password) == 'string' && password.length >= 4) ? `Please enter a password with more than 3 characters` : true
        });
        password = response.password;
    });
}
exports.askPassword = askPassword;
function getOrSetApi(platform) {
    return __awaiter(this, void 0, void 0, function* () {
        const storedCredentials = yield getApiCredentials();
        if (storedCredentials && storedCredentials[platform])
            return storedCredentials[platform];
        // no valid credentials yet
        switch (platform) {
            case ('kraken'):
                return yield setKrakenApiCredentials();
            case ('karura'):
                return yield setKaruraCredentials();
            default:
                throw new Error(`${platform} not (yet) supported`);
        }
    });
}
exports.getOrSetApi = getOrSetApi;
function setKrakenApiCredentials() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prompts([{
                type: 'text',
                name: 'key',
                message: 'What is your kraken api key?',
                validate: (key) => !(typeof (key) == 'string' && key.length > 5) ? `Please enter valid key` : true
            },
            {
                type: 'text',
                name: 'secret',
                message: 'What is your kraken api secret?',
                validate: (secret) => !(typeof (secret) == 'string' && secret.length > 8) ? `Please enter valid secret` : true
            }
        ]);
        const { key, secret } = response;
        saveApiCredentials({ key, secret }, 'kraken');
        return { key, secret };
    });
}
function setKaruraCredentials() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prompts([{
                type: 'text',
                name: 'address',
                message: 'What is your karura address?',
                validate: (address) => !(typeof (address) == 'string' && address.length > 5) ? `Please enter an valid address` : true
            },
            {
                type: 'text',
                name: 'phrase',
                message: 'What is your karura phrase?',
                validate: (phrase) => !(typeof (phrase) == 'string' && phrase.length > 8) ? `Please enter valid phrase` : true
            }
        ]);
        const { address, phrase } = response;
        saveApiCredentials({ address, phrase }, 'karura');
        return { address, phrase };
    });
}
function saveApiCredentials(credentials, platform) {
    return __awaiter(this, void 0, void 0, function* () {
        // get excisting credentials
        let credentialsDocument = yield getApiCredentials();
        if (credentialsDocument == undefined)
            credentialsDocument = {};
        credentialsDocument[platform] = credentials;
        // save them
        const path = `./config/credentials`;
        const encrypted = encryptpwd.encryptJSON(credentialsDocument, password);
        fs.writeFileSync(path, encrypted);
    });
}
function getApiCredentials() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `./config/credentials`;
        if (!fs.existsSync(path))
            return;
        const encryptedCredentials = fs.readFileSync(path).toString();
        if (!password)
            yield askPassword();
        try {
            const credentials = encryptpwd.decryptJSON(encryptedCredentials, password);
            return credentials;
        }
        catch (error) {
            throw new Error('Wrong password');
        }
    });
}
//# sourceMappingURL=get-credentials.js.map