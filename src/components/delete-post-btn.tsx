import { Trash } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePostService } from "@/services/delete-post.service";
import { getPostsPath } from "@/constants/routes";

interface DeletePostBtnProps {
  postId: string;
}

export default function DeletePostBtn({ postId }: DeletePostBtnProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deletePostService,
    onSuccess: () => {
      const isOnPostsPage = location.pathname === getPostsPath();

      if (isOnPostsPage) {
        queryClient.invalidateQueries({
          queryKey: ["posts"],
        });
      } else {
        queryClient.removeQueries({
          queryKey: ["posts", postId],
        });
        navigate(getPostsPath());
        queryClient.invalidateQueries({
          queryKey: ["posts"],
        });
      }
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
