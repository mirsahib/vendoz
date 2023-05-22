import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
export default function Loading() {
  return (
    <div className='flex w-[80%] m-auto justify-center items-center h-[75vh]'>
        <FontAwesomeIcon icon={faSpinner} spin size={'5x'} className='text-blue-800' />
    </div>
  )
}
