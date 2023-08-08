function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between">
      <header className="lg:h-14 lg:w-4/5 lg:ml-32 lg:mt-4 flex justify-between items-center">
        <div className="text-[22px] font-bold leading-[42.56px] xl:w-[183px] lg:h-[43px] flex justify-center items-center">My Tinerary</div>
        <nav className="lg:w-[330px] lg:h-[43px] flex gap-[8px] justify-end items-center"> 
            <div className="lg:w-[69px] lg:h[32px] text-[18px] leading-[31.92px] font-bold">Home</div>
            <div className="lg:w-[62px] lg:h[32px] text-[18px] leading-[31.92px] font-bold">Cities</div>
            <button class="font-bold xl:w-[116px] xl:h-[46px] xl:gap-[6px] xl:rounded-[10px] bg-[#4F46E5] hover:bg-blue-700 text-white text-[18px] leading-[31.92px]">Login</button>
        </nav> 
      </header>
      <main className="lg:w-4/5 lg:ml-40 lg:h-[250px] lg:mt-44 lg:mb-4 flex justify-between items-center">
        <div className="lg:w-1/2 lg:h-[250px] flex flex-col">
          <h1 className="lg:w-5/5 lg:h-[64px] text-3xl lg:mt-1 font-bold">Find the perfect destination</h1>
          <p className="lg:w-5/5 lg:h-[96px] lg:mt-4">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <button class="lg:w-[225px] lg:h-[48px] text-center px-[20px] py-[12px] rounded-[8px] bg-[#4F46E5] hover:bg-blue-700 text-white text-[18px] font-bold">View More</button>
        </div>
        <div className="lg:w-1/2 lg:h-[250px]"><h1>Carousel</h1></div>
      </main>
      <footer className="lg:h-[20px]"><h1>Footer</h1></footer>
    </div>
  )
}

export default App
