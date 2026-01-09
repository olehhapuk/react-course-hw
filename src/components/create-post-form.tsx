import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { createPostService } from "@/services/create-post.service";
import { useNavigate } from "react-router";
import { getPostsPath } from "@/constants/routes";
import { Field, FieldGroup } from "./ui/field";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";

const validationSchema = z.object({
  title: z.string().min(3).max(200),
  text: z.string().min(3).max(2000),
});

type CreatePostFormData = z.infer<typeof validationSchema>;

export default function CreatePostForm() {
  const { register, handleSubmit, formState } = useForm<CreatePostFormData>({
    defaultValues: {
      title: "",
      text: "",
    },
    resolver: zodResolver(validationSchema),
  });

  const navigate = useNavigate();

  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: createPostService,
    onSuccess: () => {
      navigate(getPostsPath());
    },
  });

  function onSubmit(data: CreatePostFormData) {
    mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isError && (
        <Alert>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      <FieldGroup className="mb-4 gap-2">
        <Field>
          <Input
            disabled={isPending}
            aria-invalid={!!formState.errors.title?.message}
            type="text"
            placeholder="Input your post title..."
            {...register("title")}
          />
        </Field>
        <Field>
          <Textarea
            disabled={isPending}
            className="w-full"
            aria-invalid={!!formState.errors.text?.message}
            placeholder="Input your post description..."
            {...register("text")}
          />
        </Field>
      </FieldGroup>

      <Button disabled={isPending} type="submit">
        Create
      </Button>
    </form>
  );
}
