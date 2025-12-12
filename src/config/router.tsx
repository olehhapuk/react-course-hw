import { createBrowserRouter, Link } from "react-router";
import ContactView from "../views/contact-view";
import TaskView from "../views/task-view";
import { Button } from "@/components/ui/button";
import { RoutersPaths } from "@/components/constants/routers";

export const router = createBrowserRouter([
  {
    path: RoutersPaths.CONTACTS,
    element: <ContactView />,
  },
  {
    path: RoutersPaths.TASKS,
    element: <TaskView />,
  },
  {
    path: "*",
    element: (
      <div className="flex justify-center items-center flex-col gap-3 h-dvh">
        <p className="text-2xl">404 Not Found</p>
        <Button asChild variant={"secondary"}>
          <Link to="/">Home Page</Link>
        </Button>
      </div>
    ),
  },
]);
