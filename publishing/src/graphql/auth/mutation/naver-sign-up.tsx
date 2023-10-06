import { gql } from "@apollo/client";

const MUTATION_NAVER_SIGN_UP = gql`
  mutation ($accessToken: String!) {
    signUpNaver(accessToken: $accessToken) {
      token {
        accessToken
      }
      user {
        id
      }
    }
  }
`;

export default MUTATION_NAVER_SIGN_UP;
