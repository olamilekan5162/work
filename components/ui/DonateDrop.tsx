"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";


export default function DonateDrop(){

    const [amount, setAmount] = useState('')

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-4">
            <div className="w-[300px] h-[300px] gap-4 flex flex-col items-center justify-center p-4 rounded-lg border bg-white text-gray-700 shadow-sm">
                <p className='text-center'>All donations goes directly to the builders in commons</p>
                <div className='flex flex-row gap-2 items-center content-center'>
                    <button onClick={() => setAmount('10')} className='py-1 px-2 outline-none rounded-sm text-black border border-blue-600 hover:bg-blue-600 hover:text-white'>
                        $10
                    </button>

                    <button onClick={() => setAmount('25')} className='py-1 px-2 rounded-sm text-black border border-blue-600 hover:bg-blue-600 hover:text-white'>
                        $25
                    </button>

                    <button onClick={() => setAmount('25')} className='py-1 px-2 rounded-sm text-black border border-blue-600 hover:bg-blue-600 hover:text-white'>
                        $50
                    </button>
                    
                </div>
                <input 
                type="number" 
                placeholder="Enter an amount to Donate" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="py-1 border-none outline-none bg-gray-100 items-center placeholder:text-xs placeholer:text-white"/>
                
                <Button>
                    DONATE
                </Button>
            </div>

        </div>
    )

}