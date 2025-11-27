import type { Contact } from "@/types/contact.ts";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

interface ContactCardProps {
  contact: Contact;
  onDelete: (id: string) => void;
}

export default function ContactCard({ contact, onDelete }: ContactCardProps) {
  return (
    <Card className="bg-pink-900">
      <CardContent className="flex items-center gap-2 ">
        <p className="grow font-bold">{contact.name}</p>
        <div>{contact.number}</div>
        <Button
          type="button"
          variant="ghost"
          onClick={() => onDelete(contact.id)}
        >
          <Trash></Trash>
        </Button>
      </CardContent>
    </Card>
  );
}
