import { useState,useEffect } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"

export default function Home() {

    const [show,setShow] = useState(true)
    const [data,setData] = useState([]) 
    const titleMain = "Find the perfect destination"
    useEffect(
        ()=>{
            axios('/data.json')
                .then(res=>setData(res.data))
                .catch(err=>console.log(err))
        },
        []
    )
    
    return (
    <main className="lg:w-4/5 lg:h-[270px] lg:mt-[168px] lg:mb-4 flex">
      <div className="lg:w-1/2 lg:h-[250px] flex flex-col">
        <h1 className="lg:w-5/5 lg:h-[64px] text-3xl lg:mt-1 font-bold">{`${titleMain}`}</h1>
        <p className="lg:w-5/5 lg:h-[96px] lg:mt-4">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <button class="lg:w-[225px] lg:h-[48px] text-center px-[20px] py-[12px] rounded-[8px] bg-[#4F46E5] hover:bg-blue-700 text-white text-[18px] font-bold">View More</button>
      </div>
      <Carousel data={data} />
    </main>
  )
}
