import styles from "./post-card.module.css";

interface PostCardProps {
  avatarUrl: string;
  displayName: string;
  username: string;
  createdAt: string;
  text?: string;
  imageUrl?: string;
  isOnline?: boolean;
  isLiked?: boolean;
}

export default function PostCard({
  avatarUrl,
  displayName,
  username,
  createdAt,
  text,
  imageUrl,
  isOnline,
  isLiked,
}: PostCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <img src={avatarUrl} alt={displayName} className={styles.card_avatar} />
        <div
          className={isOnline ? styles.card_isOnline : styles.card_isOffline}
        ></div>
        <div>
          <h2 className={styles.card_name}>{displayName}</h2>
          <p className={styles.card_username}>{username}</p>
        </div>
        <span className={styles.card_createdAt}>{createdAt}</span>
      </div>
      <p className={styles.card_desc}>{text}</p>
      <img src={imageUrl} alt="postImage" className={styles.card_img} />
      <div className={styles.card_footer}>
        <div className={styles.footer_btns}>
          <button
            type="button"
            className={
              isLiked ? styles.footer_btn_isLiked : styles.card_footer_btn
            }
          >
            <img src="/public/Vector.svg" alt="like" />
            <p className={styles.card_footer_btnValue}>10k</p>
          </button>
          <button type="button" className={styles.card_footer_btn}>
            <img src="/public/CommentIcon.svg" alt="comment" />
            <p className={styles.card_footer_btnValue}>10k</p>
          </button>
        </div>
        <button type="button" className={styles.card_footer_btn}>
          <img src="/public/ShareIcon.svg" alt="comment" />
        </button>
      </div>
    </div>
  );
}
