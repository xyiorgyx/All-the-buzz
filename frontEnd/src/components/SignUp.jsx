import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const SignUp = () => {

  const [user, setUser] = useState([])
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSignup = (event) => {
    event.preventDefault()

    const data = {
      email,
      username,
      password,
    };

    setLoading(true);
    axios
      .post('http://localhost:5555/users/register', data)
      .then(() => {
        setLoading(false);
        navigate('/login');
        alert('Sign up Successful')

      })
      .catch((err) => {
        setLoading(false);
        alert('A sign up error has occured. Please check console and try again')
        console.log(err, data)

      });
  }

  return (
    <div className='w-full h-screen  flex'>
       {loading ? <Spinner /> : ''}
      <div className='w-[50%] h=[100%] bg-[#1a1a1a] text-white flex justify-center items-center' >
        <form className=' text-center border rounded-lg w-[600px] h-[400px] p-9' action="">
          {/*Email input*/}
          <label>Email</label>
          <br />
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
          />
          <br />
          <br />
          {/* Username Input*/}
          <label>Username</label>
          <br />
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' />
          <br />
          <br />
          <button className='w-[200px] h-[50px] border hover:bg-teral-900' onClick={handleSignup}> Sign Up</button>
        </form>
      </div>
      <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
        <h2 className='text-3xl text-white'>Sign Up</h2>
      </div>
    </div>
  )
}

export default SignUp