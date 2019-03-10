
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shinichi495:vukhanhlinh@123@mongo-namph-test-sjszt.mongodb.net/test?retryWrites=true";
const DB = 'mongo-graphql-test'
const USER_TABLE = 'user'
// client.connect(err => {
//     if (err) {
//         console.log('have error ', err)
//     } else {
//         console.log('conneted.... ')
//         const collection = client.db("mongo-graphql-test").collection("user");
//         collection.find({}).toArray((err, result) => {
//             console.log(result);
//         })
//         client.close();
//     }
// });

class MongoDB {
    constructor() {
        this.client = new MongoClient(uri, { useNewUrlParser: true });
    }
    async login(user, pass) {
        try {
            await this.client.connect();
        const collection = this.client.db(DB).collection(USER_TABLE)
        const res = await collection.findOne({ user: user, pass: pass })
        if (!res) {
            return false
        } else {
            return true
        }
        } catch (error) {
            return false
        }
        
    }
}
module.exports = MongoDB