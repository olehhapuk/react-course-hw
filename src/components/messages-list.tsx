import type { Message } from "@/message";
import { cn } from "@/lib/utils";
import MessageCard from "./message-card";

interface MessagesListProps {
  messages: Message[];
  className?: string;
  onDelete: (id: string) => void;
}

export default function MessagesList({
  messages,
  className,
  onDelete,
}: MessagesListProps) {
  return (
    <div className={cn("flex items-start flex-col-reverse gap-2", className)}>
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} onDelete={onDelete} />
      ))}
    </div>
  );
}
