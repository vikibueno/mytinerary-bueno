import { useState,useEffect } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"
import apiUrl from '../apiUrl'
import  { Link as Anchor } from "react-router-dom"


export default function Home() {

    const [show,setShow] = useState(true)
    const [data,setData] = useState([]) 
    const titleMain = "Find your perfect trip, designed by insiders who know and love their cities!"
    useEffect(
        ()=>{
            axios(apiUrl+'cities/carousel')
                //.then(res=>console.log(res.data.data_carousel))
                .then(res=>setData(res.data.data_carousel))
                .catch(err=>console.log(err))
        },
        []
    )
    
    return (
      <main className="flex flex-col font-rale text-white">
        <div className="w-5/6 flex flex-col mx-auto mt-10"> 
            <h1 className="w-1/2 text-2xl mt-1 font-bold lg:text-3xl lg:mt-1 font-rale">{`${titleMain}`}</h1>
            <p className="w-1/2 text-xs">
              Our app will help you find the perfect path for your next trip. 
              With an easy-to-use interface and a host of itinerary options, 
              planning your next trip has never been easier.
            </p> 
            <button class="w-1/5 justify-center rounded-[8px] bg-[#4F46E5] hover:bg-blue-700 text-white text-sm  font-semibold
            bg-green-500">View More</button>  
        </div>
        <div className="w-full"> <Carousel data={data} />    </div>

      
    </main>
  )
}
