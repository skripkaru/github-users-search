import React, {useState} from 'react';
import {useLazySearchUsersQuery} from "../api/githubApi";
import UserCard from "../components/UserCard";

const Home = () => {
  const [search, setSearch] = useState<string>('')
  const [searchUsers, {data: users, isLoading, isError}] = useLazySearchUsersQuery()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchUsers(search)
    setSearch('')
  }

  return (
    <div className='w-1/3 mx-auto mt-5'>
      <form className='flex w-full ml-auto mb-3' onSubmit={handleSubmit}>
        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder='Search user...'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
      {isLoading && <h1 className='text-center'>Loading...</h1>}
      {isError && <h1 className='text-center'>Error</h1>}
      {users?.length !== 0 ? users?.map(user =>
        <UserCard key={user.id} user={user}/>
      ) : <h1 className='text-center'>Users not found</h1>}
    </div>
  );
};

export default Home;
