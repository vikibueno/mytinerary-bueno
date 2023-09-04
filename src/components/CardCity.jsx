import  { Link as Anchor } from "react-router-dom"

export default function CardCity({ src, alt, text, id, country }) {
    return (
      <div className="flex flex-col max-sm:w-full aspect-video bg-cover hover:shadow-inner
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
        mx-2 gap-1 shadow-2xl "  
        style={{backgroundImage: `url(${src})`}}>
        <Anchor to={'/city/'+id} className="flex-grow lg:w-[300px] flex flex-col justify-between">
          <div>
            <p className="text-[14px] font-semibold text-white bg-[#00000069] px-3 pt-2">
              {text}
            </p>
            <p className="flex text-xs font-semibold text-white bg-[#00000069] gap-1 px-3 pb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {country}
            </p>
          </div>
          <div className="p-2"><button className=" border w-1/3 text-white text-sm text-semibold rounded-lg bg-[#00000069]">View More</button></div>
        </Anchor>
      </div>

    )
  }
  