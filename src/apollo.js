import { ApolloClient, InMemoryCache } from "@apollo/client";

const resolvers = {
  Movie: {
    isLiked: () => false,
  },
  Mutation: {
    likeMovie: (_, { id, isLiked }, { cache }) => {
      console.log(id, isLiked);
      cache.modify({
        id: `Movie:${id}`,
        fields: {
          isLiked: (isLiked) => !isLiked,
        },
      });
    },
  },
};

const OPTIONS = {
  uri: "http://localhost:4000",
  cache: new InMemoryCache({}),
  resolvers,
};
const client = new ApolloClient(OPTIONS);
export default client;
