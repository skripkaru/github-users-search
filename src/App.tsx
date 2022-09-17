import React, {useState} from 'react';
import Router from "./router/Router";
import Header from "./components/Header";
import {useLazySearchUsersQuery} from "./api/githubApi";

const App = () => {
  const [search, setSearch] = useState<string>('')
  const [searchUsers, {data: users, isLoading, isError}] = useLazySearchUsersQuery()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchUsers(search)
    setSearch('')
  }

  return (
    <div className='h-screen w-screen'>
      <Header search={search} setSearch={setSearch} handleSubmit={handleSubmit}/>
      <div className='container mx-auto p-5'>
        <Router users={users} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
}

export default App;
