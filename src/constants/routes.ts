export enum RoutePaths {
  HOME = "/",
  CONTACTS = "/contacts",
  MOVIES = "/movies",
  CHAT = "/chat",
  TODO = "/todo",
}

export const getHomePath = () => RoutePaths.HOME;
export const getContactsPath = () => RoutePaths.CONTACTS;
export const getMoviesPath = () => RoutePaths.MOVIES;
export const getChatPath = () => RoutePaths.CHAT;
export const getToDoPath = () => RoutePaths.TODO;
