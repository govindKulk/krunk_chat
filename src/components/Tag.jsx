import React from 'react'

const Tag = ({
    tag
}) => {
  return (
    <span className='p-2 border-2 border-blue-500  flex items-center justify-center whitespace-nowrap bg-blue-50 text-blue-500 text-lg rounded-xl font-semibold'>
    {tag}
    </span>
  )
}

export default Tag
