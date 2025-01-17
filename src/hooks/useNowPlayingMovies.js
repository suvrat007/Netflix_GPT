import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../utils/constatants";
import {addNowPlayingMovies} from "../utils/movieSlice";
import {useEffect} from "react";

const useNowPlayingMovies = () =>{
    //fetching data from tmdb api and update store

    const nowPlayingMovies = useSelector(store=>store?.movies?.nowPlayingMovies);


    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;