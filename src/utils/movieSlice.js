import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTralier:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,

    },
    reducers:{
        addPlayingNowMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addupcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addmovieTrailer:(state,action)=>{
            state.movieTralier=action.payload
        },
    },
});

export const{addPopularMovies,addPlayingNowMovies,addmovieTrailer,addTopRatedMovies,addupcomingMovies}=movieSlice.actions;

export default movieSlice.reducer;