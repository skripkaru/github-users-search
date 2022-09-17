import React, {useState} from 'react';
import {useLazySearchUsersQuery} from "../api/githubApi";
import UserCard from "../components/UserCard";
import Spinner from "../components/UI/Spinner";
import Message from "../components/UI/Message";
import {IUser} from "../types";

interface HomeProps {
  users: IUser[]
  isLoading: boolean
  isError: boolean
}

const Home = (props: HomeProps) => {
  const {users, isLoading, isError} = props

  // const [search, setSearch] = useState<string>('')
  // const [searchUsers, {data: users, isLoading, isError}] = useLazySearchUsersQuery()
  //
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   searchUsers(search)
  //   setSearch('')
  // }

  return (
    <>
      {isLoading && <Spinner width='100' height='100'/>}
      {isError && <Message>Error</Message>}
      {users && (
        <div className='grid grid-cols-3 gap-3'>
          {users?.map(user =>
            <UserCard key={user.id} user={user}/>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
