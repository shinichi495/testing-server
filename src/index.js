const {ApolloServer,gql} =  require('apollo-server') 
const schema = gql`
    type Query {
        me : User
    }
    type User {
        user : String!
        pass : String!
    }
` ;
const resolver = {
    Query: {
        me : () => {
            return {user : "shinichi495", pass : "13232"}
        }
    }
};
const server = new ApolloServer({
    typeDefs : schema,
    resolvers : resolver
});
server.listen().then(({url}) => {
    console.log(`server start at ${url}`);
})