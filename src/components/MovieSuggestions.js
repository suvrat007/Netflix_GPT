import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () =>{
    const {movieResults, movieNames} = useSelector(store => store.search);
    if(!movieNames) return null;
    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-75 rounded ">
            <div>
                {movieNames.map((movieName , index) => (
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index]} />
                ))}
            </div>
        </div>
    )
}
export default MovieSuggestions;