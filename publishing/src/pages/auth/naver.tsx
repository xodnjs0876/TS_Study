import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useIsLoggedInContext } from "../../components/auth/provider";
import { useSignUpNaverMutation } from "../../graphql/graphql";

export default function NaverRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const [, setLogin] = useIsLoggedInContext();
  const [accessToken] = useSignUpNaverMutation();

  useEffect(() => {
    if (!location.search) return;
    getNaverToken().then((access_token) => {
      if (access_token) {
        accessToken({
          variables: {
            accessToken: access_token,
          },
        })
          .then((res) => {
            if (res?.data?.signUpNaver.user.id) {
              setLogin(res.data.signUpNaver.token.accessToken);
              navigate("/", {
                replace: true,
              });
            } else {
              console.log("에러");
            }
          })
          .catch((error) => {
            console.log("나는 에러", error);
          });
      } else {
        navigate("/oauth");
      }
    });
  });

  const getNaverToken = async (): Promise<string> => {
    return new Promise((resovle, reject) => {
      fetch(
        `/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_NAVER_API_KEY}&client_secret=${process.env.REACT_APP_NAVER_SECRET_KEY}&code=${code}&state=${state}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            resovle(data.access_token);
          } else {
            console.log("나는 토큰 데이타", data);
            reject(new Error("나는 토큰 데이타"));
          }
        })
        .catch((error) => {
          navigate("/oauth");
          reject(error);
        });
    });
  };

  return <div></div>;
}
