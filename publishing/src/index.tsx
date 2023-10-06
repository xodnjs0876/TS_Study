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

localStorage.setItem(
  "accessToken",
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQUNDRVNTIiwiaWQiOiIxODlmZDc1Yy01MWYyLTRlOWUtOTcyMC0zYjk4ZGQ1Zjk5NjkiLCJwYXJlbnQiOiJmZWQ3OGQ0Zi1jM2MzLTRhYTMtOTdkMy0yNDUzMWU2Zjg2NzgiLCJpYXQiOjE2OTU3Nzg4MDcsImV4cCI6OTQ3MTc3ODgwNywiaXNzIjoia19maXJpIiwic3ViIjoiMTg5ZmQ3NWMtNTFmMi00ZTllLTk3MjAtM2I5OGRkNWY5OTY5IiwianRpIjoiMjc1MGUzMWUtMzc3MC00NDQxLWFjYmItZWRmMTJhZDVkODBiIn0.Q5puQEyGSWqcD0HbDqDMLnw0ggsGZuY96XU9eQa-7Z8gQXaUDd8ctfrzFgJeXr-eRaq6TuWMZiTtXqtUxsvDHw"
);

const httpLink = new HttpLink({
  uri: "http://211.110.139.183:5900/graphql",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://211.110.139.183:5900/graphql",
    connectionParams: {
      authToken: localStorage.getItem("accessToken"),
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
  // headers:{
  //   Authorization:"Bearer accesstoken"
  // },
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
