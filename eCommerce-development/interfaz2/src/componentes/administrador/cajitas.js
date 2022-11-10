import { MovieCard } from "./MovieCard";
import movies from '../../movies.json';
import styles from '../../style/Estilo2.module.css'
import AdminNavbar from "./adminNavbar";

export function Cajitas() {

    return (

        <>
            <AdminNavbar></AdminNavbar>
            <div className="container">
                <ul className={styles.moviesGrid}>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}

                </ul>
            </div>
        </>
    );
}
