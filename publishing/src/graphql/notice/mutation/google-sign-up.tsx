import { gql } from "@apollo/client";

const MUTATION_GOOGLE_SIGN_UP = gql`
  mutation Mutation($accessToken: String!) {
    signUpGoogle(accessToken: $accessToken) {
      token {
        accessToken
      }
      user {
        id
      }
    }
  }
`;

export default MUTATION_GOOGLE_SIGN_UP;
