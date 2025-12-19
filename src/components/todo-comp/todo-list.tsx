import type { Todo } from "@/types/todo";
import TodoCard from "./todo-card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { List } from "lucide-react";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string, newStatus: boolean) => void;
}

export default function TodoList({
  todos,
  onDelete,
  onUpdateStatus,
}: TodoListProps) {
  return (
    <div className="flex flex-col gap-2">
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onUpdateStatus={onUpdateStatus}
          />
        ))}
      {todos.length === 0 && (
        <Empty>
          <EmptyMedia>
            <List />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>No todos yet</EmptyTitle>
            <EmptyDescription>Create one using form above</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  );
}
