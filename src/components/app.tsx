import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTitle from "./page-title";
import CreateMovieForm from "./create-movie-form";
import MoviesList from "./movie-list";
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

  function deleteMovie(id: string) {
    setMovies((prev) =>
      prev.filter((movie) => {
        if (movie.id !== id) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  const favoriteMovies = movies.filter((movie) => movie.isFavorite);
  return (
    <div className="max-w-2xl mx-auto p-2 bg-blue-950">
      <PageTitle></PageTitle>
      <CreateMovieForm onCreate={createMovie}></CreateMovieForm>

      <Tabs defaultValue="all">
        <TabsList className="bg-blue-900 border-amber-50">
          <TabsTrigger value="all">All Movies</TabsTrigger>
          <TabsTrigger value="favorites">Favorite Movies</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <MoviesList
            movies={movies}
            onFavorite={favoriteMovie}
            onDelete={deleteMovie}
          />
        </TabsContent>

        <TabsContent value="favorites">
          <MoviesList
            movies={favoriteMovies}
            onFavorite={favoriteMovie}
            onDelete={deleteMovie}
          ></MoviesList>
        </TabsContent>
      </Tabs>
    </div>
  );
}
