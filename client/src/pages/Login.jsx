import React from 'react'
import authLogo from '../assets/images/illustration-authentication.svg'

const Login = () => {
  return (
    <div className='h-screen flex justify-around bg-[#f8f4f0]'>
      <div className='w-[50%] text-white flex flex-col justify-between bg-no-repeat bg-contain my-2 rounded-2xl' style={{ backgroundImage:`url(${authLogo})` }}>
        <div className='p-5 font-bold'>
            <h5>finance</h5>
        </div>
        <div className='w-[45%] flex flex-col gap-3 px-5 p-5'>
        <p className='text-xl'>Keep track of your money and save for your future</p>
        <p className='font-light text-gray-200 text-[9px]'>Personal finance app puts you in control of your spending.
            Track transactions, set budgets, and add to savings pot easily.
        </p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-start w-[45%]'>
        <form className='bg-white w-[90%] h-[75vh] rounded-2xl flex flex-col gap-3'>
          
            <h3 className='p-5 font-bold text-3xl'>Login</h3>
            
            <div className='flex flex-col px-4'>
                <label htmlFor="">Email</label>
                <input type="text" className='py-2 outline-0 border-2 border-gray-200 cursor-pointer rounded-md' />
            </div>
            <div className='flex flex-col px-4'>
                <label htmlFor="">Password</label>
                <input type="text" className='py-2 outline-0 border-2 border-gray-200 cursor-pointer rounded-md' />
            </div>
            <p className='text-right px-5 text-[10px] font-bold'>password must be atleast 8 characters</p>
             <div className='flex justify-center' >
              <button className='bg-black text-white px-45 py-3 rounded-md cursor-pointer'>
                Create Account
              </button>
             </div>
             <p className='text-center pt-4'>Need to Create an Account ? <a href='signUp'>SignUp</a> SignUp</p>
        </form>
      </div>
    </div>
  )
}

export default Login
