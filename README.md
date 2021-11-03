[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<br>

<img src="https://tradingplatforms.com/wp-content/uploads/2021/05/Kraken-Logo.png" width="40%"
        alt="Kraken.com Logo"/>

<br>

<img src="https://blockzeit.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-25-at-4.20.03-PM.png" width="40%" alt="Karura Logo"> 

<br>
<br>

# krarura-bot
Is an Arbitrage bot between Kraken and Karura. This project was created through an [Encode Club](https://www.encode.club/) Polkadot Hackathon.

The arbitrage bot constantly checks for pricing differences between the two platforms and executes trades when they are profitable as defined in the `trading-config.js` file. 

## Setup

Make sure you have the projects source code.

```bash
git clone https://github.com/houtenbos/krakura-bot.git
```

### Define your Trading Configuration

The trading configuration of the arbitrage bot can be found at `src/config/trading-config.js`. This file defines the max trading size of supported currency pairs and the minimal profit margin your willing to take when executing a trade. Adjust this file to your liking and level. 

```js
module.exports = {
currencies: ['KSM', 'KAR', 'USD', 'KUSD'],
currencyPairs: ['KSM/USD'],
maxTradeSize: {
    'KSM/USD': 0.02,
    'KAR/USD': 10
},
minProfitMargin: 0.005,
crossPlatforms: [['kraken', 'karura'], ['karura', 'kraken']]
}
```

## Build/Starting the Project

1) Install all dependencies by running `yarn` in the project directory.
2) Generate types and helper functions by running `yarn codegen`.
3) Build the project by running `yarn build`.
4) Start the arbitrage bot by running `yarn start`.

## Bot Startup

When the arbitrage bot is first started, you will be asked a series of questions to obtain platform credentials. Once all questions have been answered, your credentials will be encrypted and store locally on your machine in the project at `src/config/credentials`. Every time after this when the bot is started, you will only be required to enter your password for the bot to access your platform credentials. If you would like to reset your stored platform credentials, simply delete the credentials file at `src/config/credentials` and restart the bot with `yarn start`.

### Bot Questions

1) Fill in your password:
    - This is the password to encrypt your credentials
2) What is your kraken api key?
    - This is the api key you generate on kraken.com
3) What is your kraken api secret?  
    - This is the private key of your kraken api key
4) What is your karura phrase?
    - This is the phrase of the wallet address associated with your karura account 