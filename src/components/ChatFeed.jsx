import React from 'react'
import Chat from './Chat'
const ChatFeed = ({
    chatData
}) => {

    return (

        <div>
            {
                chatData.map((chat, index) => {
                    return (
                        <Chat isSelf={chat.isSelf} message={chat.message} time={chat.time} key={index} blankMessage={chat.blankMessage} type={chat.type === "aiSuggestion" ? 'aiSuggestion': 'message'} suggestion={chat.suggestion ? chat.suggestion : null} hasProduct={chat.hasProduct} promotedCategory={chat.promotedCategory} />
                    )
                })
            }
        </div>
    )
}

export default ChatFeed
