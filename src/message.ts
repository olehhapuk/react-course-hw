export interface Message {
  id: string;
  author: {
    displayName: string;
  };
  text: string;
  createdAt: string;
  isMine: boolean;
}
