import { apiClient } from '@/lib/api-client';
import type { Post } from '@/types/post';

interface CreatePostDto {
  title: string;
  text: string;
}

export async function createPostService(data: CreatePostDto) {
  const res = await apiClient.post<Post>('/posts', data);
  return res.data;
}
