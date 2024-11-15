'use client';

import React from 'react';
import Box from '../Box';
import { FiSmile, FiHeart, FiThumbsUp, FiMusic, FiBookOpen } from 'react-icons/fi'; // React Icons for categories
import CategoryBox from './category-box';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
  {
    label: 'Humor',
    icon: <FiSmile size={20} />,
    description: 'Funny posts to make you smile.',
  },
  {
    label: 'Love',
    icon: <FiHeart size={20} />,
    description: 'Share your love stories and experiences.',
  },
  {
    label: 'Support',
    icon: <FiThumbsUp size={20} />,
    description: 'Offer support and encouragement to others.',
  },
  {
    label: 'Music',
    icon: <FiMusic size={20} />,
    description: 'Discuss and share your favorite music.',
  },
  {
    label: 'Books',
    icon: <FiBookOpen size={20} />,
    description: 'For book lovers to discuss and recommend books.',
  },
];

const Categories = () => {
    const params = useSearchParams();
    const selectedCategory = params?.get('category');
    const pathname = usePathname()
    const isMainPage = pathname === '/'
    if(!isMainPage){
        return null;
    }
  return (
    <Box>
      <div className='pl-4 flex items-center justify-evenly overflow-x-auto py-2 space-x-4'>
      {categories.map((category) => (
                    <CategoryBox
                        key={category.label}
                        label={category.label}
                        icon={category.icon}
                        selected={category.label === selectedCategory} // Check if the category is selected
                    />
                ))}
      </div>
    </Box>
  );
};

export default Categories;
