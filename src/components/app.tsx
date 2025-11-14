import PostCard from "./post-card";
import styles from "./app.module.css";

export default function App() {
  return (
    <div className={styles.card_list}>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
        <PostCard
          avatarUrl="/public/Profile Image.png"
          displayName="John Doe"
          username="@johndoe"
          createdAt="01.11.2025"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo neque, condimentum ac tellus id, ullamcorper commodo ante."
          isOnline={false}
          isLiked={false}
        />
      </div>
      <div>
        <PostCard
          avatarUrl="/public/Profile Image.png"
          displayName="John Doe"
          username="@johndoe"
          createdAt="01.11.2025"
          imageUrl="/public/Thumbnail Image.png"
          isOnline={false}
          isLiked={false}
        />
      </div>
    </div>
  );
}
