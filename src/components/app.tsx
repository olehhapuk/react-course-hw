import ContactsList from './contacts-list';
import CreateContact from './create-contact';

export default function App() {
  return (
    <div className="p-4 mx-auto max-w-2xl">
      <CreateContact />
      <ContactsList />
    </div>
  );
}
