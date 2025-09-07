import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
  const [ state, setState ] = useState('Login');

  return (
    <div className='flex justify-center items-center'>
      <form className='flex flex-col items-center w-96 m-auto p-6 mt-10 gap-4'>
        <div className='inline-flex items-center gap-2 mb-2'>
          <p className='text-2xl font-semibold text-center'>{state}</p>
        </div>
        <input type="text" className='w-full px-4 py-2 rounded-xl border border-gray-600' placeholder='Username' required/>
        <input type="password" className='w-full px-4 py-2 rounded-xl border border-gray-600' placeholder='Password' required/>
        {state === 'Login' ? '' : <input type="password" className='w-full px-4 py-2 rounded-xl border border-gray-600' placeholder='Confirm Password' required/>}
        <div className='w-full flex justify-end'>
          <p className='cursor-pointer text-xs sm:text-sm text-gray-700'>Forgot your password?</p>
        </div>
        <button className='bg-black text-xl text-white rounded-full shadow-xl font-semibold px-8 py-2 mt-6 cursor-pointer'>{state === 'Sign Up' ? 'Login' : 'Register'}</button>
        <div className='flex items-center w-full my-2'>
          <div className='flex-1 border-t border-gray-500'></div>
          <span className='px-3 text-gray-700 text-sm'>or</span>
          <div className='flex-1 border-t border-gray-500'></div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <button className='border-gray-400 cursor-pointer'><FcGoogle size={28} /></button>
          <button className='border-gray-400 cursor-pointer'><FaGithub size={28} /></button>
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