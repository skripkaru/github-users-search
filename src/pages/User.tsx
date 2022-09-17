import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useGetUserByNameQuery} from "../api/githubApi";
import Spinner from "../components/UI/Spinner";

const User = () => {
  const {username} = useParams()
  const {data: user, isLoading, isError} = useGetUserByNameQuery(username || '')

  return (
    <div className='max-w-[750px] mx-auto'>
      {isLoading && <Spinner width='100' height='100'/>}
      {isError && <h1 className='text-center'>Error</h1>}
      {user && (
        <div
          className="flex gap-5 border-gray-200 border p-5 rounded-md"
          key={user.id}
        >
          <img
            className="flex-shrink-0 rounded-md w-80 h-80 object-cover object-center"
            src={user?.avatar_url}
            alt={user?.login}
          />
          <div className="flex flex-col w-full ">
            <h2 className="title-font font-medium text-2xl text-gray-900 mb-1">{user?.name}</h2>
            <h3 className="text-gray-500 mb-3">@{user?.login}</h3>
            <p className="mb-3 text-base">{user?.bio}</p>
            <p className="flex items-center mb-1 text-sm">
              <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
              </svg>
              {user?.company}
            </p>
            <p className="flex items-center mb-1 text-sm">
              <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              {user?.location}
            </p>
            <a className="flex items-center mb-1 text-sm" href={user?.blog} target='_blank'>
              <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
              </svg>
              {user?.blog}
            </a>
            <span className="inline-flex mt-auto">
              <Link className='text-sm font-medium text-center' to={`/repos/${username}`}>
                <span className="block font-bold text-lg">{user?.public_repos}</span>
                Repositories
              </Link>
               <Link className='text-sm font-medium text-center ml-10' to={`/followers/${username}`}>
                <span className="block font-bold text-lg">{user?.followers}</span>
                Followers
              </Link>
              <Link className='text-sm font-medium text-center ml-10' to={`/following/${username}`}>
                <span className="block font-bold text-lg">{user?.following}</span>
                Following
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
