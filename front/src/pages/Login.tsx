import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify'
import axios from 'axios';

const Login = () => {
  const [ state, setState ] = useState('Login');
  const colleges = ["Ajeenkya D Y Patil University"];

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ college, setCollege ] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === 'Sign Up') {
      if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return;
      }    
    }
    try{
      if(state === 'Sign Up'){
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/signup', { username, email, password, college });
        if(response.data.user){
          toast.success("User created successfully");
          setState('Login');
        } else {
          toast.error(response.data.message);
        }
      } if(state === 'Login'){
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/login', { username, password });
        if(response.data.user){
          localStorage.setItem('token', response.data.token);
          toast.success("Login successful");
          window.location.href = '/';
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center w-96 m-auto p-6 mt-10 gap-4' >
        <div className='inline-flex items-center gap-2 mb-2'>
          <p className='text-2xl font-semibold text-center'>{state}</p>
        </div>
        <input onChange={(e) => setUsername(e.target.value)} type="text" className='w-full px-4 py-2 rounded-xl border border-gray-600' placeholder='Username/ Anonymously Recognized Name' required/>
        {state === 'Login' ? '' : <input onChange={(e) => setEmail(e.target.value)} type="email" className='w-full px-4 py-2 rounded-xl border border-gray-600' placeholder='Temp Email' required/>}
        {state === 'Login' ? '' : 
          <select
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className='w-full px-4 py-2 rounded-xl border border-gray-600'
            required
          >
            <option value="" disabled>
              Select Your College
            </option>
            {colleges.map((college, index) => (
              <option key={index} value={college}>
                {college}
              </option>
            ))}
          </select>
          }
        <input onChange={(e) => setPassword(e.target.value)} type="password" className='w-full px-4 py-2 rounded-xl border border-gray-600' placeholder='Password' required/>
        {state === 'Login' ? '' : <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className='w-full px-4 py-2 rounded-xl border border-gray-600' placeholder='Confirm Password' required/>}
        <div className='w-full flex justify-end'>
          <p className='cursor-pointer text-xs sm:text-sm text-gray-700'>Forgot your password?</p>
        </div>
        <button className='bg-black text-xl text-white rounded-full shadow-xl font-semibold px-8 py-2 mt-6 cursor-pointer'>{state === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
        <div className='flex items-center w-full my-2'>
          <div className='flex-1 border-t border-gray-500'></div>
          <span className='px-3 text-gray-700 text-sm'>or</span>
          <div className='flex-1 border-t border-gray-500'></div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <button className='border-gray-400 cursor-pointer'><FcGoogle size={28} /></button>
        </div>
      <div className='text-center text-sm text-gray-600 mt-4'>
        {state === 'Sign Up' ? 'Already a user?' : 'Need an account?'}
        <button onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')} className='text-pink-500 font-semibold ml-1 cursor-pointer'>
          {state === 'Sign Up' ? 'Login' : 'Sign Up'}
        </button>
      </div>
    </form>
    </div>
  )
}

export default Login