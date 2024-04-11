import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import CustomArrow from './CustomArrow';
import Tag from './Tag';
import PreviousMap from 'postcss/lib/previous-map';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { LuSlidersHorizontal } from "react-icons/lu";
import { useChatStore } from '../store/zustandStore';

// from: #eff3fd
// to: #f7faff
const Chat = ({
  isSelf,
  message,
  time,
  type,
  suggestion,
  blankMessage,
  hasProduct,
  promotedCategory
}) => {

  const settings = {
    dots: false,
    variableWidth: true,
    slidesToScroll: 1,
    nextArrow: <CustomArrow />,
    previousArrow: false,
    infinite: false

  }


  const [selectedFilter, setFilter] = useState();
  const [showFilter, setShowFilter] = useState(true);
  const {clientRole} = useChatStore();
  const [chatSide, setChatSide] = useState(clientRole === 'chatbot' ? !isSelf : isSelf)

  useEffect(() => {
    setChatSide(clientRole === 'chatbot' ? !isSelf : isSelf)
  }, [clientRole])

  console.log(chatSide)
  return (
    <div className={`my-4 ${type === 'aiSuggestion' ? 'max-w-full' : 'max-w-[70%]'} ${!chatSide ? 'mr-auto' : 'ml-auto'}`}>

      {type === 'aiSuggestion' && <div className='p-4 rounded-[2rem]'>
        <p className='text-gray-400 text-lg py-2 flex flex-row justify-between'>{suggestion.suggestiontitle}
        
        {suggestion.suggestionType === 'filters' && <span onClick={() => setShowFilter(prev => !prev)} className={`${showFilter ? 'text-blue-500 ': ''} flex flex-row gap-1 items-center` }><LuSlidersHorizontal size={20} /> Filter</span>}
        </p>
        {
          suggestion.suggestionType === 'tags' && <Slider {...settings}>

            {suggestion.tags.map((tag, index) => {
              return (<Tag key={index} tag={tag} />)
            })}


          </Slider>
        }
        {
          suggestion.suggestionType === 'filters' && showFilter && <div className='flex flex-row gap-2 flex-wrap'>
            {
            
            suggestion.filters.map((filter, index) => {
              return (
              <button onClick={(e) => setFilter(prev => {
                if (prev === filter) return null;
                return filter;
              })} key={index} className={`bg-gray-100  whitespace-nowrap  text-lg rounded-lg p-1 px-4 flex flex-row gap-2 items-center ${selectedFilter === filter ? 'text-blue-600' : 'text-gray-600'}`}>{filter}
                <AiOutlineClose size={20} className='inline ml-2' />
              </button>)
            })}
          </div>
        }
      </div>}
      {!blankMessage && <div className={`${chatSide ? 'bg-[#dcf7c5]' : 'bg-gradient-to-r from-[#eff3fd] to-[#f7faff]'}  p-4 rounded-[2rem] text-xl ${type === 'aiSuggestion' ? 'w-[70%]' : 'w-full'}`} >
        {hasProduct && <div className='bg-white p-2 flex flex-row gap-4 my-2'>
          <div className='w-[30%] min-w-[70px] '><img className='w-full h-full' src={promotedCategory.productImage} /></div>

          <div className=''>
            <p className='text-xl font-bold py-2'>{promotedCategory.productTitle}</p>
            <div className=' flex flex-row gap-2 justify-center items-center'>
              <p className='text-gray-400 text-base'>{promotedCategory.productCount} Products

              </p>
              <span><FaAngleRight size={20} /></span>
            </div>

          </div>

        </div>}
        {message}
      </div>}
      {!blankMessage && <div className={`${chatSide ? 'text-end' : 'text-left'} text-lg px-2`}>
        {time}
      </div>}
    </div>
  )
}

export default Chat
