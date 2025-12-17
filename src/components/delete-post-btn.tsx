import { Trash } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePostService } from '@/services/delete-post.service';
import { getPostsPath } from '@/constants/routes';

interface DeletePostBtnProps {
  postId: string;
}

export default function DeletePostBtn({ postId }: DeletePostBtnProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deletePostService,
    onSuccess: () => {
      navigate(getPostsPath());

      queryClient.removeQueries({
        queryKey: ['posts', postId],
      });
    },
  });

  return (
    <Button
      type="button"
      variant="destructive"
      size="icon-sm"
      disabled={isPending}
      onClick={() => {
        mutate(postId);
      }}
    >
      <Trash />
    </Button>
  );
}
