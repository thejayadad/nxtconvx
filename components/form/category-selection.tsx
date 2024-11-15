'use client';

import React, { useState } from 'react';
import { FiSmile, FiHeart, FiThumbsUp, FiMusic, FiBookOpen } from 'react-icons/fi'; // React Icons for categories

// List of categories
export const categories = [
  {
    label: 'Humor',
    icon: <FiSmile size={20} />,
  },
  {
    label: 'Love',
    icon: <FiHeart size={20} />,
  },
  {
    label: 'Support',
    icon: <FiThumbsUp size={20} />,
  },
  {
    label: 'Music',
    icon: <FiMusic size={20} />,
  },
  {
    label: 'Books',
    icon: <FiBookOpen size={20} />,
  },
];

const CategorySelection = ({ onSelect, selectedCategory }) => {
  return (
    <div className="pl-4 flex items-center justify-evenly overflow-x-auto py-2 space-x-4">
      {categories.map((category) => (
        <div
          key={category.label}
          onClick={() => onSelect(category.label)} // Trigger the onSelect with the category label
          className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
            ${selectedCategory === category.label ? 'border-b-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}`}
        >
          <div className="flex items-center justify-center">{category.icon}</div>
          <div className="font-medium text-sm">{category.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CategorySelection;
