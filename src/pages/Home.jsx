import { useState,useEffect } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"
import apiUrl from '../apiUrl'
import  { Link as Anchor } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import city_actions from "../store/actions/cities"
const { read_carousel } = city_actions


export default function Home() {

    const [show,setShow] = useState(true)
    const [data,setData] = useState([]) 
    const titleMain = "Find your perfect trip, designed by insiders who know and love their cities!"
    // const store = useSelector(store=>store)
    // console.log(store); 
    // const city_reducer = useSelector(store=>store.cities)
    // console.log(city_reducer);
    const carousel = useSelector(store=>store.cities.carousel)
    console.log(carousel);
    const dispatch = useDispatch()
    useEffect(
        ()=>{
            // axios(apiUrl+'cities/carousel')
            //     //.then(res=>console.log(res.data.data_carousel))
            //     .then(res=>setData(res.data.data_carousel))
            //     .catch(err=>console.log(err))
            if (carousel.length===0) {
              dispatch(read_carousel())
            }
        },
        []
    )
    
    return (
      <main className="w-full flex flex-col gap-12 flex-grow font-rale text-white justify-evenly">
        <div className="w-5/6 flex flex-col mt-3 mx-auto justify-evenly p-1 gap-2"> 
            <h1 className="w-full text-2xl font-bold lg:w-1/2 lg:text-3xl">{`${titleMain}`}</h1>
            <p className="w-full text-xs lg:w-1/2 ">
              Our app will help you find the perfect path for your next trip. 
              With an easy-to-use interface and a host of itinerary options, 
              planning your next trip has never been easier.
            </p> 
          <Anchor to={'/cities'}>
            <button className="w-2/5 justify-center rounded-[8px] bg-[#4F46E5] hover:bg-blue-700 text-white text-sm  font-semibold
            bg-green-500 lg:w-1/5">View More</button> 
          </Anchor>
        </div>
        <div className="w-full"><Carousel data={carousel} /></div>
    </main>
  )
}
