import React, { useEffect, useState } from 'react';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import UsersList from '../components/UsersList';

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();
      if(!response.ok) {
        throw new Error(data.message);
      }
      setLoadedUsers(data.users);
      
    }
    catch(err) {
      setError(err.message || "An Error Occured")
    }
    setIsLoading(false);
  } 
    
    sendRequest();
  }, [])

  const errorHandler = () => {
    setError(null);
  }

  return( 
  <>

  <ErrorModal error={error} onClear={errorHandler}/>
  {isLoading && (<div className='center'>
    <LoadingSpinner />
    </div>)}
    
  {!isLoading && loadedUsers && <UsersList items={loadedUsers} /> }
  
  </>
  
  );
};

export default Users;
