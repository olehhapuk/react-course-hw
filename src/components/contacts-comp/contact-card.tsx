import type { Contact } from "@/types/contact";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactCardProps {
  contact: Contact;
  onDelete: (id: string) => void;
}

export default function ContactCard({ contact, onDelete }: ContactCardProps) {
  return (
    <Card>
      <CardContent className="flex justify-between">
        <div>
          <CardTitle className="font-bold mb-1">{contact.name}</CardTitle>
          <CardDescription>{contact.num}</CardDescription>
        </div>
        <Button
          type="button"
          variant={"destructive"}
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}
