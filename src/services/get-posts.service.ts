import { apiClient } from '@/lib/api-client';
import type { Post } from '@/types/post';

export async function getPostsService() {
  const res = await apiClient.get<Post[]>('/posts');
  return res.data;
}
