import React from 'react';
import {useParams} from "react-router-dom";
import {useGetUserByNameQuery} from "../api/githubApi";

const User = () => {
  const {username} = useParams()
  const {data: user, isLoading, isError} = useGetUserByNameQuery(username || '')

  return (
    <div className='mt-5'>
      {isLoading && <h1 className='text-center'>Loading...</h1>}
      {isError && <h1 className='text-center'>Error</h1>}
      {user && (
        <div
          className="flex flex-col items-center text-center"
          key={user.id}
        >
          <img
            className="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center mb-4"
            src={user?.avatar_url}
            alt={user?.login}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">{user?.name}</h2>
            <h3 className="text-gray-500 mb-3 max-w-md mx-auto">@{user?.login}</h3>
            <p className="mb-3">{user?.bio}</p>
            <p className="mb-3 text-sm">{user?.company}</p>
            <p className="mb-5 text-sm">{user?.location}</p>
            <span className="inline-flex">
              <a>
                <span className="block font-medium">{user?.public_repos}</span>
                Repositories
              </a>
              <a className="ml-3">
                <span className="block font-medium">{user?.following}</span>
                Followings
              </a>
              <a className="ml-3">
                <span className="block font-medium">{user?.followers}</span>
                Followers
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
