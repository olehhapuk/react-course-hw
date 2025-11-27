import type { Contact } from "@/types/contact";
import ContactCard from "./contact-card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { Ghost } from "lucide-react";

interface ContactListProps {
  contact: Contact[];
  onDelete: (id: string) => void;
}

export default function ContactList({ contact, onDelete }: ContactListProps) {
  return (
    <div className="flex flex-col gap-3">
      {contact.length > 0 &&
        contact.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      {contact.length === 0 && (
        <Empty>
          <EmptyMedia>
            <Ghost></Ghost>
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>There is no contacts</EmptyTitle>
            <EmptyDescription>
              {" "}
              You can create one if you want to!
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  );
}
