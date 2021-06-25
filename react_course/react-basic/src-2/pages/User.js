import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import UserList from '../components/UserList';


const User = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => {
            setUser(response.data);
        });
}, []);

  const userDetail =  (
    <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
    </div>
)
return (
  <>
      <h1>User 정보</h1>
      {userDetail}
  </>
);
}
export default User;