import React from 'react'
import { useChatStore } from '../store/zustandStore'

const ChatHeader = ({
    receipientStatus
}) => {

    const {clientRole} = useChatStore()
    return (
        <div className='flex flex-row gap-2 justify-between bg-[#eff3fd] p-4 text-blue-500 rounded-t-[2rem]'>
            <div className='flex flex-row gap-2'>
                <div className='rounded-full relative'>
                <img src={'../../public/assets/chatbot.png'} alt="Chatbot" className='rounded-full' />
                <span className={`w-2 h-2 block ${receipientStatus == 'online' ? 'bg-green-400' : 'bg-red-500'} rounded-[100%] absolute right-1 bottom-2 `}></span>
                </div>
                <div className='flex flex-col'>

                    <div className='flex flex-row gap-2 items-center'>
                        <p className=' text-2xl font-bold'>Timpu </p>
                        <img src="../../public/assets/goldbadge.png" alt="gold badge" className='' />
                    </div>


                    <p className='text-lg whitespace-nowrap'> {clientRole !== 'chatbot' ? 'Chat Assistant' : 'Customer'} </p>
                </div>
            </div>

            <div className='self-end text-lg capitalize relative flex flex-row items-center gap-1'>
                <span className={`w-2 h-2 block ${receipientStatus == 'online' ? 'bg-green-400' : 'bg-red-500'} rounded-[100%]  `}></span>
                {receipientStatus}
            </div>
        </div>
    )
}

export default ChatHeader
