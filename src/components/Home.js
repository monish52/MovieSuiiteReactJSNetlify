import React,{useState, useEffect} from 'react';
//API
import API from '../API';
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

//Hook
import {useHomeFetch} from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';


const Home=()=>{
   
    const{state,loading,error, setSearchTerm,searchTerm,setIsLoadingMore}=useHomeFetch();
    
    if(error) return <div>Something went wrong...</div>
    console.log(state);

    return (
        <div>   
        {state.results[0] ? 
        <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
        /> : null}

        <SearchBar setSearchTerm={setSearchTerm}></SearchBar>

        <Grid header={!searchTerm ? 'Popular Movies' : 'Search Results'}>
            {state.results.map(movie=>(
                <Thumb key={movie.id} clickable 
                    image={movie.poster_path ? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path : NoImage}
                    movieId={movie.id}>
                </Thumb>
            ))}
        </Grid>
        {loading && <Spinner></Spinner>}
        {state.page<state.total_pages && !loading && (
            <Button text='Load More' callback={()=>setIsLoadingMore(true)}></Button>
        )}
        </div> 
    );  
}

export default Home;