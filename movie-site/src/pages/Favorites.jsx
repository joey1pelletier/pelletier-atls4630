import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
function Favorites() {
    const {favorites} = useMovieContext();

    if(favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
            
                <div className="movies-grid">
                    {favorites.map((movie) => 
                        (
                        // code below: conditionally render moviecard only if beginning of movie title begins with searchText
                        //movie.title.toLowerCase().startsWith(searchQuery) && (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                    )}
                </div>
            </div>
        );
        
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here.</p>
        </div>
    )
}

export default Favorites

/* NOTES

    Page-Routing
        Need to install the React Router on terminal
            when local server is not running: npm install react-router-dom 
        Import BrowserRouter into main.jsx and then surround the app element with the BrowserRouter element

        on main element on app.jsx
            put Routes element inside of main
            on top of app.jsx, put in import {Routes, Route} from "react-router-dom"
            put in Route to whichever page inside of routes, as shown in App.jsx

        For navbars
            import link from react-router-dom
            links essentially are like hyperlinks from vanilla web
*/