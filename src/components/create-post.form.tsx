import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPostService } from "@/services/create-post.service";
import { useNavigate } from "react-router";
import { getPostsPath } from "@/constants/routes";
import { validationSchema } from "@/types/validation";

type CreatePostFormData = z.infer<typeof validationSchema>;

export default function CreatePostForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form = useForm<CreatePostFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createPostService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      reset();
      navigate(getPostsPath());
    },
  });

  function onSubmit(data: CreatePostFormData) {
    mutate(data);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <Input
          type="text"
          placeholder="Title"
          id="title"
          disabled={isPending}
          aria-invalid={!!errors.title}
          {...register("title")}
        />
        <FieldError className="min-h-5">{errors.title?.message}</FieldError>
      </Field>

      <Field>
        <FieldLabel htmlFor="text">Text</FieldLabel>
        <Textarea
          placeholder="Text"
          id="text"
          disabled={isPending}
          aria-invalid={!!errors.text}
          {...register("text")}
        />
        <FieldError className="min-h-5">{errors.text?.message}</FieldError>
      </Field>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create"}
      </Button>
      {isError && (
        <p className="text-red-500 text-sm">Failed to create post :0</p>
      )}
    </form>
  );
}
