import { MongoClient } from 'mongodb'
const uri = "mongodb+srv://shinichi495:vukhanhlinh@123@mongo-namph-test-sjszt.mongodb.net/test?retryWrites=true";
const DB = 'mongo-graphql-test'
const USER_TABLE = 'user'
export abstract class DBBase {
    protected client: MongoClient;
    constructor() {
        this.connetWithMGDB()
    }
    abstract connetWithMGDB(); 
    abstract disconectWithMGDB ();
    abstract createCollection ();
    
}