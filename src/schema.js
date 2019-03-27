const {
    gql
} = require('apollo-server')
const schema = gql `
    type Author {
        user : String!
        pass : String!
    }
    type Query  {
        getAuthors : [Author]
    }
    type Mutation {
        addUser (user : String!, pass : String!) : Author!
        login (user : String!,pass : String!) : Author!
        signUp (user : String!,pass : String!) : Author!
    }
`;
module.exports = schema