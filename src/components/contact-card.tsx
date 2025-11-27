import type { Contact } from "./types/contact";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface ContactCreateProps {
  contact: Contact;
  onDelete: (id: string) => void;
}

export default function ContactCard({ contact, onDelete }: ContactCreateProps) {
  return (
    <Card>
      <CardContent className="flex items-center  p-2xl">
        <div className="flex flex-col grow">
          <p className="text-stone-950">{contact.text}</p>
          <p className="text-stone-500">{contact.number}</p>
        </div>
        <Button
          type="button"
          variant="destructive"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}
