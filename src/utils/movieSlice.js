import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTralier:null,
    },
    reducers:{
        addPlayingNowMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addmovieTrailer:(state,action)=>{
            state.movieTralier=action.payload
        },
    },
});

export const{addPlayingNowMovies,addmovieTrailer}=movieSlice.actions;

export default movieSlice.reducer;