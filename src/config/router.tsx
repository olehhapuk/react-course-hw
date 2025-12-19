import { createBrowserRouter } from "react-router";

import AboutView from "../views/about.view";
import HomeView from "../views/home.view";
import PostDetailsView from "../views/post-details.view";
import RootLayout from "@/components/layouts/root.layout";
import TodoView from "../views/todo.view";
import ContactsView from "@/views/contacts.view";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/about",
        element: <AboutView />,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailsView />,
      },
      {
        path: "/todo",
        element: <TodoView />,
      },
      {
        path: "/contacts",
        element: <ContactsView />,
      },
    ],
  },
]);
