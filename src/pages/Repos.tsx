import React from 'react';
import {useGetUserReposQuery} from "../api/githubApi";
import {useParams} from "react-router-dom";
import RepoCard from "../components/RepoCard";
import Spinner from "../components/UI/Spinner";
import Message from "../components/UI/Message";

const Repos = () => {
  const {username} = useParams()
  const {data: repos, isLoading, isError} = useGetUserReposQuery(username || '')

  return (
    <>
      {isLoading && <Spinner width='100' height='100'/>}
      {isError && <Message>Error</Message>}
      {repos && (
        <div className='grid grid-cols-3 gap-3'>
          {repos?.map(repo =>
            <RepoCard key={repo.id} repo={repo}/>
          )}
        </div>
      )}
    </>
  );
};

export default Repos;
