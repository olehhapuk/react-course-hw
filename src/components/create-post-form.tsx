import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { createPostService } from "@/services/create-post.service";
import { getPostsPath } from "@/constants/routes";

const createPostSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  text: z.string().min(3, "Text must be at least 3 characters"),
});

type CreatePostFormValues = z.infer<typeof createPostSchema>;

export default function CreatePostForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form = useForm<CreatePostFormValues>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createPostService,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["posts"] });
      navigate(getPostsPath());
    },
  });

  const onSubmit = (data: CreatePostFormValues) => {
    mutate(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
      {isError && (
        <Alert variant="destructive">
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      <div>
        <Input
          placeholder="Post title"
          disabled={isPending}
          {...form.register("title")}
        />
        {form.formState.errors.title && (
          <p className=" text-sm text-red-500">
            {form.formState.errors.title.message}
          </p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Post text"
          disabled={isPending}
          {...form.register("text")}
        />
        {form.formState.errors.text && (
          <p className="text-sm text-red-500">
            {form.formState.errors.text.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        Create post
      </Button>
    </form>
  );
}
