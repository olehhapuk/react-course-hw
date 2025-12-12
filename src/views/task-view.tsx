import { useState } from "react";
import Layout from "../components/task-comp/layout";
import TodoCreateForm from "../components/task-comp/todo-create-form";
import TodoList from "../components/task-comp/todo-list";
import type { Todo } from "../components/types/todo";
import { nanoid } from "nanoid";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { getContactPath } from "../components/constants/routers";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [query, setQuery] = useState("");

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: nanoid(),
      createdAt: new Date().toISOString(),
      isCompleted: false,
      text,
    };

    setTodos((prev) => [newTodo, ...prev]);
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function updateTodoStatus(id: string, newStatus: boolean) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: newStatus,
          };
        } else {
          return todo;
        }
      })
    );
  }

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(query.toLowerCase())
  );

  const sortedTodos = filteredTodos.sort((a) => (a.isCompleted ? 1 : -1));

  return (
    <Layout>
      <div className="flex items-center justify-between  mb-6">
        <h1 className="text-2xl font-bold ">Todo App</h1>
        <Button asChild>
          <Link to={getContactPath()}>Contacts</Link>
        </Button>
      </div>

      <TodoCreateForm
        onCreate={(data) => {
          addTodo(data.text);
        }}
      />

      <h2 className="text-xl font-bold mb-4">My todos</h2>

      <InputGroup className="mb-3">
        <InputGroupInput
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <InputGroupAddon align="inline-start">
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <TodoList
        todos={sortedTodos}
        onDelete={deleteTodo}
        onUpdateStatus={updateTodoStatus}
      />
    </Layout>
  );
}
