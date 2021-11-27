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
const fs = require("fs");
const cryptojs = require("crypto-js");
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
                type: 'password',
                name: 'key',
                message: 'What is your kraken api key?',
                validate: (key) => !(typeof (key) == 'string' && key.length > 5) ? `Please enter valid key` : true
            },
            {
                type: 'password',
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
        const response = yield prompts([
            {
                type: 'password',
                name: 'phrase',
                message: 'What is your karura phrase?',
                validate: (phrase) => !(typeof (phrase) == 'string' && phrase.length > 8) ? `Please enter valid phrase` : true
            }
        ]);
        const { phrase } = response;
        saveApiCredentials({ phrase }, 'karura');
        return { phrase };
    });
}
function saveApiCredentials(credentials, platform) {
    return __awaiter(this, void 0, void 0, function* () {
        // Get existing credentials
        let credentialsDocument = yield getApiCredentials();
        if (credentialsDocument == undefined)
            credentialsDocument = {};
        credentialsDocument[platform] = credentials;
        const path = `./src/config/credentials`;
        // Encrypt message credentials
        const encryptedMessage = cryptojs.AES.encrypt(JSON.stringify(credentialsDocument), password).toString();
        fs.writeFileSync(path, encryptedMessage);
    });
}
function getApiCredentials() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `./src/config/credentials`;
        if (!fs.existsSync(path))
            return;
        const encryptedCredentials = fs.readFileSync(path).toString();
        if (!password)
            yield askPassword();
        try {
            // Decrypt message credentials
            const decryptedMessageBytes = cryptojs.AES.decrypt(encryptedCredentials, password);
            const decryptedMessage = decryptedMessageBytes.toString(cryptojs.enc.Utf8);
            return JSON.parse(decryptedMessage);
        }
        catch (error) {
            throw new Error('Wrong password');
        }
    });
}
//# sourceMappingURL=get-credentials.js.map