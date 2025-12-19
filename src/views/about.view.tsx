import { getHomePath } from "@/constants/routers";
import { Link } from "react-router";

export default function AboutView() {
  return (
    <div>
      <Link to={getHomePath()}>Home</Link>
    </div>
  );
}
