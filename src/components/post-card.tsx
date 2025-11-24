import { useState } from "react";
import styles from '../styles/index.module.css'

import FooterRight from '../assets/footer_right.svg'; 
import CommentIcon from '../assets/comment_icon.svg'; 
import HeartIcon from '../assets/heart_icon.svg'; 
import HeartIconPurple from '../assets/heart_icon_purple.svg';
import Offline from '../assets/offline.svg'; 
import Online from '../assets/online.svg';

interface PostCardProps {
  avatarUrl: string;
  displayName: string;
  username: string;
  createdAt: string;
  text?: string;
  imageUrl?: string;
  isOnline?: boolean;
  isLiked?: boolean;
  likesCount?: number;
  commentsCount?: number;
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
  likesCount,
  commentsCount
}: PostCardProps) {

  const [liked, setLiked] = useState(isLiked ?? false);
  const [likes, setLikes] = useState(likesCount ?? 0);

  const toggleLike = () => {
    setLiked(prev => !prev);
    setLikes(prev => prev + (liked ? -1 : 1));
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <div className={styles.headerAvatar}>
            <img className={styles.headerImg} src={avatarUrl} alt="Avatar" />
            <img className={styles.headerStatus} src={isOnline ? Online : Offline} alt="Online status" />
          </div>
          <div className={styles.headerUserinfo}>
            <h4>{displayName}</h4>
            <span className={styles.headerUsername}>@{username}</span>
          </div>
        </div>
        <span>{createdAt}</span>
      </div>
      <p>{text}</p>
      {imageUrl && (
        <img className={styles.cardImage} src={imageUrl} alt="Post Image" />
      )}
      <div className={styles.options}>
        <div className={styles.optionsCommunity}>
          <button type="button" className={styles.optionsHover} onClick={toggleLike}>
            <img
              src={liked ? HeartIconPurple : HeartIcon}
              alt="Like button"
            />
            <span
              className={`${styles.optionsCounter} ${liked ? styles.optionsCounterLiked : ""}`}
            >
              {likes}
            </span>
          </button>
          <button type="button" className={styles.optionsHover}>
            <img src={CommentIcon} alt="Comments" />
            <span className={styles.optionsCounter}>{commentsCount ?? 0}</span>
          </button>
        </div>
        <img className={styles.optionsHover} src={FooterRight} alt="Share" />
      </div>
    </div>
  );
}