import { gql } from "@apollo/client";

const MUTATION_KAKAO_SIGN_UP = gql`
mutation SignUpKakao($accessToken: String!) {
    signUpKakao(accessToken: $accessToken) {
        token {
            accessToken
        }
        user {
            phoneNumber
        }
    }
}
`;

export default MUTATION_KAKAO_SIGN_UP;