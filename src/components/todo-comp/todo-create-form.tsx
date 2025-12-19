import { Plus } from "lucide-react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  text: z.string().min(3).max(200),
});

type TodoCreateFormData = z.infer<typeof validationSchema>;

interface TodoCreateFormProps {
  addTodo: (data: TodoCreateFormData) => void;
}

export default function TodoCreateForm({ addTodo }: TodoCreateFormProps) {
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
    addTodo(data);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.code === "Enter") {
      e.preventDefault();

      handleSubmit(onSubmit)();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
      <Field>
        <FieldLabel>Todo text</FieldLabel>

        <InputGroup>
          <InputGroupTextarea
            placeholder="Buy lemons"
            aria-invalid={!!textError}
            {...register("text")}
            onKeyDown={handleKeyDown}
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
