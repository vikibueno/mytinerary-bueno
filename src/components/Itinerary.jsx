import React from 'react'
import { useState } from 'react'

export default function Itinerary({data}) {
    const count = 0
    const [show,setShow] = useState(false)
    return (
    <div className="w-[270px]  p-3 flex flex-col shadow-2xl bg-white">
        <p className='text-center'>{data.name}</p>
        <img src={data.photo} alt="" />
        <div className='flex justify-between'>
            <div className='flex justify-center items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <p className='text-xs'>{count}</p>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg> */}

        <span onClick={()=>setShow(!show)} >
            {show ? 
        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
          ) 
          
          : 
          
          (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>)}
        
        </span>

        {show && 
            <div className='flex flex-col bg-pink-500 w-[270px]  p-3 '>
               <div className='flex text-xs'>
                    <div><p>User:</p>{data.city_id.admin_id.name} <img className='w-10 h-10' src={data.city_id.admin_id.photo} alt="" /></div>
                    <div><p>Hashtags:</p>{data.tags}</div>
                    <div><p>Duration</p>{data.duration}</div>
                    <div className='flex flex-col'><p>Price:</p>{data.price}</div>
               </div>
                <div>
                    <button>View more</button>
                </div>
                
            </div>    
        }







    </div>
     
    </div>
  )
}
