import { useState,useEffect,useRef } from "react"
import axios from "axios"
import apiUrl from "../apiUrl"
import CardCity from "../components/CardCity"
import { useSelector,useDispatch } from "react-redux"
import city_actions from "../store/actions/cities"
const { read_cities} = city_actions

export default function Cities() {
  const cities = useSelector(store=>store.cities.cities)
  const [reEffect,setReEffect] = useState(true)
  const text = useRef()
  const dispatch = useDispatch()
  console.log(cities);
  useEffect(
    ()=> {
      // axios(apiUrl+'cities?city='+text.current.value)
      //   //.then(res=>console.log(res.data.response)) en lugar de mostrarlo en consola lo seteo en una variable de estado
      //   .then(res=>setCities(res.data.response))//para que se muestre en la vista
      //   .catch(err=>console.log(err))
      dispatch(read_cities({ text:text.current?.value }))
    },[reEffect]
  )

  function handleFilter(){
    console.log(text.current.value);
    setReEffect(!reEffect)
  }

  return (
    <>
    <input ref={text} type="text" name="text" id="text" onKeyUp={handleFilter} />
     {cities.map(each=><CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />)}
      
    </>
  )
}
