import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

export const client = new ApolloClient({
  uri: "http://211.110.139.183:5900/graphql",
  cache: new InMemoryCache({}),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ?? "";
root.render(
  <ApolloProvider client={client}>
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
