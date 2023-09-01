
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import city_actions from "../store/actions/cities"
const { read_city } = city_actions
import CardCity from '../components/CardCity'
import DetailCity from "../components/DetailCity"

export default function CityDetail() {
    const [show,setShow] = useState(false)
    const { city_id } = useParams()
    const dispatch = useDispatch()
    useEffect(
        ()=>{ dispatch(read_city({ id:city_id })) },
        []
    )
    const city = useSelector(store=> store.cities.city)
    console.log(city);
    return (
        <article>
            <DetailCity src={city.photo} alt={city_id} text={city.city} id={city_id} ></DetailCity>
        </article>
    )
}