import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import Logo from './Logo'
import { GrAttachment } from "react-icons/gr";
import { useChatStore } from '../store/zustandStore';
import { getCurrentFormatedTime } from '../utils/date.utils';

const InputBox = () => {

  const [message, setMessage] = useState('')
  const {addChat, clientRole} = useChatStore();

  const sendMessage = (e) => {
    const chat = {
      isSelf: clientRole === 'user' ? true : false,
      type: 'message',
      blankMessage: false,
      time: getCurrentFormatedTime(),
      message
  }
  addChat(chat);
  setMessage('')
  }
  return (
    <div className='bg-gradient-to-r from-[#eff3fd] to-[#f7faff] py-2 px-4 flex flex-col gap-2 rounded-b-[2rem] relative after:content-[""] after:absolute after:inset-0 after:bg-white after:-z-10'>
      <div className='flex flex-row gap-2 relative z-20'>
        <input type='text' className='min-w-[80%] py-4 px-4 rounded-xl' placeholder='Type your message ' value={message} onChange={(e) => setMessage(e.target.value)} />
        <div className='inline absolute left-[70%] top-1/2 -translate-y-1/2'>
          <GrAttachment size={30} className='text-gray-500' />
        </div>
        <div className='bg-blue-600 flex items-center justify-center text-white text-center rounded-xl w-full cursor-pointer' onClick={sendMessage}>
          <FaAngleRight size={30} />
        </div>

      </div>
      <p className='text-center text-lg text-gray-400 flex flex-row gap-1 justify-center py-2'>Powered by <span className='text-gray-500 font-bold'>Krunk.ai</span> <Logo /> </p>

    </div>
  )
}

export default InputBox
