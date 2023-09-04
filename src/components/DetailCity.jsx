import { Link as Anchor } from "react-router-dom"
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import itinerary_actions from "../store/actions/itineraries"
import Itinerary from "./Itinerary"
const { read_itineraries_from_city } = itinerary_actions

export default function DetailCity({ src, alt, text, id, smalldescription }) {
    const [show,setShow] = useState(false)
    const itineraries = useSelector(store=>store.itineraries.itineraries_from_city)
    console.log(itineraries);
    const dispatch = useDispatch()
    const isItineraryLengthCero = (itineraries.length===0)

    useEffect(
        ()=>{ dispatch(read_itineraries_from_city({city_id:id })) },
        []
    )

    return (
        <div className="flex flex-col w-full font-rale font-semibold justify-center items-center flex-grow ">
            <Anchor to={'/city/'+id} className="flex flex-col w-3/4 h-1/2 mx-auto items-center backdrop-blur-md bg-white/30 p-3" >
                <p className="text-[40px] text-bold text-center" >{text}</p>
                <p className="font-semibold text-sm indent-8 pb-3">{smalldescription}</p>
                
                {/* <img src={src} alt={alt} />  */}
                
                <button onClick={()=>setShow(!show)} className="w-2/5 h-8 justify-center items-center rounded-[12px] hover:bg-pink-700 text-white text-sm font-semibold
                bg-[#00000079] text-center text-xs lg:w-1/5">{show ? 
                ( <div className="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-center w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg></div> ) 
                : ('View Itineraries')}</button>
                
                
            </Anchor>
            <div className="flex flex-col gap-6 items-center p-3">
                {(isItineraryLengthCero) ? (show && <div className="bg-white  w-[300px]" ><p>There are no itineraries</p></div> ) 
                : (show && itineraries.map(each=><Itinerary key={each._id} data={each}></Itinerary>))}
            </div>
        </div>

        
    )
}