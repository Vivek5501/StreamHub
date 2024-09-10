import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"; // Make sure this includes your API key.
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const json = await response.json();
      // console.log(json.results);

      // Dispatch action to add movies to the Redux store
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []); // Empty array to run once on mount
};

export default usePopularMovies;
