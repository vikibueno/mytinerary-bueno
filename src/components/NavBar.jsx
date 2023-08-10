export default function NavBar() {
  return (
    <header className="lg:h-14 lg:w-4/5 lg:mt-4 flex justify-between items-center">
    <div className="text-[22px] font-bold leading-[42.56px] xl:w-[183px] lg:h-[43px]">My Tinerary</div>
    <nav className="lg:w-[330px] lg:h-[43px] flex gap-[8px] justify-end items-center"> 
        <div className="lg:w-[69px] lg:h[32px] text-[18px] leading-[31.92px] font-bold">Home</div>
        <div className="lg:w-[62px] lg:h[32px] text-[18px] leading-[31.92px] font-bold">Cities</div>
        <button class="font-bold xl:w-[116px] xl:h-[46px] xl:gap-[6px] xl:rounded-[10px] bg-[#4F46E5] hover:bg-blue-700 text-white text-[18px] leading-[31.92px]">Login</button>
    </nav> 
  </header>
  )
}
