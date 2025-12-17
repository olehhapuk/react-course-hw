import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';
import { getPostDetailsPath } from '@/constants/routes';
import { getPostsService } from '@/services/get-posts.service';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

export default function PostsView() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: getPostsService,
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Posts</h1>

      {isFetching && !isLoading && <Spinner className="fixed top-4 right-4" />}

      <div className="space-y-1">
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
              <CardTitle>
                <Link to={getPostDetailsPath(post.id)}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
