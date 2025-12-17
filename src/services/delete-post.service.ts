import { apiClient } from '@/lib/api-client';
import type { Post } from '@/types/post';

export async function deletePostService(postId: string) {
  const res = await apiClient.delete<Post>(`/posts/${postId}`);
  return res.data;
}
