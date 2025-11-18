import '../../styles/index.css'

interface PostsListProps {
  children: React.ReactNode;
}

export default function PostsList({ children }: PostsListProps) {
  return <div className='post-list'>{children}</div>;
}