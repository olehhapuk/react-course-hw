import { Toggle } from "@radix-ui/react-toggle";
import { Card, CardContent } from "./ui/card";
import { Star, Trash } from "lucide-react";
import type { Movie } from "@/types/movie";
import { Button } from "./ui/button";

interface MovieCardProps {
  onFavorite: (id: string, isFavorite: boolean) => void;
  onDelete: (id: string) => void;
  movie: Movie;
}

export default function MovieCard({
  movie,
  onFavorite,
  onDelete,
}: MovieCardProps) {
  return (
    <Card className=" border-blue-900 border-b-4 bg-linear-to-r from-stone-950 via-blue-800 to-black">
      <CardContent className="flex justify-between items-center">
        <p>{movie.title}</p>
        <div className="flex items-center gap-2">
          <Toggle
            pressed={movie.isFavorite}
            onPressedChange={(isPressed) => onFavorite(movie.id, isPressed)}
            className="data-[state=on]:text-white data-[state=on]:*:[svg]:fill-current cursor-pointer"
          >
            <Star className="text-white"></Star>
          </Toggle>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => onDelete(movie.id)}
          >
            <Trash className="text-blue-700" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
