import { Button } from "./ui/button";
import { Input } from "./ui/input";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "./ui/field";

const validationSchema = z.object({
  title: z
    .string()
    .min(3, "Movie title must be at least 3 characters long")
    .max(200, "Movie title must be at most 200 characters long"),
});

type CreateMovieFormData = z.infer<typeof validationSchema>;

interface CreateMovieFormProps {
  onCreate: (title: string) => void;
}

export default function CreateMovieForm({ onCreate }: CreateMovieFormProps) {
  const { register, handleSubmit, reset, formState } =
    useForm<CreateMovieFormData>({
      defaultValues: {
        title: "",
      },
      resolver: zodResolver(validationSchema),
    });

  function onSubmit(data: CreateMovieFormData) {
    onCreate(data.title);
    reset();
  }

  return (
    <form
      className="flex gap-1 items-start mb-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field>
        <Input
          aria-invalid={!!formState.errors.title?.message}
          type="text"
          placeholder="Movie name"
          {...register("title")}
        />
        <FieldError>{formState.errors.title?.message}</FieldError>
      </Field>
      <Button type="submit">Add</Button>
    </form>
  );
}
