import { Link as Anchor } from "react-router-dom"
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import itinerary_actions from "../store/actions/itineraries"
import Itinerary from "./Itinerary"
const { read_itineraries_from_city } = itinerary_actions

export default function DetailCity({ src, alt, text, id }) {
    const [show,setShow] = useState(false)
    const itineraries = useSelector(store=>store.itineraries.itineraries_from_city)
    console.log(itineraries);
    const dispatch = useDispatch()
    useEffect(
        ()=>{ dispatch(read_itineraries_from_city({city_id:id })) },
        []
    )

    return (
        <div className="bg-blue-300 flex flex-grow">
            <Anchor to={'/city/'+id} className="flex flex-col mx-auto items-center" >
                <p>{text}</p>
                <img className="bg-[#00000099]" src={src} alt={alt} />
                
                <span onClick={()=>setShow(!show)} className="w-2/5 h-8 justify-center items-center rounded-[12px] bg-[#4F46E5] hover:bg-blue-700 text-white text-sm font-semibold
                bg-pink-500 text-center lg:w-1/5">{show ? ('hide') : ('View Itineraries')}</span>
                
                {show && itineraries.map(each=><Itinerary data={each}></Itinerary>)}
            </Anchor>
        </div>

        
    )
}