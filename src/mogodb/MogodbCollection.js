
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shinichi495:vukhanhlinh@123@mongo-namph-test-sjszt.mongodb.net/test?retryWrites=true";
const DB = 'mongo-graphql-test'
const USER_TABLE = 'user'


class MongoDB {
    constructor() {

    }
    async login(user, pass) {
        try {
            var client = await new MongoClient(uri, { useNewUrlParser: true });
            await client.connect();
            const collection = client.db(DB).collection(USER_TABLE)
            const res = await collection.findOne({ user: user, pass: pass })
            if (!res) {
                client.close()
                return false
            } else {
                client.close()
                return true
            }
        } catch (error) {
            console.log('dsadsa');
            
            client.close()
            return false
        }
    }
    async signUp(user, pass) {
        try {
            const client = new MongoClient(uri, { useNewUrlParser: true });
            await client.connect();
            const collection = client.db(DB).collection(USER_TABLE)
            const res = await collection.insertOne({ user: user, pass: pass })
            if (!res) {
                client.close()
                return false
            } else {
                client.close()
                return true
            }
        } catch (error) {
            client.close()
            return false
        }
    }

}
module.exports = new MongoDB()