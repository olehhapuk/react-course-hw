import CreatePostForm from "@/components/create-post.form";
import { Button } from "@/components/ui/button";
import { getPostsPath } from "@/constants/routes";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

export default function CreatePostView() {
  return (
    <div>
      <nav className="mb-6 flex items-center gap-4">
        <Button asChild variant="ghost">
          <Link to={getPostsPath()}>
            <ChevronLeft />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Create post</h1>
      </nav>
      <div>
        <CreatePostForm />
      </div>
    </div>
  );
}
