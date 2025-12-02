import { Input } from "./ui/input";
import { Button } from "./ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "./ui/field";

const validationSchema = z.object({
  title: z
    .string()
    .min(3, "Write at least 3 characters")
    .max(60, "Limit is 60 characters"),
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
      className="flex gap-1 items-start mb-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field>
        <Input
          aria-invalid={!!formState.errors.title?.message}
          type="text"
          placeholder="Enter movie name here"
          {...register("title")}
        ></Input>
        <FieldError className="min-h-5">
          <span
            className={formState.errors.title ? "opacity-100" : "opacity-0"}
          >
            {formState.errors.title?.message}
          </span>
        </FieldError>
      </Field>
      <Button
        type="submit"
        className="bg-blue-900 text-white hover:bg-blue-800 cursor-pointer"
      >
        Add
      </Button>
    </form>
  );
}
