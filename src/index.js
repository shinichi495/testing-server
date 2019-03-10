const {ApolloServer} =  require('apollo-server') 
const resolver = require('./resolvers')
const schema = require('./schema')
const resolverss = resolver
const server = new ApolloServer({
    typeDefs : schema,
    resolvers : resolverss,
    introspection: true,
    playground : true
});
server.listen({port : process.env.PORT || 5000}).then(({url}) => {
    console.log(`server start at ${url}`);
})