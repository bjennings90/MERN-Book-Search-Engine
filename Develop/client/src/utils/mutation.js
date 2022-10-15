import { gql } from '@apollo/client';

export const ADD_USER = gql`

  mutation AddUser($password: String!, $email: String!, $username: String!) {

    addUser(password: $password, email: $email, username: $username) {

      token
      user {
        username
        _id
        }
      
      

    }

  }

`;

