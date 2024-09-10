// import MovieList from "./MovieList";
import {IMG_URL} from "../utils/constants";

const MovieCard=({poster})=>{
    return(
        <div className=" w-48  pr-4 hover:opacity-80 cursor-pointer shadow-lg transition-all duration-700 hover:scale-110">
         <img src={IMG_URL+poster} alt="Movie Card"/>
        </div>
    )
}

export default MovieCard;