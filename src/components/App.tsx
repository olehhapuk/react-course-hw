import '../../styles/index.css'
import PostCard from "./post-card.tsx";
import PostsList from "./post-list.tsx";

import ThumbnailImage from '../assets/thumbnail_image.svg';
import NatureImage from '../assets/nature_image.jpg';
import ProfileImage1 from '../assets/profile_image_1.svg'; 
import ProfileImage2 from '../assets/profile_image_2.svg';
import ProfileImage3 from '../assets/profile_image_3.svg';
import ProfileImage4 from '../assets/profile_image_4.svg';


function App() {
  return (
    <PostsList>
      <PostCard avatarUrl= {ProfileImage1}
  displayName = "John Doe"
  username = "johndoe"
  createdAt= "14.09.2025"
  text= "I love how a single photo can freeze a feeling. It doesn’t just show a place — it captures the exact breath I took while standing there."
  imageUrl= {ThumbnailImage}
  isOnline={true}
  isLiked= {false}
  likesCount={124}
  commentsCount={2}/>

      <PostCard avatarUrl= {ProfileImage2}
  displayName = "Yessica Christy"
  username = "yessicachristy"
  createdAt= "20.06.2025"
  text= "Captured a simple moment that made today feel special."
  imageUrl= {NatureImage}
  isOnline={false}
  isLiked= {true}
  likesCount={1342}
  commentsCount={45}/>
  
      <PostCard avatarUrl= {ProfileImage3}
  displayName = "Viezh Robert"
  username = "warsawonelove"
  createdAt= "05.09.2025"
  text= "Today looked better than it felt."
  isOnline={false}
  isLiked= {false}
  likesCount={8}
  />
  

      <PostCard avatarUrl= {ProfileImage4}
  displayName = "Kim Young Jou"
  username = "youngjouk"
  createdAt= "13.09.2025"
  text= "I wasn’t planning to take photos today, but this moment felt too perfect not to capture"
  imageUrl= "https://tse3.mm.bing.net/th/id/OIP.7jpR1fZDpLLZXmA3eKv-_AHaFC?rs=1&pid=ImgDetMain&o=7&rm=3"
  isOnline={false}
  isLiked= {true}
  likesCount={84}
  commentsCount={5}/>
      </PostsList>
  );
}
export default App;