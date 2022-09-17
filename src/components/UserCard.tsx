import React from 'react';
import {Link} from "react-router-dom";
import {IUser} from "../types";

interface UserCardProps {
  user: IUser
}

const UserCard = (props: UserCardProps) => {
  const {user} = props

  return (
    <div className="flex items-center gap-4 border-gray-200 border p-4 rounded-md">
      <img
        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
        src={user.avatar_url}
        alt="team"
      />
      <div className="flex-grow">
        <h2 className="text-gray-900 title-font font-medium">@{user.login}</h2>
      </div>
      <Link
        className='border rounded-md py-2 px-4 hover:bg-gray-100 transition-all'
        to={`/user/${user.login}`}
      >
        View
      </Link>
    </div>
  );
};

export default UserCard;
