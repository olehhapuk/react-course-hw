import { Star, Trash } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Toggle } from "./ui/toggle";
import type { Movie } from "@/types/movie";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

interface MovieCardProps {
  onFavorite: (id: string, isFavorite: boolean) => void;
  onDelete: (id: string) => void;
  onRatingChange: (id: string, rating: number) => void;
  movie: Movie;
}

export default function MovieCard({
  movie,
  onFavorite,
  onDelete,
  onRatingChange,
}: MovieCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3.5">
        <p>{movie.title}</p>

        <Slider
          value={[movie.sliderValue]}
          onValueChange={(val) => onRatingChange(movie.id, val[0])}
          className="flex-1"
        />
        <span className="text-3xs text-yellow-400">{movie.sliderValue}</span>

        <div className="flex items-center gap-1">
          <Toggle
            pressed={movie.isFavorite}
            onPressedChange={(isPressed) => onFavorite(movie.id, isPressed)}
            className="data-[state=on]:text-yellow-500 data-[state=on]:*:[svg]:fill-current"
          >
            <Star />
          </Toggle>

          <Button
            type="button"
            variant="destructive"
            size="icon-sm"
            onClick={() => onDelete(movie.id)}
          >
            <Trash />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
