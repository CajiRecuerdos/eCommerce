import {MovieCard} from "./MovieCard";
import movies from '../../movies.json';
import styles from '../../style/Estilo2.module.css'

export function Cajitas() {

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            
        </ul>
    );
}
