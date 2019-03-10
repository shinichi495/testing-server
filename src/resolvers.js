const resolver = {
    Query: {
        getAuthors: () => {
            return [{ user: "shinichi495", pass: "sddsdad2321" }]
        }
    },
    Mutation: {
        addUser: (parent, args) => {
            console.log("dsadsa", args)
            return { user: args.user, pass: args.pass }
        }
    }
}
module.exports = resolver

