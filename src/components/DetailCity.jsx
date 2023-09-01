import { Link as Anchor } from "react-router-dom"
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import itinerary_actions from "../store/actions/itineraries"
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
        <Anchor to={'/city/'+id} className="flex flex-col flex-grow mx-auto items-center" >
            <img src={src} alt={alt} />
            <p>{text}</p>
            <span onClick={()=>setShow(!show)} className="bg-pink-500">{show ? ('hide') : ('+Info')}</span>
            
            {show && itineraries.map(each=><p key={each._id}>{each.name}</p>)}
        </Anchor>
    )
}