[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<br>

<img src="https://github.com/matthewashley1/krakura-bot/blob/master/src/img/krakura.png"  width="50%" alt="Krakura Logo"/>

Is an arbitrage trading bot between the Kraken CEX and the Karura Defi Platform. This project was created through [Encode Club's](https://www.encode.club/) Polkadot and Hack Defi Hackathons.

Medium Articles: [Polkadot](https://medium.com/encode-club/polkadot-hack-finale-prizewinners-and-summary-931627c64d9), [Hack Defi](https://medium.com/encode-club/hack-defi-with-wintermute-finale-prizewinners-and-summary-3a5de6e92967)

Finals Video: [Polkadot](https://youtu.be/pcgeV_22eGo?t=2916), [Hack Defi](https://youtu.be/mt6N6cLQ7WE?t=1942)

The arbitrage bot constantly checks for pricing differences between the two platforms and executes trades when they are profitable as defined in the `trading-config.js` file.

## Supported Currency Pairs

* KSM/KUSD
  
## Setup

Make sure you have the projects source code.

```bash
git clone https://github.com/houtenbos/krakura-bot.git
```

### Define your Trading Configuration

The trading configuration of the arbitrage bot can be found at `src/config/app/trading-config.js`. This file defines the max trading size of supported currency pairs and the minimal profit margin you are willing to take when executing trades. Adjust this file to your liking and level.

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

# Run The Project

## Build / Starting the Project with Yarn 

1) Install all dependencies by running `yarn` in the project directory.
2) Build the project by running `yarn build`.
3) Start the arbitrage bot by running `yarn start`.

## Run with Docker

Install [Grafana Docker driver client](https://grafana.com/docs/loki/latest/clients/docker-driver/#installing) by running the following command.

```sh
docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
```

Verify the plugin was install successfully by running the following command.

```sh
docker plugin ls
```

Update Docker's `daemon.json` file to set the default logging driver to Loki. To configure the Docker daemon using a JSON file, create a file at /etc/docker/daemon.json on Linux systems, or C:\ProgramData\docker\config\daemon.json on Windows. On MacOS go to the whale in the taskbar > Preferences > Docker Engine. Once updated, you have to restart Docker.

[Grafana change the default logging driver](https://grafana.com/docs/loki/latest/clients/docker-driver/configuration/#change-the-default-logging-driver)

[Docker configure logging drivers](https://docs.docker.com/config/containers/logging/configure/)

[Docker configure and troubleshoot the Docker daemon](https://docs.docker.com/config/daemon/#configure-the-docker-daemon)

[Docker daemon](https://docs.docker.com/engine/reference/commandline/dockerd/)

```json
{
    "log-driver": "loki",
    "log-opts": {
        "loki-batch-size": "400",
        "loki-url": "http://localhost:3100/loki/api/v1/push"
    }
}
```

Run the arbitrage bot with Docker by running the following command.

```sh
docker-compose up -d --force-recreate && docker attach krakura
```

View the bot's **Grafana Dashboard** by navigating to `localhost:3000`. To [login](https://grafana.com/docs/grafana/v7.5/administration/configuration/#admin_user) the default username is **`admin`** and the default password is **`admin`**. You will then be prompted to updated the password for the admin account which you can do or skip.

Verify the Loki log aggregation service is ready to ingest logs by navigating to `localhost:3100/ready`. A ready message will be outputted when the service is ready. If a waiting message is displayed, such as `"Ingester not ready: waiting for 15s after being ready"` just refresh the page until the ready message is presented.

Stop the arbitrage bot with `CTRL+C` and make sure to take down the docker containers with the following command. Make sure to run the take down command from within the root directory of the project. The Loki and Grafana containers sometimes take a while to stop.

```sh
docker-compose down
```

## Bot Startup

When the arbitrage bot starts for the first time, you will be presented with a series of questions to obtain platform credentials. Once all startup questions are answered, your credentials will be encrypted and stored locally on your machine in the project at `src/config/app/credentials`. Now, when the arbitrage bot starts, you will only be required to enter your password for the arbitrage bot to access your platform credentials. If you need to reset your stored platform credentials, delete the credentials file at `src/config/app/credentials` and restart the arbitrage bot. Once all startup questions are answered, then the arbitrage bot will start looking for profitable trades.

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
