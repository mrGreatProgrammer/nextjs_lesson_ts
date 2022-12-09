import Image from "next/image";
import React from "react";

const Post = ({ id, avatar, userName, title, desc, img }) => {
  return (
    <div>
      <div className="flex">
        <div className="post_user_container">
          <div className="post-avatar__container">
            {" "}
            <Image src={} />{" "}
          </div>
          <div className="post-user__name">
            <p>{userName}</p>
          </div>
        </div>
      </div>
      <div className="post-content__container"></div>
      <div className="post-btns__container">
        <button className="post-btn"></button>
        <button className="post-btn"></button>
        <button className="post-btn"></button>
      </div>
    </div>
  );
};

export default Post;
