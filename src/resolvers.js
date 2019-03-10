const DB = require('./mogodb/MogodbCollection')
const { UserInputError } = require('apollo-server')
const resolver = {
    Query: {
        getAuthors: () => {
            return [{ user: "shinichi495", pass: "sddsdad2321" }]
        }
    },
    Mutation: {
        addUser: (parent, args) => {
            return { user: args.user, pass: args.pass }
        },
        login: async (parent, args) => {
            const db = new DB()
            const success = await db.login(args.user, args.pass)
            if (!success) {
                throw new UserInputError('User or Password is not good')
            } else {
                return { user: args.user, pass: args.pass }
            }
        }
    }
}
module.exports = resolver

