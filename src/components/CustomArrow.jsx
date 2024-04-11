import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const CustomArrow = ({
    className, 
    style,
    onClick
}) => {
  return (
    <div className={`${className}  text-blue-500 absolute bottom-1/2 -translate-y-1/2 -right-3`} style={{...style}} onClick={onClick} >
      <FaAngleRight size={30}/>
    </div>
  )
}

export default CustomArrow
