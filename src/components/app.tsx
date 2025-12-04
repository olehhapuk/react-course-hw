import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import PageTitle from "./page-title";
import CreateMovieForm from "./create-movie-form";
import MoviesList from "./movies-list.tsx";
import { useEffect, useState } from "react";
import type { Movie } from "@/types/movie";
import { nanoid } from "nanoid";

function saveMovies(movies: Movie[]) {
  localStorage.setItem("movies", JSON.stringify(movies));
}

function loadMovies() {
  const persistedData = localStorage.getItem("movies");
  if (!persistedData) {
    return [];
  }

  return JSON.parse(persistedData) as Movie[];
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>(loadMovies);

  useEffect(() => {
    saveMovies(movies);
  }, [movies]);

  function createMovie(title: string) {
    const newMovie: Movie = {
      id: nanoid(),
      isFavorite: false,
      title,
      sliderValue: 0,
    };

    setMovies((prev) => [...prev, newMovie]);
  }

  function favoriteMovie(id: string, isFavorite: boolean) {
    setMovies((prev) =>
      prev.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            isFavorite,
          };
        } else {
          return movie;
        }
      })
    );
  }

  function onRatingChange(id: string, rating: number) {
    setMovies((prev) =>
      prev.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            sliderValue: rating,
          };
        } else {
          return movie;
        }
      })
    );
  }

  function deleteMovie(id: string) {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  }

  const favoriteMovies = movies.filter((movie) => movie.isFavorite);

  return (
    <div className="max-w-2xl mx-auto p-2">
      <PageTitle />
      <CreateMovieForm onCreate={createMovie} />

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Movies</TabsTrigger>
          <TabsTrigger value="favorites">Favorite Movies</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <MoviesList
            movies={movies}
            onFavorite={favoriteMovie}
            onDelete={deleteMovie}
            onRatingChange={onRatingChange}
          />
        </TabsContent>

        <TabsContent value="favorites">
          <MoviesList
            movies={favoriteMovies}
            onFavorite={favoriteMovie}
            onDelete={deleteMovie}
            onRatingChange={onRatingChange}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
