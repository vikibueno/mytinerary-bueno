import Arrow from "./Arrow"
import CardPolaroid from "./CardPolaroid"
import { useState } from "react"

export default function Carousel({ data }) {    
    let [counter,setCounter] = useState(0)
    let [counterTo,setCounterTo] = useState(4)
    function next_slide() {
        if (data.length <= counterTo) {
            setCounter(0)
            setCounterTo(4)
          } else {
            setCounter(counter+4)
            setCounterTo(counterTo+4)
          }
        }

    function prev_slide() {
        if (counter <= 0) {
          setCounter(data.length-4)
          setCounterTo(data.length)
        } else {
          setCounter(counter-4)
          setCounterTo(counterTo-4)
        }
    }
    return (
        <div className="flex flex-col">
            <p className="text-center font-semibold m-4">Popular Mytineraries</p>
            <div className="flex flex-wrap justify-center">
                {data.slice(counter,counterTo).map((each,index) => <CardPolaroid key={index} src={each.photo} alt={each.alt} text={each.city} />)}
            </div>
            <div className="flex m-3 justify-center">
              <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide} />
              <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
            </div>
        </div>
    )
}
