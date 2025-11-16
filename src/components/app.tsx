import PostsList from "./posts-list";
import PostCard from "./post-card";

export default function App() {
  return (
    <PostsList>
      <PostCard
        avatarUrl="/public/Profile Image.png"
        displayName="John Doe"
        username="@johndoe"
        createdAt="01.11.2025"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo neque, condimentum ac tellus id, ullamcorper commodo ante."
        imageUrl="/public/Thumbnail Image.png"
        isOnline
        isLiked={false}
      />
      <PostCard
        avatarUrl="/public/Profile Image.png"
        displayName="John Doe"
        username="@johndoe"
        createdAt="01.11.2025"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo neque, condimentum ac tellus id, ullamcorper commodo ante."
        imageUrl="/public/Thumbnail Image.png"
        isOnline={false}
        isLiked
      />
      <PostCard
        avatarUrl="/public/Profile Image.png"
        displayName="John Doe"
        username="@johndoe"
        createdAt="01.11.2025"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo neque, condimentum ac tellus id, ullamcorper commodo ante."
        isOnline={false}
        isLiked={false}
      />
      <PostCard
        avatarUrl="/public/Profile Image.png"
        displayName="John Doe"
        username="@johndoe"
        createdAt="01.11.2025"
        imageUrl="/public/Thumbnail Image.png"
        isOnline={false}
        isLiked={false}
      />
    </PostsList>
  );
}
