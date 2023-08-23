import { useState,useEffect } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"

export default function Home() {

    const [show,setShow] = useState(true)
    const [data,setData] = useState([]) 
    const titleMain = "Find your perfect trip, designed by insiders who know and love their cities!"
    useEffect(
        ()=>{
            axios('/data.json')
                .then(res=>setData(res.data))
                .catch(err=>console.log(err))
        },
        []
    )
    
    return (
      <main className="lg:w-4/5 lg:h-[270px] lg:mt-[168px] lg:mb-4 lg:flex">
      <div className="p-4 flex flex-col
      lg:w-1/2 lg:h-[250px]">
        <h1 className="text-2xl mt-1 font-bold
        lg:text-3xl lg:mt-1">{`${titleMain}`}</h1>
        <p className="lg:w-5/5 lg:h-[96px] lg:mt-4">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <button class="w-[160px] justify-center px-[20px] py-[12px] rounded-[8px] bg-[#4F46E5] hover:bg-blue-700 text-white  font-bold
        lg:w-[225px] lg:h-[48px] lg:text-[18px]">View More</button>
      </div>
      <Carousel data={data} />
    </main>
  )
}
