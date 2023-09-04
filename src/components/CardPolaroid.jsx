export default function CardPolaroid({ src,alt,text}) {
  return (
    <div className="lg:w-[270px] mx-2 flex flex-col font-semibold
    shadow-2xl hover:shadow-inner transition ease-in-out delay-150 
    hover:-translate-y-1 hover:scale-110 hover:white duration-300">
      <img src={src} alt={alt} />
      <p className="text-[14px] px-1">{text}</p>
    </div>
  )
}
