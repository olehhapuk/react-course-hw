import Layout from "../components/contact-comp/layout";
import ContactCreateForm from "../components/contact-comp/contact-create-from";
import ContactList from "../components/contact-comp/contact-list";
import { useState } from "react";
import type { Contact } from "../components/types/contact";
import { nanoid } from "nanoid";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group";
import { Search } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { getTaskPath } from "@/components/constants/routers";

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
      <div className="flex items-center justify-between  mb-4">
        <h1 className="text-3xl font-bold ">Contacts</h1>
        <Button asChild>
          <Link to={getTaskPath()}>Tasks</Link>
        </Button>
      </div>

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
