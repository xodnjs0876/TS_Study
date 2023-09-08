import { useMutation } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MUTATION_NAVER_SIGN_UP from "../../graphql/notice/mutation/naver-sign-up";
import { error } from "console";
import { getCookie, removeCookie, setCookie } from "../../components/cookie";
import { useIsLoggedInContext } from "../../components/auth/provider";

export default function NaverRedirect() {

    const navigate = useNavigate();
    const location = useLocation();
    const code = new URL(window.location.href).searchParams.get("code")!;
    const state = new URL(window.location.href).searchParams.get("state")!;
    const [isLoggin,setLogin,logout] = useIsLoggedInContext();
    const [accessToken] = useMutation(MUTATION_NAVER_SIGN_UP);

    useEffect(()=> {
        if(!location.search) return ;
        getNaverToken()
        .then(access_token => {
            if(access_token) {
                accessToken({
                    variables:{
                        accessToken: access_token
                    }
                })
                .then(res => {
                    if(res.data.signUpNaver.user.id){
                        setLogin(`${res.data.signUpNaver.token.accessToken}`)
                        navigate("/", {
                            replace: true,
                        })
                    }
                    else {
                        console.log("에러")
                    }
                })
                .catch(error => {
                    console.log("나는 에러",error)
                })
            } else {
                // removeCookie("token", {
                //     path: '/',
                // });
                navigate("/oauth")
            } 
        });
    })

    const getNaverToken = () : Promise<string> => {
        return new Promise((resovle,reject)=>{
            fetch(`/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_NAVER_API_KEY}&client_secret=${process.env.REACT_APP_NAVER_SECRET_KEY}&code=${code}&state=${state}`, {
                method: "GET",
                // headers: {
                //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                // },
                // body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_NAVER_API_KEY}&client_secret=${process.env.REACT_APP_NAVER_SECRET_KEY}&code=${code}&state=${state}`,
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                resovle(data.access_token)
            } else {
                console.log("나는 토큰 데이타", data)
                reject(new Error("나는 토큰 데이타"))
            }
        })
        .catch(error => {
            console.log("에러",error);
            reject(error)
        })
        })
    };

    return (
        <div>
        </div>
    )
}