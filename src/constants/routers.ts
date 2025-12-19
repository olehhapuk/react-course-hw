import { generatePath } from "react-router";

export enum RoutePaths {
  HOME = "/",
  ABOUT = "/about",
  POST_DETAILS = "/posts/:postId",
  TODO = "/todo",
  CONTACTS = "/contacts",
}

export const getHomePath = () => RoutePaths.HOME;
export const getAboutPath = () => RoutePaths.ABOUT;
export const getPostDetailsPath = (postId: string) =>
  generatePath(RoutePaths.POST_DETAILS, {
    postId,
  });
export const getTodoPath = () => RoutePaths.TODO;
export const getContactsPath = () => RoutePaths.CONTACTS;
