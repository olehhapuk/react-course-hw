import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export default function NotFoundView() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <p>404. Not found</p>
      <Button asChild variant="secondary">
        <Link to="/">Go home</Link>
      </Button>
    </div>
  );
}
