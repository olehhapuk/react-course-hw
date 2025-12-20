import { generatePath } from "react-router";

export enum RoutePaths {
  HOME = "/",
  POSTS = "/posts",
  POST_DETAILS = "/posts/:postId",
  CREATE_POST = "/create-post",
}

export const getHomePath = () => RoutePaths.HOME;
export const getPostsPath = () => RoutePaths.POSTS;
export const getPostDetailsPath = (postId: string) =>
  generatePath(RoutePaths.POST_DETAILS, {
    postId,
  });
export const getCreatePostPath = () => RoutePaths.CREATE_POST;
