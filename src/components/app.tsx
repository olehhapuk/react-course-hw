import PostCard from "./post-card.tsx";
import PostsList from "./posts-list.tsx";

export default function App() {
  return (
    <PostsList>
      <PostCard
        avatarUrl="asdad"
        displayName="Jhon Doe"
        username="@johndoe"
        createdAt="01.11.2025"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo neque, condimentum ac tellus id, ullamcorper commodo ante."
        imageUrl="https://i.scdn.co/image/ab67616d00001e0227047720beaa8d2b4c236380"
        isOnline={true}
        isLiked={false}
      />
      <PostCard
        avatarUrl="asdad"
        displayName="Jhon Doe"
        username="@johndoe"
        createdAt="01.11.2025"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo neque, condimentum ac tellus id, ullamcorper commodo ante."
        imageUrl="https://i.scdn.co/image/ab67616d00001e0227047720beaa8d2b4c236380"
        isOnline={false}
        isLiked={true}
      />
      <PostCard
        avatarUrl="asdad"
        displayName="Jhon Doe"
        username="@johndoe"
        createdAt="01.11.2025"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo neque, condimentum ac tellus id, ullamcorper commodo ante."
        isOnline={false}
        isLiked={false}
      />
      <PostCard
        avatarUrl="asdad"
        displayName="Jhon Doe"
        username="@johndoe"
        createdAt="01.11.2025"
        imageUrl="https://i.scdn.co/image/ab67616d00001e0227047720beaa8d2b4c236380"
        isOnline={false}
        isLiked={false}
      />
    </PostsList>
  );
}
