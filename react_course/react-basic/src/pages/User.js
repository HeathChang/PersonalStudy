import React, { useEffect,useState } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import { useParams } from 'react-router';
const User=()=>{
  const {id} = useParams();
  const[users,setUsers] = useState(null);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    .then(response=>{
      setUsers(response.data);
    })
  },[])
  useEffect(()=>{
    console.log(users);
  },[users])

  return(
    <>
      <h1>Users info </h1>
    </>
  )
}
export default User;