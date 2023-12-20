import React from 'react'
import Chatheader from '../components/chat/chatheader'
import Chatprofile from '../components/chat/chatprofile'
import Inputmessage from '../components/chat/inputmessage'
import Profilelist from '../components/chat/profilelist'
import Chatbox from '../components/chat/chatbox'


const Login = () => {
  return (
    <div className='flex'>
      <div className='w-full sm:w-1/3'>
        <Profilelist />
      </div>

      <div className='hidden sm:block sm:w-2/3'>
        <Chatbox />
      </div>

      {/* <Chatheader />
      <Chatprofile />
      <Inputmessage /> */}
    </div>
  )
}

export default Login