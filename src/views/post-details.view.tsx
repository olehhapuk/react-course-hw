import DeletePostBtn from '@/components/delete-post-btn';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { getPostDetailsService } from '@/services/get-post-details.service';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export default function PostDetailsView() {
  const { postId } = useParams() as { postId: string };

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts', postId],
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
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <DeletePostBtn postId={postId} />
          </div>
          <p>{post.text}</p>
        </>
      )}
    </div>
  );
}
