import type { Movie } from "@/types/movie";
import MovieCard from "./movie-card";

interface MoviesListProps {
  onFavorite: (id: string, isFavorite: boolean) => void;
  onDelete: (id: string) => void;
  onRatingChange: (id: string, rating: number) => void;
  movies: Movie[];
}

export default function MoviesList({
  movies,
  onFavorite,
  onDelete,
  onRatingChange,
}: MoviesListProps) {
  return (
    <div className="flex flex-col gap-2">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onFavorite={onFavorite}
          onDelete={onDelete}
          onRatingChange={onRatingChange}
        />
      ))}
    </div>
  );
}
