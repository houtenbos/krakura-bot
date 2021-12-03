import { Mongoose } from "mongoose";
import * as config from  "../../config/user_config.json";
import { getMongoUrl } from "./util";

const connection = new Mongoose();
const mongodbUrl = getMongoUrl(config);

connection.connect((config.address || "mongodb://127.0.0.1:27017/") + "krakura")
    .then(() => console.log('Ledger connected to MongoDB...'))
    .catch(err => console.error('Ledger could not connect to MongoDB:', err.message));

export = connection;
