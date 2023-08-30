import  { Link as Anchor } from "react-router-dom"

export default function CardCity({ src,alt,text,id}) {
    return (
      <Anchor to={'/city/'+id} className="w-[270px] mx-2 flex flex-col shadow-2xl hover:shadow-inner
      transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
        <p className="text-[14px]">{text}</p>
        <img src={src} alt={alt} />
      </Anchor>
    )
  }
  