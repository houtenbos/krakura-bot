import { KaruraClient } from "../../connectors/karura/karura-client";
import { saveTicker } from "../data/data-log";
type PriceData = {bid: number; ask: number; updated: Date};

export class PriceAggregator{
    private prices: Map<string , Map<string, PriceData>>
    private clients: Map<string, KaruraClient>;
    private isTickerStarted: boolean;
    private assetPairs: string[];
    private updateTime: number = 10000;

    private tickerInterval: NodeJS.Timer;
    constructor(clients: Map<string, KaruraClient> , assetPairs: string[]){
        this.assetPairs = assetPairs;
        this.prices = new Map();
        this.clients = clients;
        for( const platform  of clients.keys()){
            this.prices.set(platform, new Map());
        }
        this.isTickerStarted = false;
        // update 
        setInterval(() => this.updatePrices(), this.updateTime);
        this.tickerInterval = this.startTicker();
    }

    private async updatePrices(){
        for( const [platform, client] of this.clients.entries() ){
            for( const assetPair of this.assetPairs ){
                const bid = await client.getPrice(assetPair, 'sell', 1);
                const ask = await client.getPrice(assetPair, 'buy', 1);
                this.setPrice(platform, assetPair, bid, ask);
            }
        }
    }

    setPrice(platform:string, assetPair: string, bid: number, ask: number, updated: Date = new Date()){
        // if no platform, put it in the object
        if( !this.prices.has(platform) )
            this.prices.set(platform, new Map());

        this.prices.get(platform)?.set(assetPair, {
            bid,
            ask,
            updated
        });
    }

    getPrice(platform: string, assetPair: string): PriceData | undefined {
        return this.prices.get(platform)?.get(assetPair);
    }

    startTicker(){
        if( this.isTickerStarted )
            return this.tickerInterval;

        const tickerInterval = setInterval(() => this.saveTickers(), 15000);
        this.isTickerStarted = true;
        return tickerInterval;
    }

    stopTicker(){
        if( this.isTickerStarted )
        clearInterval(this.tickerInterval);
        this.isTickerStarted = false;
    }

    saveTickers(){
        for( const [platform, assetPairs] of this.prices ){
            for( const [assetPair, priceData] of assetPairs){
                saveTicker({
                    platform,
                    assetPair,
                    bid: priceData.bid,
                    ask: priceData.ask,
                    time: priceData.updated
                })
            }
        }
    }
}