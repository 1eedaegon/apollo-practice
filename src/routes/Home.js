import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Header from "../Components/Header";

const GET_MOVIES = gql`
  {
    movies(limit: 5) {
      id
      title
    }
  }
`;
const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return loading ? (
    <Header text={"Now loading..."} />
  ) : data && data.movies ? (
    data.movies.map((m) => <Header key={m.id} text={`${m.id},${m.title}`} />)
  ) : (
    <Header text={"Not exist :("} />
  );
};
export default Home;
