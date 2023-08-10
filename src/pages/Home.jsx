import { useState } from "react"
import Carousel from "../components/Carousel"

export default function Home() {
    const [shot,setShow] = useState(true)
    const titleMain = "Find the perfect destination"
    let data = [
      {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
      {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
      {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
      {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
      {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
      {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
      {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
      {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
      {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
      {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
      {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
      {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
      {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
      {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
      {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
      {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
    ]

    return (
    <main className="lg:w-4/5 lg:h-[270px] lg:mt-[168px] lg:mb-4 flex">
      <div className="lg:w-1/2 lg:h-[250px] flex flex-col">
        <h1 className="lg:w-5/5 lg:h-[64px] text-3xl lg:mt-1 font-bold">{`${titleMain}`}</h1>
        <p className="lg:w-5/5 lg:h-[96px] lg:mt-4">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <button class="lg:w-[225px] lg:h-[48px] text-center px-[20px] py-[12px] rounded-[8px] bg-[#4F46E5] hover:bg-blue-700 text-white text-[18px] font-bold">View More</button>
      </div>
      <Carousel data={data} />
    </main>
  )
}
