import DeletePostBtn from "@/components/delete-post-btn";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getEditPostPath, getPostsPath } from "@/constants/routes";
import { getPostDetailsService } from "@/services/get-post-details.service";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Pencil } from "lucide-react";
import { Link, useParams } from "react-router";

export default function PostDetailsView() {
  const { postId } = useParams() as { postId: string };

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPostDetailsService(postId),
  });

  return (
    <div>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      {isLoading && (
        <div>
          <Skeleton className="h-4 w-[50%] mb-6" />
          <Skeleton className="h-[120px] w-full" />
        </div>
      )}
      {post && (
        <>
          <div className="mb-6 flex justify-between items-center">
            <Button asChild variant="ghost">
              <Link to={getPostsPath()}>
                <ChevronLeft />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="icon-sm">
                <Link to={getEditPostPath(postId)}>
                  <Pencil />
                </Link>
              </Button>
              <DeletePostBtn postId={postId} />
            </div>
          </div>
          <p>{post.text}</p>
        </>
      )}
    </div>
  );
}
