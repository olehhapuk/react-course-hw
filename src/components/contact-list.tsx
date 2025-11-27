import type { Contact } from "./types/contact";
import ContactCard from "./contact-card";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia } from "./ui/empty";
import { UserRound } from "lucide-react";

interface ContactListProps {
  contacts: Contact[];
  onDelete: (id: string) => void;
}

export default function ContactList({ contacts, onDelete }: ContactListProps) {
  return (
    <div className="flex flex-col gap-2">
      {contacts.length > 0 &&
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      {contacts.length === 0 && (
        <Empty>
          <EmptyMedia>
            <UserRound />
          </EmptyMedia>
          <EmptyHeader>No contacts found</EmptyHeader>
          <EmptyDescription>Add new contacts to get started</EmptyDescription>
        </Empty>
      )}
    </div>
  );
}
