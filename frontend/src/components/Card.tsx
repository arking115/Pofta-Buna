import React from 'react';

type CardProps = {
    name: string;
    base: string;
    endpoints: number;
    status: 'red' | 'green' | 'yellow';
};

const Card: React.FC<CardProps> = ({ name, base, endpoints, status }) => {
    return (
        <div className="bg-white rounded-md h-32 shadow-md p-4 relative">
            <div className='flex justify-between text-gray-500'>
                <h1 className='text-black font-bold'>Hello from {name}</h1>
                <div>Endpoints: {endpoints}</div>
            </div>
            <div className='h-11 font-thin text-sm text-gray-400'>{base}</div>
            <div className='absolute bottom-3 text-gray-400'>
                Status
            </div>
            
        </div>
    );
}

export default Card;
