import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { createPostService } from "@/services/create-post.service";
import { useNavigate } from "react-router";
import { getPostsPath } from "@/constants/routes";

const validationSchema = z.object({
  title: z
    .string()
    .min(3, "Write at least 3 characters")
    .max(30, "Limit is 30 characters"),
  text: z
    .string()
    .min(3, "Write at least 3 characters")
    .max(60, "Limit is 60 characters"),
});

type CreatePostViewData = z.infer<typeof validationSchema>;

export default function CreatePostView() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostViewData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });

  async function onSubmit(data: CreatePostViewData) {
    await createPostService(data);
    reset();
    navigate(getPostsPath());
  }

  return (
    <form
      className="flex flex-col gap-4 mb-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field>
        <FieldLabel>Title</FieldLabel>
        <Input aria-invalid={!!errors.title} {...register("title")} />
        <FieldError className="min-h-5">{errors.title?.message}</FieldError>
      </Field>

      <Field>
        <FieldLabel>Text</FieldLabel>
        <Input aria-invalid={!!errors.text} {...register("text")} />
        <FieldError className="min-h-5">{errors.text?.message}</FieldError>
      </Field>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Add"}
      </Button>
    </form>
  );
}
