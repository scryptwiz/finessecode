const HomeHero = () => {
  return (
    <div className="w-full h-[36rem] flex">
        <div className="max-w-6xl mx-auto h-[36rem] w-full flex lg:flex-row flex-col">
            <div className="md:w-fit mx-auto lg:py-0 text-center lg:text-left py-16 lg:w-2/5 px-5 xl:px-0 my-auto gap-5 flex flex-col">
                <h1 className="text-5xl leading-tight text-finesseBlue font-medium">Brings to life your <br /> IT solutions.</h1>
                <p className="text-finesseBlue text-lg leading-6">A top-notch software engineering team <br /> delivering excellent code.</p>
                <button className="text-white mx-auto lg:m-0 w-fit px-7 py-2.5 rounded text-lg bg-gradient-to-r to-indigo-500 from-finesseBlue">Discover More</button>
            </div>
            <div className="md:w-full lg:w-3/5 flex">
              <img src="/assets/heroImg.png" alt="heroImg" className="object-cover hidden md:inline-flex w-11/12 md:w-6/12 lg:w-9/12  mx-auto lg:mr-0 lg:ml-auto lg:my-auto" />
            </div>
        </div>
    </div>
  )
}

export default HomeHero