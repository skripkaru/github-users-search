import React from 'react';
import {useGetUserFollowingQuery} from "../api/githubApi";
import {useParams} from "react-router-dom";
import UserCard from "../components/UserCard";
import Spinner from "../components/UI/Spinner";
import Message from "../components/UI/Message";

const Followers = () => {
  const {username} = useParams()
  const {data: followings, isLoading, isError} = useGetUserFollowingQuery(username || '')

  return (
    <>
      {isLoading && <Spinner width='100' height='100'/>}
      {isError && <Message>Error</Message>}
      {followings && (
        <div className='grid grid-cols-3 gap-3'>
          {followings?.map(following =>
            <UserCard key={following.id} user={following}/>
          )}
        </div>
      )}
    </>
  );
};

export default Followers;
