import { Button } from "../ui/button";
import { Field, FieldLabel, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { InputGroupAddon } from "../ui/input-group";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  text: z.string().min(3).max(200),
  number: z.string().length(9),
});

type ContactCreateFormData = z.infer<typeof validationSchema>;

interface ContactCreateFormProps {
  onCreate: (data: ContactCreateFormData) => void;
}

export default function ContactCreateForm({
  onCreate,
}: ContactCreateFormProps) {
  const { register, handleSubmit, formState } = useForm<ContactCreateFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      text: "",
      number: "",
    },
  });

  const textError = formState.errors.text;
  const numberError = formState.errors.number;

  function onSubmit(data: ContactCreateFormData) {
    onCreate(data);
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
        <div className=" flex gap-8">
          <div className="flex flex-col gap-2 flex-1">
            <FieldLabel> Name</FieldLabel>
            <Input
              type="text"
              placeholder="Jhon Doe"
              aria-invalid={!!textError}
              onKeyDown={handleKeyDown}
              {...register("text")}
            />
            <FieldError className="min-h-5">{textError?.message}</FieldError>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <FieldLabel>Number</FieldLabel>
            <div className="flex">
              <InputGroupAddon className="select-none bg-stone-950 text-white rounded-l-md border-r px-3 py-2">
                +380
              </InputGroupAddon>
              <Input
                className="rounded-l-none appearance-none"
                type="number"
                placeholder="000000000"
                aria-invalid={!!numberError}
                onKeyDown={handleKeyDown}
                {...register("number")}
              ></Input>
            </div>
            <FieldError className="min-h-5">{numberError?.message}</FieldError>
          </div>
        </div>
        <Button
          type="submit"
          className="border-b-2 bg-stone-950  hover:bg-zinc-300 hover:text-stone-900 text-white "
        >
          Create Contact
        </Button>
      </Field>
    </form>
  );
}
