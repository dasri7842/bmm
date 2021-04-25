import { apiUrls } from "../helpers/apiUrls";
import useGetData from "./../hooks/useGetData";
import TopMovies from "./homeComponents/TopMovies";
import SearchCity from "./homeComponents/SearchCity";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home");
  const allCities = useGetData(apiUrls.allCities());
  const topMovies = useGetData(apiUrls.topMovies());

  return (
    <div className="mx-lg-5">
      <SearchCity {...allCities} />
      <br className="my-5" />
      <TopMovies {...topMovies} />
    </div>
  );
};

export default Home;
