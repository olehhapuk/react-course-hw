import { useState } from "react";

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

export default function PostCard(props: PostCardProps) {

  const [liked, setLiked] = useState(props.isLiked ?? false);
  const [likes, setLikes] = useState(props.likesCount ?? 0);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <div className='card'>
      <div className='header'>
        <div className='header-info'>
          <div className='header-avatar'>
            <img className='header-img' src={props.avatarUrl} alt="Avatar" />
            {props.isOnline 
              ? <img className='header-status' src={Online} alt="Online" /> 
              : <img className='header-status' src={Offline} alt="Offline" />
            }
          </div>
          <div className='header-userinfo'>
            <h4>{props.displayName}</h4>
            <span className='header-username'>@{props.username}</span>
          </div>
        </div>
        <span>{props.createdAt}</span>
     </div>
     <p>{props.text}</p>
     {props.imageUrl && (
       <img className='card-image' src={props.imageUrl} alt="Post Image" />
     )}
     <div className='options'>
        <div className='options-community'>
          <div className="options-hover" onClick={toggleLike}>
              <img 
                src={liked ? HeartIconPurple : HeartIcon}
                alt="Like button"
              />
              <span className='options-counter' style={{ color: liked ? '#6D69EB' : 'inherit' }}>{likes}</span>
           </div>
           <div className="options-hover">
            <img src={CommentIcon} alt="Comments" />
            <span className='options-counter'>{props.commentsCount ?? 0}</span>
           </div> 
        </div>
        <img className='options-hover' src={FooterRight} alt="Share" />
     </div>
   </div>
  );
}
