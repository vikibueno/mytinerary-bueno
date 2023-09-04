export default function Arrow({ direction,onClick }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 p-1 cursor-pointer rounded-full bg-[#00000069]" onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
    </svg>
  )
}
