import React, {useEffect, useState} from 'react';
import Router from "./router/Router";
import Header from "./components/Header";
import {useLazySearchUsersQuery} from "./api/githubApi";
import {useNavigate} from "react-router-dom";
import {useActions} from "./hooks/useActions";

const App = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')
  const [searchUsers, {data: users, isLoading, isError}] = useLazySearchUsersQuery()
  const {setUsers, setUsername} = useActions()

  useEffect(() => {
    setUsers(users)
  }, [users])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchUsers(search)
    setUsername(search)
    setSearch('')
    navigate('/')
  }

  return (
    <div className='h-screen w-screen'>
      <Header search={search} setSearch={setSearch} handleSubmit={handleSubmit}/>
      <div className='container mx-auto p-5'>
        <Router isLoading={isLoading} isError={isError}/>
      </div>
    </div>
  );
}

export default App;
