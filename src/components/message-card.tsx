import type { Message } from "@/types/message";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { format } from "date-fns";
interface MessageCardProps {
  message: Message;
  onDelete: (id: string) => void;
}

export default function MessageCard({ message, onDelete }: MessageCardProps) {
  function hadleDeleteClick() {
    onDelete(message.id);
  }
  return (
    <div
      className={cn(
        "border rounded-lg px-2 py-3 bg-card inline-flex flex-col gap-0.5",
        message.isMine && "self-end items-end"
      )}
    >
      <div className="inline-flex items-center gap-1">
        <span className="text-sm font-bold text-muted-foreground">
          {message.author.displayName}
        </span>
        <span className="text-sm text-muted-foreground">
          {format(message.createdAt, "do MMM, HH:mm:ss")}
        </span>
      </div>

      <p>{message.text}</p>

      <div>
        <Button
          type="button"
          variant="destructive"
          size="icon-sm"
          onClick={hadleDeleteClick}
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
}
