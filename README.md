[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<br>

<img src="https://github.com/matthewashley1/krakura-bot/blob/master/src/img/krakura.png"  width="50%" alt="Krakura Logo"/>

Is an arbitrage trading bot between the Kraken CEX and the Karura Defi Platform. This project was created through an [Encode Club](https://www.encode.club/) Polkadot Hackathon.

[Medium Article](https://medium.com/encode-club/polkadot-hack-finale-prizewinners-and-summary-931627c64d9), [Final Video](https://www.youtube.com/watch?v=pcgeV_22eGo)

The arbitrage bot constantly checks for pricing differences between the two platforms and executes trades when they are profitable as defined in the `trading-config.js` file.

## Supported Currency Pairs

* KSM/KUSD
  
## Setup

Make sure you have the projects source code.

```bash
git clone https://github.com/houtenbos/krakura-bot.git
```

### Define your Trading Configuration

The trading configuration of the arbitrage bot can be found at `src/config/trading-config.js`. This file defines the max trading size of supported currency pairs and the minimal profit margin you are willing to take when executing trades. Adjust this file to your liking and level.

```javascript
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

## Build / Starting the Project

1) Install all dependencies by running `yarn` in the project directory.
2) Build the project by running `yarn build`.
3) Start the arbitrage bot by running `yarn start`.

## Run with Docker

Run the arbitrage bot with Docker by running the following command.

```bash
docker-compose up -d && docker attach krakura
```

Stop the arbitrage bot with `CRTL+C` and make sure to take down the docker container with the following command. Make sure to run the take down command from within the root directory of the project.

```bash
docker-compose down
```

## Bot Startup

When the arbitrage bot starts for the first time, you will be presented with a series of questions to obtain platform credentials. Once all startup questions are answered, your credentials will be encrypted and stored locally on your machine in the project at `src/info/credentials` or `krakura/credentials` if running from Docker. Now, when the arbitrage bot starts, you will only be required to enter your password for the arbitrage bot to access your platform credentials. If you need to reset your stored platform credentials, delete the credentials file at `src/info/credentials` or `krakura/credentials` if running from Docker and restart the arbitrage bot. Once all startup questions are answered, then the arbitrage bot will start looking for profitable trades.

### Bot Questions

1) Fill in your password:
    * This is the password to encrypt your credentials.
2) What is your kraken api key?
    * This is the api key you generate on kraken.com.
3) What is your kraken api secret?  
    * This is the private key of your kraken api key.
4) What is your karura phrase?
    * This is the phrase of the wallet address associated with your karura account.

### Platform Requirements

1) You are required to have balances on both platforms to cover transaction fees.
2) The Kraken Exchange has a minimum order size for KSM. [Kraken Minimum Order Sizes](https://support.kraken.com/hc/en-us/articles/205893708-Minimum-order-size-volume-for-trading)

### Supported Platforms

<p float="left">
<img src="https://github.com/matthewashley1/krakura-bot/blob/master/src/img/kraken.png" width="40%" alt="Kraken.com Logo"/>

<img src="https://github.com/matthewashley1/krakura-bot/blob/master/src/img/karura.png" width="40%" alt="Karura Logo"/> 
</p>

<br>
