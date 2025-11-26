import { SendHorizonalIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
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
    <div className={cn("bg-cyan-800 flex items-end gap-2 py-2 ", className)}>
      <Textarea
        className="max-h-9 px-2 py-1 resize-none overflow-hidden placeholder-cyan-300 text-cyan-100"
        placeholder="Write your letters here! ⸜(｡˃ ᵕ ˂ )⸝♡"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <Button type="button" variant="outline" onClick={handleSubmit}>
        <SendHorizonalIcon></SendHorizonalIcon>
      </Button>
    </div>
  );
}
