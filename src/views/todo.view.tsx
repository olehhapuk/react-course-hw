import { useEffect, useState } from "react";
import Layout from "@/components/todo-comp/layout";
import TodoCreateForm from "@/components/todo-comp/todo-create-form";
import TodoList from "@/components/todo-comp/todo-list";
import type { Todo } from "@/types/todo";
import { nanoid } from "nanoid";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

function saveData(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadData() {
  const persistedData = localStorage.getItem("todos");

  if (!persistedData) {
    return [];
  }

  return JSON.parse(persistedData) as Todo[];
}

export default function TodoView() {
  const [todos, setTodos] = useState<Todo[]>(loadData);
  const [query, setQuery] = useState("");

  useEffect(() => {
    saveData(todos);
  }, [todos]);

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
    todo.text.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoCreateForm
        addTodo={(data) => {
          addTodo(data.text);
        }}
      />

      <h2 className="text-xl font-bold mb-2">My todos</h2>
      <InputGroup className="mb-3">
        <InputGroupInput
          placeholder="Search . . ."
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <InputGroupAddon align="inline-start">
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onUpdateStatus={updateTodoStatus}
      />
    </Layout>
  );
}
