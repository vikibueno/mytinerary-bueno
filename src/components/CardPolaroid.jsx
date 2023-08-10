export default function CardPolaroid({ src,alt,text}) {
  return (
    <div className="w-1/3 flex flex-col items-center m-1 border-2 hover:border-slate-300">
            <img src={src} alt={alt} />
            <p className="text-[12px]">{text}</p>
          </div>
  )
}
