import { gql } from "@apollo/client";

const SIGN_IN = gql`
  mutation Mutation($loginId: String!, $password: String!) {
    signIn(loginId: $loginId, password: $password) {
      accessTokens
    }
  }
`;

export default SIGN_IN;
