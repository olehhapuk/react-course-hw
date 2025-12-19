import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  name: z.string().min(3).max(200),
  num: z.string().length(9),
});

type CreateContactData = z.infer<typeof validationSchema>;

interface CreateContactProps {
  onCreate: (data: CreateContactData) => void;
}

export default function CreateContact({ onCreate }: CreateContactProps) {
  const { register, handleSubmit, formState, getValues, reset } =
    useForm<CreateContactData>({
      resolver: zodResolver(validationSchema),
      defaultValues: {
        name: "",
        num: "",
      },
    });

  const nameTextError = formState.errors.name;
  const numTextError = formState.errors.num;

  function onSubmit(data: CreateContactData) {
    onCreate(data);
    // console.log(data);
    reset();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.code === "Enter") {
      onSubmit(getValues());
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-2">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input
            placeholder="John Doe"
            aria-invalid={!!nameTextError}
            {...register("name")}
          />
          <FieldError>{nameTextError?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel>Number</FieldLabel>
          <ButtonGroup>
            <ButtonGroupText>+380</ButtonGroupText>
            <Input
              placeholder="997775533"
              aria-invalid={!!numTextError}
              {...register("num")}
            />
          </ButtonGroup>
          <FieldError>{numTextError?.message}</FieldError>
        </Field>
      </div>
      <Button type="submit" onKeyDown={handleKeyDown} className="mb-2">
        Create Contact
      </Button>
    </form>
  );
}
