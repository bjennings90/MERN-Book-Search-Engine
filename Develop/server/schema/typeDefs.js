const { gql } = require('apollo-server-express');


const typeDefs = gql`
 
    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Book]
      }

      type Book {
        _id: ID
        bookId: String
        title: String
        link: String
        description: String
        image: String
        authors: [String]
      }

      type Auth {
        token: ID!
        user: User
      }

      type Query {
        me: User
        users: [User]
        user(username: String!): User
      }
      type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookId: String!, title: String!, link: String!, description: String!, image: String!, authors: [String]): User
        removeBook(bookId: String!): User


      }
`;

module.exports = typeDefs;