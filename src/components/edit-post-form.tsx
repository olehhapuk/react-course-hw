import type { Post } from "@/types/post";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { editPostService } from "@/services/edit-post-service";
import { Form, useNavigate } from "react-router";
import { getPostDetailsPath } from "@/constants/routes";
import { validationSchema } from "@/types/validation";

type EditPostFormData = z.infer<typeof validationSchema>;

interface EditPostFormProps {
  post: Post | undefined;
  isLoading?: boolean;
}

export default function EditPostForm({ post, isLoading }: EditPostFormProps) {
  const navigate = useNavigate();
  const form = useForm<EditPostFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      text: post?.text || "",
      title: post?.title || "",
    },
  });

  const { reset } = form;

  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        text: post.text,
      });
    }
  }, [post, reset]);

  const { mutate, isPending } = useMutation({
    mutationFn: editPostService,
    onSuccess: (updatedPost) => {
      navigate(getPostDetailsPath(updatedPost.id));
    },
  });

  function handleSubmit(data: EditPostFormData) {
    if (!post) {
      return;
    }
    mutate({
      postId: post!.id,
      data,
    });
  }

  return (
    <Form
      className="flex flex-col gap-4"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Field>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <Input
          type="text"
          placeholder="Title"
          id="title"
          disabled={isLoading || isPending}
          {...form.register("title")}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="text">Text</FieldLabel>
        <Textarea
          placeholder="Text"
          id="text"
          disabled={isLoading || isPending}
          {...form.register("text")}
        />
      </Field>
      <Button type="submit" disabled={isLoading || isPending}>
        Save changes
      </Button>
    </Form>
  );
}
