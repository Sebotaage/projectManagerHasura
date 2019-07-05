import gql from 'graphql-tag';

export const getUsers = gql`
  query getUsers {
    users {
      name
    }
  }
`;
