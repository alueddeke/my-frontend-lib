import React from "react";

interface UserAvatarProps {
  src: string;
  alt: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="w-10 h-10 rounded-full object-cover" />
  );
};

export default UserAvatar;
