import {
  getChatPath,
  getContactsPath,
  getHomePath,
  getMoviesPath,
  getToDoPath,
} from "../constants/routes";
import { NavLink, Outlet } from "react-router";

const links = [
  { to: getHomePath(), label: "Home" },
  { to: getContactsPath(), label: "Contacts" },
  { to: getChatPath(), label: "Chat" },
  { to: getMoviesPath(), label: "Movies" },
  { to: getToDoPath(), label: "To Do" },
];

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh max-h-dvh gap-2 ">
      <nav className="w-60 flex flex-col gap-2 border-r max-h-full shrink-0 m-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="[&.active]:font-bold [&.active]:text-cyan-200 m-1 p-3 rounded-2xl border-b-4 border-r-2 border-cyan-700 bg-linear-to-r from-cyan-600 to-cyan-900 text-white"
          >
            ♥ {link.label} ♥
          </NavLink>
        ))}
      </nav>
      <div className="grow max-h-full overflow-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
