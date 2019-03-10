const { gql } = require('apollo-server')
const schema = gql`
    type Author {
        user : String!
        pass : String!
    }
    type Query  {
        getAuthors : [Author]
    }
    type Mutation {
        addUser (user : String!, pass : String!) : Author!
    }
`;
module.exports = schema