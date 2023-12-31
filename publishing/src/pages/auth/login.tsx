import React, { useState } from "react";
import { styled } from "styled-components";
import KaKao from "../../assets/img/kakao-login.svg";
import Naver from "../../assets/img/naver-login.svg";
import Google from "../../assets/img/google-login.svg";
import Apple from "../../assets/img/apple-login.svg";
// import { useIsLoggedInContext } from "../../components/auth/provider";
// import { useMutation } from "@apollo/client";
// import { useNavigate } from "react-router-dom";

interface StyleType {
  Color: string;
  Radius: string;
  Border: string;
}
export default function Login() {
  // const [MutationGoogleLogin] = useMutation(MUTATION_GOOGLE_SIGN_UP);

  // const [, setLogin] = useIsLoggedInContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const kakaoLogin = () => {
  //   window.Kakao.Auth.authorize({
  //     redirectUri: `${process.env.REACT_APP_REDIRECT_URI}`,
  //     prompt: "select_account",
  //   });
  // };
  // const naverLogin = () => {
  //   const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_API_KEY}&state=false&redirect_uri=http://localhost:3000/oauth/naver`;
  //   window.location.href = url;
  // };
  // const googleLogin = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     try {
  //       MutationGoogleLogin({
  //         variables: {
  //           accessToken: tokenResponse.access_token,
  //         },
  //       }).then((res) => {
  //         if (res.data.signUpGoogle.user.id) {
  //           setLogin(res.data.signUpGoogle.token.accessToken);
  //           navigate("/", {
  //             replace: true,
  //           });
  //         }
  //       });
  //     } catch (err) {
  //       console.log("에러", err);
  //     }
  //   },
  //   onError: (errorResponse) => {
  //     if (errorResponse.error_description) {
  //       console.log("에러입", errorResponse.error_description);
  //     }
  //   },
  // });

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const { data: signData } = await signIn({
  //       fetchPolicy: "no-cache",
  //       variables: {
  //         loginId: e. as string,
  //         password: formData.password as string,
  //       },
  //     });
  //     if (signData) {
  //       Authentication.setToken(signData.signIn);
  //       await client.resetStore();
  //       router.back();
  //     } else {
  //       throw new Error("로그인에 실패하였습니다.");
  //     }
  //   } catch (error) {
  //     setIsError(true);
  //     if (error instanceof Error && isApolloError(error)) {
  //       Alert.alert(error.message, "오류");
  //     }
  //   }
  // };
  return (
    <Layout>
      <LoginBox>
        <Text>로그인</Text>
        <Title>
          반갑습니다.
          <br />
          <strong>K-FIRI 한국외식산업연구원</strong>
          입니다.
        </Title>
        <Form>
          <Input
            type="text"
            placeholder="이메일 주소를 입력하세요."
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <Input
            type="text"
            placeholder="비밀번호를 입력하세요."
            className="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <LoginButton type="submit">로그인</LoginButton>
        </Form>
        <DefaultButton className="button">
          <button>회원정보찾기</button>
          <button>이메일 회원가입</button>
        </DefaultButton>
        <SocialLogin>
          <SocialButton Color="#FEE500" Radius="8px" Border="none">
            <img src={KaKao} alt="kakao" />
          </SocialButton>
          <SocialButton Color="#03C75A" Radius="4px" Border="none">
            <img src={Naver} alt="naver" />
          </SocialButton>
          <SocialButton Color="#fff" Border="0.5px solid #2C2C2C" Radius="3px">
            <img src={Google} alt="google" />
            <span className="google">Google로 로그인</span>
          </SocialButton>
          <SocialButton Color="#000" Border="none" Radius="5px">
            <img src={Apple} alt="apple" />
          </SocialButton>
        </SocialLogin>
      </LoginBox>
    </Layout>
  );
}

const Layout = styled.div`
  background-color: #f9f9f9;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  * {
    margin: 0;
    padding: 0;
  }
`;

const LoginBox = styled.div`
  padding: 80px 120px 70px 120px;
  margin-top: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid #d8dde5;
  .password {
    margin-bottom: 30px;
  }
`;

const Text = styled.h1`
  display: flex;
  color: #333;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 125% */
  padding-bottom: 50px;
`;

const Title = styled.div`
  margin-right: auto;
  padding-bottom: 25px;
  color: #666;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 0 18px;
  height: 48px;
  border-radius: 10px;
  border: 1px solid #d8dde5;
  width: 320px;
  color: #000000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  ::placeholder {
    color: #787878;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
  }
  &:focus {
    outline: none;
    border-color: red;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 20px 0;
  align-items: center;
  border-radius: 10px;
  background-color: #5a33be;
  border: none;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 111.111% */
  margin-bottom: 14px;
`;
const DefaultButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 22px;
  border-bottom: 1px solid #bfbfbf;
  margin-bottom: 22px;
  button {
    cursor: pointer;
    background-color: #fff;
    border: none;
    color: #555;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px; /* 100% */
  }
`;
const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SocialButton = styled.button<StyleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => props.Color};
  border: ${(props) => props.Border};
  border-radius: ${(props) => props.Radius};
  height: 48px;
  margin-bottom: 10px;
  .google {
    color: #777;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
