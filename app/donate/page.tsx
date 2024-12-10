import React from 'react'


export default function DonatePage(){
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-4">
            <div className="w-[300px] h-[200px] gap-4 flex flex-col items-center justify-center p-4 rounded-lg border bg-white text-gray-700 shadow-sm">
                <button className='px-4 py-2 bg-blue-600 rounded-xl text-white font-bold'>
                    DONATE
                </button>
                <p className='text-center'>All donations goes directly to the builders in commons</p>
            </div>

        </div>
    )

}