import styles from '../styles/index.module.css'

interface PostsListProps {
  children: React.ReactNode;
}

export default function PostsList({ children }: PostsListProps) {
  return <div className={styles.postList}>{children}</div>;
}