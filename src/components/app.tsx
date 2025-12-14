import type { Contact } from "@/types/contact";
import ContactsList from "./contacts-list";
import CreateContact from "./create-contact";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactSearch from "./contact-search";

function saveData(contacts: Contact[], query: string) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
  localStorage.setItem("query", JSON.stringify(query));
}

function loadDataContacts() {
  const persistedData = localStorage.getItem("contacts");

  if (!persistedData) {
    return [];
  }

  return JSON.parse(persistedData) as Contact[];
}

function loadDataQuery() {
  const persistedData = localStorage.getItem("query");

  if (!persistedData) {
    return "";
  }

  return JSON.parse(persistedData) as string;
}

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>(loadDataContacts);
  const [query, setQuery] = useState(loadDataQuery);

  useEffect(() => {
    saveData(contacts, query);
  }, [contacts, query]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      contact.num.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  function addContact(name: string, num: string) {
    const newContact: Contact = {
      id: nanoid(),
      createdAt: new Date().toISOString(),
      name,
      num,
    };

    setContacts((prev) => [newContact, ...prev]);
  }

  function deleteContact(id: string) {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  }

  return (
    <div className="p-4 mx-auto max-w-2xl">
      <h1>Contacts</h1>
      <CreateContact
        onCreate={(data) => {
          addContact(data.name, data.num);
        }}
      />
      <ContactSearch query={query} onChange={setQuery} />
      <ContactsList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
