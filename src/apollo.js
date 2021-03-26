import { ApolloClient, InMemoryCache } from "@apollo/client";
const OPTIONS = {
  cache: new InMemoryCache(),
  uri: "http://localhost:4000",
};
const client = new ApolloClient(OPTIONS);
export default client;
