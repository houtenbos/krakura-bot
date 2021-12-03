import { Balance } from "./models/balance";
import { Ticker } from "./models/ticker";
import { Order } from "./models/order";
import { Trade } from "./models/trade";

interface Balance {
    platform: string;
    currency: string;
    total: number;
    free: number;
    placed: number;
    time: Date;
}

export function saveBalance(input: Balance){
    const balance = new Balance(input);
    return balance.save().catch( (e: Error) => console.log(e));
}

interface Ticker {
    platform: string;
    assetPair: string;
    bid: number;
    ask: number;
    time: Date;
}

export function saveTicker(input: Ticker){
    const ticker = new Ticker(input);
    return ticker.save().catch( (e: Error) => console.log(e));
}

interface Order {
    platform: string;
    assetPair: string;
    time: Date;
    type?: 'market' | 'limit' | 'amm';
    direction: 'buy' | 'sell';
    volume: number;
    price: number;
    orderId: string;
    volumeExecuted: number;
    costs: number;
    fees?: Object;
}

export function saveOrder(input: Order){
    const order = new Order(input);
    return order.save().catch( (e: Error) => console.log(e));
}

interface Trade {
    buyOrder: Order;
    sellOrder: Order;
    time: Date;
}

export function saveTrade(input: Trade){
    const trade = new Trade(input);
    return trade.save().catch( (e: Error) => console.log(e));
}