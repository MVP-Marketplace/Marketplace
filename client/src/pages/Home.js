import React from 'react';
import axios from 'axios';

const Home = () => {
  const logOut = async () => {
    try {
      await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true,
      });
      sessionStorage.removeItem('user');
    } catch (error) {
      console.log('Logout Error' + error);
    }
  };
  return (
    <div>
      <h1>home</h1>
      <a href='http://localhost:8000/api/google'>Sign up with google</a>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Home;
