import React from 'react'
import Box from '../Box'
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

interface ActionBarProps {
    title: string;
    description: string;
    backarrow?: boolean
}

const ActionBar = ({title, description, backarrow}: ActionBarProps) => {
  return (
    <div className='space-y-2 flex'>
    {/* Title Section */}
    <div className='flex space-x-4  items-center'>
    {backarrow && (
        <Link href='/' className='flex items-center'>
          <FiArrowLeft className='h-6 w-6 text-gray-600 mr-2' />
          <span className='text-brown-600 hover:underline'>Back Home</span>
        </Link>
      )}

    </div>
      <div className='flex flex-col'>
      <h1 className='text-2xl font-extrabold text-gray-900'>{title}</h1>

<p className='text-lg text-gray-500'>{description}</p>
      </div>
  </div>
  )
}

export default ActionBar