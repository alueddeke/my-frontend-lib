import React from "react";

/**
 * UserAvatar Component
 * Use case: Displays a user's avatar image in a circular format, typically used in user interfaces for profile pictures or user representations
 */

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
