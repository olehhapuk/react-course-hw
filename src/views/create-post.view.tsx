import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreatePostForm from "../components/create-post-form";

export default function CreatePostView() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create new post</CardTitle>
        </CardHeader>
        <CardContent>
          <CreatePostForm />
        </CardContent>
      </Card>
    </div>
  );
}
