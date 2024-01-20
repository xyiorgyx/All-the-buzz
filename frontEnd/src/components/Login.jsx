import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const Login = () => {

  const [user, setUser] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = () => {
    axios
      .get('http://localhost:5555/users')
      .then((res) => {
        console.log(res.data)
      })
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:5555/users/login',
        { username, password })
      const token = res.data.token;
      alert('Login successful')
      setUsername('');
      setPassword('');
      fetchUsers()
      navigate('/account')
      window.location.reload()
      localStorage.setItem('token', token)
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className='w-full h-screen  flex'>
      {loading ? <Spinner /> : ''}
      <div className='w-[50%] h=[100%] bg-[#1a1a1a] text-white flex justify-center items-center' >
        <form className=' text-center border rounded-lg w-[600px] h-[400px] p-9'>
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
            type='passwords'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' />
          <br />
          <br />
          <button className='w-[200px] h-[50px] border hover:bg-teral-900' onClick={handleLogin}> Sign Up</button>
        </form>
      </div>
      <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
        <h2 className='text-3xl text-white'>Login</h2>
      </div>
    </div>
  )
}

export default Login