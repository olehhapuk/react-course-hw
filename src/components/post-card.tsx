import styles from "./post-card.module.css";

import avatarOnlineImg from "../assets/avatar__online.svg";
import avatarOfflineImg from "../assets/avatar__offline.svg";
import notLikedImg from "../assets/notLiked.svg";
import likedImg from "../assets/liked.svg";
import commentsImg from "../assets/commentIcon.svg";
import shareImg from "../assets/shareIcon.svg";

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
  const avatarChecked = isOnline ? avatarOnlineImg : avatarOfflineImg;
  const likeChecked = isLiked ? likedImg : notLikedImg;
  const likeCheckedText = isLiked
    ? styles.card__text_like
    : styles.card__text_unlike;

  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <section className={styles.card__top_left}>
          <img src={avatarChecked || avatarUrl} alt={"photo"} />
          <div className={styles.card__top_usernames}>
            <h3 className={styles.card__top_h3}>{displayName}</h3>
            <p className={styles.card__text_grey}>{username}</p>
          </div>
        </section>
        <p className={styles.card__text_grey}>{createdAt}</p>
      </div>
      {text && <p className={styles.card__text}>{text}</p>}
      {imageUrl && (
        <img className={styles.card__photo} src={imageUrl} alt="post image" />
      )}
      <div className={styles.card__bottom}>
        <section className={styles.card__bottom_section}>
          <div className={styles.card__bottom_action}>
            <img src={likeChecked} alt="heart" />
            <p className={likeCheckedText}>10K</p>
          </div>
          <div className={styles.card__bottom_action}>
            <img src={commentsImg} alt="comments" />
            <p>10K</p>
          </div>
        </section>
        <div className={styles.card__bottom_action}>
          <img src={shareImg} alt={"share"} />
        </div>
      </div>
    </div>
  );
}
