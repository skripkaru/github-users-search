import React from 'react';
import UserCard from "../components/UserCard";
import Spinner from "../components/UI/Spinner";
import Message from "../components/UI/Message";
import {useAppSelector} from "../hooks/useAppSelector";

interface HomeProps {
  isLoading: boolean
  isError: boolean
}

const Home = (props: HomeProps) => {
  const {isLoading, isError} = props
  const {users} = useAppSelector(state => state.users)

  return (
    <>
      {isLoading && <Spinner width='100' height='100'/>}
      {isError && <Message>Error</Message>}
      {users?.length !== 0 ? (
        <div className='grid grid-cols-3 gap-3'>
          {users?.map(user =>
            <UserCard key={user.id} user={user}/>
          )}
        </div>
      ) : <Message>Users not found</Message>}
    </>
  );
};

export default Home;
