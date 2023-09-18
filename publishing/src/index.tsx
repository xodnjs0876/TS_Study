import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URL,
  cache: new InMemoryCache({}),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ?? "";
root.render(
  <App />
  // <ApolloProvider client={client}>
  //   <GoogleOAuthProvider clientId={googleClientId}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </GoogleOAuthProvider>
  // </ApolloProvider>
);
reportWebVitals();
