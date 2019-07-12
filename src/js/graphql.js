import gql from 'graphql-tag';

export const getUsers = gql`
  query getUsers {
    users {
      name
    }
  }
`;

export const getProjects = gql`
query getProjects{
  projects {
    name
    stage
    auth
    backend
    css
    database
    description
    frontend
    git
  }
}`;