import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import "./index.css";
import { getMainDefinition } from "@apollo/client/utilities";

localStorage.setItem("accessToken", `${process.env.REACT_APP_ACCESS_TOKEN}`);

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_API_KEY}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
const wsLink = new GraphQLWsLink(
  createClient({
    url: `${process.env.REACT_APP_GRAPHQL_WEBSOCKET_API_KEY}`,
    connectionParams: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
);
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({}),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
