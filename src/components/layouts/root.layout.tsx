import {
  getAboutPath,
  getContactsPath,
  getHomePath,
  getTodoPath,
} from "@/constants/routers";
import { Link, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh max-h-dvh gap-2 items-stretch">
      <nav className="min-w-60 shrink-0 flex flex-col gap-2 border-r max-h-full">
        <h1 className="text-xxl font-bold">Projects</h1>
        <Link to={getHomePath()}>Home</Link>
        <Link to={getAboutPath()}>About</Link>
        <Link to={getTodoPath()}>Todo</Link>
        <Link to={getContactsPath()}>Contacts</Link>
      </nav>

      <div className="grow max-h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
