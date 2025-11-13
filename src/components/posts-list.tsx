import styles from "./posts-list.module.css";
interface PostsListProps {
  children: React.ReactNode;
}

export default function PostsList({ children }: PostsListProps) {
  return <div className={styles.list}>{children}</div>;
}
