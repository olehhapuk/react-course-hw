import { apiClient } from "@/lib/api-client";
import type { Post } from "@/types/post";

interface EditPostDto {
  postId: string;
  data: {
    title: string;
    text: string;
  };
}

export async function editPostService(data: EditPostDto) {
  const res = await apiClient.put<Post>(`/posts/${data.postId}`, data.data);
  return res.data;
}
