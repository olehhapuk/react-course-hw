import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

interface ContactSearchProps {
  query: string;
  onChange: (text: string) => void;
}

export default function ContactSearch({ query, onChange }: ContactSearchProps) {
  return (
    <InputGroup className="mb-4">
      <InputGroupInput
        placeholder="Search..."
        value={query}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">0 results</InputGroupAddon>
    </InputGroup>
  );
}
