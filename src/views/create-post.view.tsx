import CreatePostForm from "@/components/create-post-form";
import { Button } from "@/components/ui/button";
import { getPostsPath } from "@/constants/routes";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

export default function CreatePostView() {
  return (
    <div>
      <Button asChild>
        <Link to={getPostsPath()} className="mb-4">
          <ChevronLeft />
        </Link>
      </Button>
      <CreatePostForm />
    </div>
  );
}
