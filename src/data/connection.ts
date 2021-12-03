import { Mongoose } from "mongoose";
import * as config from  "../config/database-config.json";
import { getMongoUrl } from "./util";

const connection = new Mongoose();
const mongodbUrl = getMongoUrl(config);

connection.connect("mongodb://localhost:27017/krakura")
    .then(() => console.log('Ledger connected to MongoDB...'))
    .catch(err => console.error('Ledger could not connect to MongoDB:', err.message));

export = connection;
