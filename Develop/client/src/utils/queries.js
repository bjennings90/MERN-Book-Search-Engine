import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me() {
    me {
      _id
      email
      username
      saveBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;