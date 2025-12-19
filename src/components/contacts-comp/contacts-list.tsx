import type { Contact } from "@/types/contact";
import ContactCard from "./contact-card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Contact2 } from "lucide-react";

interface ContactsListProps {
  contacts: Contact[];
  onDelete: (id: string) => void;
}

export default function ContactsList({
  contacts,
  onDelete,
}: ContactsListProps) {
  return (
    <div className="flex flex-col gap-2">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onDelete={onDelete} />
      ))}

      {contacts.length === 0 && (
        <Empty>
          <EmptyMedia>
            <Contact2 size="64" strokeWidth="1.5" />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>No contacts found</EmptyTitle>
            <EmptyDescription>Add new contacts to get started</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  );
}
