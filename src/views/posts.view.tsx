import DeletePostBtn from "@/components/delete-post-btn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import {
  getCreatePostPath,
  getHomePath,
  getPostDetailsPath,
} from "@/constants/routes";
import { getPostsService } from "@/services/get-posts.service";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router";

export default function PostsView() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsService,
  });

  return (
    <div>
      <div className="flex justify-between">
        <Button asChild variant="ghost">
          <Link to={getHomePath()}>
            <ChevronLeft />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold mb-2">Posts</h1>
        <Button className="mb-4" asChild>
          <Link to={getCreatePostPath()}>+ Create Post</Link>
        </Button>
      </div>
      {isFetching && !isLoading && <Spinner className="fixed top-4 right-4" />}
      <div className="space-y-3">
        {isLoading && (
          <>
            <Card>
              <CardHeader>
                <Skeleton className="h-4 w-[50%]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-[120px]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Skeleton className="h-4 w-[50%]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-[120px]" />
              </CardContent>
            </Card>
          </>
        )}

        {data?.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <Link
                  to={getPostDetailsPath(post.id)}
                  className="inline-flex gap-2 items-center"
                >
                  {post.title}
                  <ExternalLink className="size-3" />
                </Link>
                <DeletePostBtn postId={post.id} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{post.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
