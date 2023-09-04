import React from 'react'
import { useState } from 'react'

export default function Itinerary({data}) {
    const count = 0
    const [show,setShow] = useState(false)
    const [viewMore,setViewMore] = useState(false)
    return (
    <div className="lg:w-1/2 p-3 flex flex-col gap-1 p-1 shadow-2xl bg-white border">
        <p className='text-center'>{data.name}</p>
        <img src={data.photo} alt="" />
        <div className='flex justify-between'>
            <div className='flex justify-center items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <p className='text-xs'>{count}</p>
            </div>
            <button>
                {show ? 
                (<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setShow(!show)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                ) 
                
                : 
                
                (<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setShow(!show)}  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>)}
            
            </button>
        </div>

        {show && 
            <div className='flex flex-col gap-4 text-xs'>
               <div className='flex justify-center justify-between p-2'>
                    <div className='w-1/4 flex flex-col items-center gap-1'><p>User:</p><div className='flex flex-col items-center' ><img className='w-10 h-10 rounded-full border' src={data.city_id.admin_id.photo} alt="" /><p className='text-xs'>{data.city_id.admin_id.name}</p><p>{data.city_id.admin_id.lastName}</p></div></div>
                    {/* <div className='w-1/4 flex flex-col items-center gap-1'><p>Hashtags:</p><p>{data.tags}</p></div> */}
                    <div className='w-1/4 flex flex-col items-center gap-1'><p>Duration</p>{(data.duration / 60).toFixed(2).replace(".00", "")} hs</div>
                    <div className=' w-1/4 flex flex-col items-center gap-1'><p>Price:</p>{data.price}</div>
               </div>
                <div className='flex justify-center p-3'>
                    <button className='w-1/2 h-6 rounded-[12px] text-center bg-[#00000069]' onClick={()=>setViewMore(!viewMore)}>View more</button>    
                </div>
                
                {viewMore && <div className='flex justify-center' ><p>Under Construction</p></div> }
            </div>    
        }
    </div>
  )
}
