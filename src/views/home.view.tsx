import { getAboutPath, getPostDetailsPath } from "@/constants/routers";
import { Link } from "react-router";

export default function HomeView() {
  return (
    <div>
      <Link to={getAboutPath()}>About</Link>

      <ul className="list-disc pl-4">
        <li>
          <Link to={getPostDetailsPath("1")}>Post 1</Link>
        </li>
        <li>
          <Link to={getPostDetailsPath("2")}>Post 2</Link>
        </li>
        <li>
          <Link to={getPostDetailsPath("3")}>Post 3</Link>
        </li>
      </ul>
    </div>
  );
}
