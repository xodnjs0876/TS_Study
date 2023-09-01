import { gql } from "@apollo/client";

const MUTATION_KAKAO_SIGN_IN = gql`
mutation SignUnKakao($accessToken: String!) {
    signInKakao(accessToken: $accessToken) {
        accessToken
    }
}
`;

export default MUTATION_KAKAO_SIGN_IN;
