import { Field, FieldError, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { InputGroupAddon } from "./ui/input-group";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const valiadtionSchema = z.object({
  text: z.string().min(3).max(30),
  number: z.string().length(9),
});

type ContactCreateFormData = z.infer<typeof valiadtionSchema>;

interface ContactCreateFormProps {
  onCreate: (data: ContactCreateFormData) => void;
}

export default function ContactCreateForm({
  onCreate,
}: ContactCreateFormProps) {
  const { register, handleSubmit, formState, reset } =
    useForm<ContactCreateFormData>({
      resolver: zodResolver(valiadtionSchema),
      defaultValues: {
        text: "",
        number: "",
      },
    });

  const textError = formState.errors.text;
  const numberError = formState.errors.number;

  function onSubmit(data: ContactCreateFormData) {
    reset();
    onCreate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
      <Field>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1.5 flex-1">
            <FieldLabel>Name</FieldLabel>
            <Input
              type="text"
              placeholder="Katya Furlet"
              aria-invalid={!!textError}
              {...register("text")}
            ></Input>
            <FieldError className="min-h-5">{textError?.message}</FieldError>
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <FieldLabel>Number</FieldLabel>
            <div className="flex">
              <InputGroupAddon className="select-none bg-pink-900 text-white rounded-l-md border-r px-3 py-2">
                +380
              </InputGroupAddon>
              <Input
                className="rounded-l-none appearance-none"
                type="number"
                placeholder="000000000"
                aria-invalid={!!numberError}
                {...register("number")}
              ></Input>
            </div>
            <FieldError className="min-h-5">{numberError?.message}</FieldError>
          </div>
        </div>
        <Button
          type="submit"
          variant="secondary"
          className="border-b-2 bg-pink-900  hover:bg-pink-800 "
        >
          Create new contact
        </Button>
      </Field>
    </form>
  );
}
