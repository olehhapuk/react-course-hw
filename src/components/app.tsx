import ContactCreateForm from "./contact-create-form";
import ContactList from "./contact-list";
import { Search } from "lucide-react";
import Layout from "./layout";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import H2Title from "@/types/h2-title";
import type { Contact } from "@/types/contact";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [contact, setContact] = useState<Contact[]>([]);
  const [query, setQuery] = useState("");

  function addContact(name: string, number: string) {
    const newContact: Contact = {
      id: nanoid(),
      name,
      number,
    };

    setContact((prev) => [newContact, ...prev]);
  }

  function deleteContact(id: string) {
    setContact((prev) => prev.filter((todo) => todo.id !== id));
  }

  const filteredContacts = contact.filter(
    (todo) =>
      todo.name.toLowerCase().includes(query.toLowerCase()) ||
      todo.number.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <h1 className=" text-2xl font-bold mb-4">Contacts</h1>
      <H2Title>Add contact</H2Title>
      <ContactCreateForm
        onCreate={(data) => addContact(data.text, data.number)}
      />
      <H2Title>Search</H2Title>
      <InputGroup>
        <InputGroupInput
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <H2Title>Contact list</H2Title>
      <ContactList contact={filteredContacts} onDelete={deleteContact} />
    </Layout>
  );
}
