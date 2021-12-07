import { Mongoose } from "mongoose";
import * as config from  "../../config/database/mongodb.json";

const connection = new Mongoose();

connection.connect( config.connectionString + "/krakura")
    .then(() => console.log('Ledger connected to MongoDB...'))
    .catch(err => console.error('Ledger could not connect to MongoDB:', err.message));

export = connection;
