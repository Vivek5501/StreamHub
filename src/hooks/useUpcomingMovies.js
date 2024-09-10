import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"; // Make sure this includes your API key.
import { useEffect } from "react";
import {addupcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const json = await response.json();
      // console.log(json.results);

      // Dispatch action to add movies to the Redux store
      dispatch(addupcomingMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []); // Empty array to run once on mount
};

export default useUpcomingMovies;
