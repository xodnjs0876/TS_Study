import { useMutation } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import MUTATION_GET_KAKAO_ACCESS_TOKEN from "../../graphql/notice/mutation/get-kakao-access-token";
import MUTATION_KAKAO_SIGN_UP from "../../graphql/notice/mutation/kakao-sign-up";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCookie, setCookie } from "../../components/cookie";
import { useIsLoggedInContext } from "../../components/auth/provider";

export default function KaKaoRedirect() {

    const [searchParams, setSeratchParams] = useSearchParams();
    const navigate = useNavigate();
    const code = searchParams.get("code");
    const [isLoggin,setLogin,logout] = useIsLoggedInContext();

    const [accessToken] = useMutation(MUTATION_GET_KAKAO_ACCESS_TOKEN);
    const [signKakao] = useMutation(MUTATION_KAKAO_SIGN_UP);

    useEffect(()=>{
        accessToken({
            variables:{
                code: `${code}`,
                redirectUri: process.env.REACT_APP_REDIRECT_URI,
            }
        })
        .then(res => {
            if(res.data.getKakaoAccessToken){
                window.Kakao.Auth.setAccessToken(res.data.getKakaoAccessToken.jwtData.access_token)
                signKakao({
                    variables:{
                        accessToken: `${res.data.getKakaoAccessToken.jwtData.access_token}`,
                    }
                })
            .then(res =>{
                if(res.data.signUpKakao.user.id){
                    setLogin(`${res.data.signUpKakao.token.accessToken}`)
                    navigate("/",{
                        replace:true,
                        
                    })
                }
                else {
                    navigate("/oauth")
                    console.log("회원가입을 해주세요 ")
                }
            })
        }
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    return (
        <div>
        </div>
    )
}