

import './App.css'
import ChatHeader from './components/ChatHeader'
import Switch from '@mui/material/Switch';

import ChatFeed from './components/ChatFeed'
import InputBox from './components/InputBox'
import { useChatStore } from './store/zustandStore'
import { useState } from 'react';

function App() {

  const { chatData, clientRole, setClientRole } = useChatStore();
  const [checked, setChecked] = useState(false)
  console.log(clientRole)
  const handleRoleChange = (e) => {
    const role = clientRole === 'user' ? 'chatbot': 'user';
    setClientRole(role)
  }
  // console.log(chatData)
  return (
    <div className='bg-gray-200 flex '>
      <div className='w-full max-w-[480px] mx-auto  border border-gray-200 p-2 min-h-screen bg-white rounded-[2rem] flex flex-col !relative'>

        <ChatHeader receipientStatus={"online"} />

        <ChatFeed chatData={chatData} />

        <div className='sticky block bottom-0 w-full max-w-[480px] mx-auto '>
          <InputBox />
        </div>


      </div>
      <div className='fixed top-0 right-0 text-lg bg-blue-100/5 p-2 w-full'>
        User <Switch checked={clientRole === 'chatbot'} onChange={handleRoleChange} /> Chatbot
      </div>
    </div>
  )
}

export default App
