import MovieCard from "./MovieCard";

const MovieList = ({ title, movies}) => {
  console.log(movies);
  if(!movies) return;
  return (
   <div className=" px-6">
     <h1 className=" text-2xl py-4 text-white">{title}</h1>
    <div className=" flex overflow-x-scroll scrollbar-hide">
       
        <div className="flex">
            {movies?.map((movie)=>
            <MovieCard key={movie.key} poster={movie?.poster_path}/>
        )}
        </div>
    </div>
   </div>
  );
};

export default MovieList;
