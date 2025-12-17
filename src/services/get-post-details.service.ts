import { apiClient } from '@/lib/api-client';
import type { Post } from '@/types/post';

export async function getPostDetailsService(postId: string) {
  const res = await apiClient.get<Post>(`/posts/${postId}`);
  return res.data;
}
