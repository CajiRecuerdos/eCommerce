import styles from "../../style/Estilo.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = movie.poster_path;
  return (
    <div className="card" style={{ width: "16rem", padding: "5px", margin: "5px" }}>
      <li className={styles.movieCard}>
          <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
          />
      </li>
      <div className="card-body">
        <div> {movie.title}</div>
        <p className="card-text">{movie.overview}</p>
        <p className="card-text">{movie.stock}</p>
      </div>
      <Link type="button" class="btn btn-primary boton-call" to="/modificar-producto">Modificar</Link>
    </div>
        
  );
}



