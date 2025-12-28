import EditPostForm from "@/components/edit-post-form";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { getPostDetailsPath } from "@/constants/routes";
import { getPostDetailsService } from "@/services/get-post-details.service";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router";

export default function EditPostView() {
  const { postId } = useParams() as { postId: string };
  const { data: post, isLoading } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPostDetailsService(postId),
  });
  return (
    <div>
      <nav className="mb-6 flex items-center gap-4">
        <Button asChild variant="ghost">
          <Link to={getPostDetailsPath(postId)}>
            <ChevronLeft />
          </Link>
        </Button>
        {!isLoading ? (
          <h1 className="text-2xl font-bold">
            Edit <b className="font-bold">{post?.title}</b>
          </h1>
        ) : (
          <span>Loading...</span>
        )}
      </nav>
      <div>
        {isLoading && <Spinner className="mx-auto" />}
        <EditPostForm post={post} isLoading={isLoading} />
      </div>
    </div>
  );
}
