import styles from "./app.module.css";

interface PostsListProps {
  children: React.ReactNode;
}

export default function PostsList({ children }: PostsListProps) {
  return <div className={styles.card_list}>{children}</div>;
}
