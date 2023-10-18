import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useIsLoggedInContext } from "../../components/auth/provider";
import {
  useGetKakaoAccessTokenMutation,
  useSignUpKakaoMutation,
} from "../../graphql/graphql";

export default function KaKaoRedirect() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  const [, setLogin, logout] = useIsLoggedInContext();

  const [accessToken] = useGetKakaoAccessTokenMutation();
  const [signKakao] = useSignUpKakaoMutation();

  useEffect(() => {
    accessToken({
      variables: {
        code: code!,
        redirectUri: process.env.REACT_APP_REDIRECT_URI!,
      },
    })
      .then((res) => {
        if (res?.data?.getKakaoAccessToken) {
          signKakao({
            variables: {
              accessToken: res.data.getKakaoAccessToken.jwtData.access_token,
            },
          }).then((res) => {
            if (res?.data?.signUpKakao.token.accessToken) {
              setLogin(res.data.signUpKakao.token.accessToken);
              navigate("/", {
                replace: true,
              });
            } else {
              navigate("/oauth");
              alert("로그인 실패");
            }
          });
        }
      })
      .catch((error) => {
        navigate("/");
        logout();
      });
  });

  return <div></div>;
}
