import { DBBase } from "./DBBase";
import { MongoClient } from 'mongodb'
const uri = "mongodb+srv://shinichi495:vukhanhlinh@123@mongo-namph-test-sjszt.mongodb.net/test?retryWrites=true";
const DBMongo = 'mongo-graphql-test'
const USER_TABLE = 'user'
class DB  {
    // connetWithMGDB() {
    //     if (this.client && this.client.isConnected) return
    //     this.client = new MongoClient(uri, { useNewUrlParser: true });
    //     this.client.connect();
    // } disconectWithMGDB() {
    //     throw new Error("Method not implemented.");
    // }
    // createCollection() {
    //     throw new Error("Method not implemented.");
    // }


}