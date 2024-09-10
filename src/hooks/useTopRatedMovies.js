import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"; // Make sure this includes your API key.
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const json = await response.json();
      // console.log(json.results);

      // Dispatch action to add movies to the Redux store
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []); // Empty array to run once on mount
};

export default useTopRatedMovies;
