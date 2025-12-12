import ContactCreateForm from "../components/contact-create-form";
import ContactList from "../components/contact-list";
import { Search } from "lucide-react";
import Layout from "../components/layout";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group";
import H2Title from "../components/ui/h2-title";
import type { Contact } from "@/types/contact";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function saveContacts(contacts: Contact[]) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts(): Contact[] {
  const data = localStorage.getItem("contacts");
  return data ? (JSON.parse(data) as Contact[]) : [];
}

export default function ContactsView() {
  const [contacts, setContacts] = useState<Contact[]>(loadContacts);

  const [query, setQuery] = useState("");

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

  function addContact(name: string, number: string) {
    const newContact: Contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prev) => [newContact, ...prev]);
  }

  function deleteContact(id: string) {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  }

  const filteredContacts = contacts.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.number.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <h1 className="bg-linear-to-r from-cyan-400 to-cyan-600 p-4 pt-6 pb-6 text-2xl font-bold mb-4 rounded-2xl border-cyan-950 border-b-4">
        Contacts
      </h1>

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
