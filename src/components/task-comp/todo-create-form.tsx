import { Plus } from "lucide-react";
import { Field, FieldError, FieldLabel } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "../ui/input-group";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  text: z.string().min(3).max(200),
});

type TodoCreateFormData = z.infer<typeof validationSchema>;

interface TodoCreateFormProps {
  onCreate: (data: TodoCreateFormData) => void;
}

export default function TodoCreateForm({ onCreate }: TodoCreateFormProps) {
  const { register, handleSubmit, formState, reset } =
    useForm<TodoCreateFormData>({
      resolver: zodResolver(validationSchema),
      defaultValues: {
        text: "",
      },
    });

  const textError = formState.errors.text;

  function onSubmit(data: TodoCreateFormData) {
    reset();
    onCreate(data);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.code === "Enter") {
      e.preventDefault();

      handleSubmit(onSubmit)();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <Field>
        <FieldLabel>Todo text</FieldLabel>

        <InputGroup>
          <InputGroupTextarea
            placeholder="Buy lemons"
            aria-invalid={!!textError}
            onKeyDown={handleKeyDown}
            {...register("text")}
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton
              className="ml-auto rounded-full"
              variant="outline"
              size="icon-xs"
              type="submit"
            >
              <Plus />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <FieldError>{textError?.message}</FieldError>
      </Field>
    </form>
  );
}
