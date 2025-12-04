import { cn } from "@/lib/utils";
import type { Message } from "@/types/message";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface MessageCardProps {
  message: Message;
  onDelete: (id: string) => void;
}

export default function MessageCard({ message, onDelete }: MessageCardProps) {
  return (
    <div
      className={cn(
        "border rounded-lg px-2 py3 bg-card inline-flex flex-col gap-0.5",
        message.isMine && "self-end items-end"
      )}
    >
      <p className="inline-flex items-center gap-1">
        <span className="text-sm font-bold text-muted-foreground">
          {message.author.displayName}
        </span>
        <span className="text-sm text-muted-foreground">
          {message.createdAt}
        </span>
      </p>
      {message.text}
      <Button
        type="button"
        variant="destructive"
        className="h-6 w-6 my-2"
        onClick={() => onDelete(message.id)}
      >
        <Trash2 />
      </Button>
    </div>
  );
}
