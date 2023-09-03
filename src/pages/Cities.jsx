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
    <main className="w-full flex flex-col flex-grow font-rale items-center justify-evenly">
      <div className="flex flex-col bg-transparent w-full h-[280px] justify-center items-center
        mt-3 mx-auto text-center gap-2">
        <h1 className="w-full text-2xl font-bold lg:w-1/2 lg:text-3xl">Cities</h1>
        <p className="w-full text-xs lg:w-1/2">Collection of the most beautiful places and experience</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#EBEBEB]">
        <div className="h-24 flex items-center">
        <div class='max-w-md mx-auto'>
          <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            <input ref={text} type="search" name="text" id="text" onKeyUp={handleFilter}
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              placeholder="Search your city.." /> 
          </div>
        </div>
        </div>
        <div className="w-full flex gap-12 flex-grow flex-wrap justify-center">
          {cities.map(each=><CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />)}
        </div>
      </div>
    </main>
  )
}
