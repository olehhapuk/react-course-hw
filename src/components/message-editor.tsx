import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MessageEditorProps {
  className?: string;
  onCreate: (text: string) => void;
}

export default function MessageEditor({
  className,
  onCreate,
}: MessageEditorProps) {
  const [text, setText] = useState("");

  function handleSubmit() {
    onCreate(text);
    setText("");
  }

  return (
    <div className={cn("flex items-end gap-2 py-2", className)}>
      <Textarea
        className="min-h-8 max-h-24 resize-none"
        placeholder="Enter your message..."
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <Button
        type="button"
        variant={"outline"}
        size="icon-sm"
        onClick={handleSubmit}
      >
        <Send />
      </Button>
    </div>
  );
}
