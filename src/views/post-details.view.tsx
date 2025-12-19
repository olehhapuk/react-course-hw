import { useTypedParams } from "@/hooks/use-typed-params";

export default function PostDetailsView() {
  const { postId } = useTypedParams<{
    postId: string;
  }>();

  return <div>PostDetailsView {postId}</div>;
}
