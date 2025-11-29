import { Button } from './ui/button';
import { ButtonGroup, ButtonGroupText } from './ui/button-group';
import { Input } from './ui/input';

export default function CreateContact() {
  return (
    <div>
      <h1>Contacts</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p>Name</p>
          <Input placeholder="Jhon Doe" />
        </div>
        <div>
          <p>Number</p>
          <ButtonGroup>
            <ButtonGroupText>+380</ButtonGroupText>
            <Input placeholder="997775533" />
          </ButtonGroup>
        </div>
      </div>
      <Button>Create Contact</Button>
      <Input />
    </div>
  );
}
