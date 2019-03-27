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
            const success = await DB.login(args.user, args.pass)
            if (!success) {
                throw new UserInputError('User or Password is not good') 
            } else {
                return { user: args.user, pass: args.pass }
            }
        },
        signUp : async (p,args) => {
            console.log(args.user);

            const success = await DB.signUp(args.user, args.pass)
            if (!success) {
                throw new UserInputError('Create User Error')
            } else {
                return { user: args.user, pass: args.pass }
            }
        }
    }
}
module.exports = resolver

