import { createBrowserRouter } from "react-router";
import HomeView from "../views/home.view";
import ContactsView from "../views/contacts.view";
import RootLayout from "@/layout/root.layout";
import { RoutePaths } from "@/constants/routes";
import NotFoundView from "@/views/not-found.views";
import MoviesView from "@/views/movies.view";
import ChatView from "@/views/chat.view";
import TodoView from "@/views/todo.view";

export const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    errorElement: <NotFoundView></NotFoundView>,
    children: [
      {
        path: RoutePaths.HOME,
        element: <HomeView></HomeView>,
      },
      {
        path: RoutePaths.CONTACTS,
        element: <ContactsView></ContactsView>,
      },
      {
        path: RoutePaths.MOVIES,
        element: <MoviesView />,
      },
      {
        path: RoutePaths.CHAT,
        element: <ChatView />,
      },
      {
        path: RoutePaths.TODO,
        element: <TodoView />,
      },
    ],
  },
]);
