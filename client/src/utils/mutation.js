import { gql } from '@apollo/client';

export const ADD_USER = gql`

  mutation AddUser($password: String!, $email: String!, $username: String!) {

    addUser(password: $password, email: $email, username: $username) {

      token
      user {
        username
        email
        _id
        }
      
      

    }

  }

`;

export const LOGIN_USER = gql`

  mutation LoginUser($password: String!, $email: String!) {

    loginUser(password: $password, email: $email) {

      token
      user {
        username
        email
        _id
        }
      
      

    }

  }

`;

export const ADD_BOOK = gql`
  mutation SaveBook($bookId: String!, $title: String!, $description: String!, $link: String, $image: String!) {
    saveBook(bookId: $bookId, title: $title, description: $description, link: $link, image: $image) {
        savedBooks {
            bookId
            title
            description
            link
            image
            authors
        }
        _id
        username
        email
    }
  }
`

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        savedBooks {
            bookId
            title
            description
            link
            image
            authors
        }
        _id
        username
        email
    }
  }
`
