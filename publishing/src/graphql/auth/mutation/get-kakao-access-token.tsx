import { gql } from "@apollo/client";

const MUTATION_GET_KAKAO_ACCESS_TOKEN = gql`
  mutation GetKakaoAccessToken($code: String!, $redirectUri: String!) {
    getKakaoAccessToken(code: $code, redirectUri: $redirectUri) {
      isJoin
      jwtData {
        access_token
      }
    }
  }
`;

export default MUTATION_GET_KAKAO_ACCESS_TOKEN;
