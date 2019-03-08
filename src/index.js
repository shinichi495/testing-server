const {ApolloServer} =  require('apollo-server') 
const resolver = require('./resolvers').default
const schema = require('./schema')

const resolverss = resolver
console.log(resolverss);

const server = new ApolloServer({
    typeDefs : schema,
    resolvers : resolverss
});
server.listen().then(({url}) => {
    console.log(`server start at ${url}`);
})