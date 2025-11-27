import Layout from "./layout";
import ContactCreateForm from "./contact-create-from";
import ContactList from "./contact-list";
import { useState } from "react";
import type { Contact } from "./types/contact";
import { nanoid } from "nanoid";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [query, setQuery] = useState("");

  function addContact(text: string, number: string) {
    const newConrtact: Contact = {
      id: nanoid(),
      createdAt: new Date().toISOString(),
      text,
      number: number,
    };

    setContacts((prev) => [...prev, newConrtact]);
  }

  function deleteContact(id: string) {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.text.toLowerCase().includes(query.toLowerCase()) ||
      contact.number.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Contacts</h1>
      <ContactCreateForm
        onCreate={(data) => {
          addContact(data.text, data.number);
        }}
      />
      <InputGroup className="mb-4">
        <InputGroupInput
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </Layout>
  );
}
