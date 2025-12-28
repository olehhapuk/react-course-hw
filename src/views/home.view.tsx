import { Button } from '@/components/ui/button';
import { getPostsPath } from '@/constants/routes';
import { Link } from 'react-router';

export default function HomeView() {
  return (
    <div>
      <Button asChild>
        <Link to={getPostsPath()}>Posts</Link>
      </Button>
    </div>
  );
}
