'use client';

import React, { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconType } from 'react-icons';
import qs from 'query-string';

interface CategoryBoxProps {
    icon: JSX.Element; // Updated to accept JSX elements as icon
    label: string;
    selected: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon, label, selected }) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        // Get current query params
        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        // Update query with selected category
        const updatedQuery: any = {
            ...currentQuery,
            category: label,
        };
        if(params?.get('category') === label){
            delete updatedQuery.category
        }
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, {skipNull: true})
        router.push(url)
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}
        >
            <div className="flex items-center justify-center">{icon}</div>
            <div className="font-medium text-sm">{label}</div>
        </div>
    );
};

export default CategoryBox;
