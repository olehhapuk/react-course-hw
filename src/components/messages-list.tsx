import { cn } from "@/lib/utils";
import type { Message } from "@/types/message";
import MessageCard from "./message-card";

interface MessagesListProps {
  messages: Message[];
  className?: string;
  onDelete: (id: string) => void;
}

export default function MassagesList({
  messages,
  className,
  onDelete,
}: MessagesListProps) {
  return (
    <div className={cn("flex flex-col-reverse items-start gap-2", className)}>
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} onDelete={onDelete} />
      ))}
    </div>
  );
}
