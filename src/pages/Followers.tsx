import React from 'react';
import {useGetUserFollowersQuery} from "../api/githubApi";
import {useParams} from "react-router-dom";
import UserCard from "../components/UserCard";
import Spinner from "../components/UI/Spinner";
import Message from "../components/UI/Message";

const Followers = () => {
  const {username} = useParams()
  const {data: followers, isLoading, isError} = useGetUserFollowersQuery(username || '')

  return (
    <>
      {isLoading && <Spinner width='100' height='100'/>}
      {isError && <Message>Error</Message>}
      {followers && (
        <div className='grid grid-cols-3 gap-3'>
          {followers?.map(follower =>
            <UserCard key={follower.id} user={follower}/>
          )}
        </div>
      )}
    </>
  );
};

export default Followers;
