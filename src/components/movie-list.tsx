import type { Movie } from "@/types/movie";
import MovieCard from "./movie-card";

interface MoviesListProps {
  onFavorite: (id: string, isFavorite: boolean) => void;
  movies: Movie[];
  onDelete: (id: string) => void;
}

export default function MoviesList({
  movies,
  onFavorite,
  onDelete,
}: MoviesListProps) {
  return (
    <div className="flex flex-col gap-2">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onFavorite={onFavorite}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
