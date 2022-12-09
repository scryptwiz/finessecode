const AboutSection = () => {
  return (
    <div className="w-full flex">
        <div className="max-w-6xl mx-auto flex lg:flex-row flex-col items-center">
            <div className="md:w-1/2 w-full mx-auto lg:m-0">
                <div className="w-full">
                    <img src="/assets/about.jpg" alt="About Section" className="w-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col w-full md:w-4/5 lg:w-1/2 px-4 md:pl-4 gap-5">
              <div>
                <h6 className="section_title">About Our Organization</h6>
                <h1 className="section_header">A team of excellent software engineers.</h1>
              </div>
              <p className="text-finesseBlue text-lg">Since2019, we have been steadily expanding with the goal of seeing Organizations achieve and raise the bar on the international stage.</p>
              <button className="text-white hover:border-finesseBlue border hover:bg-none hover:text-finesseBlue transition-all ease-in-out duration-500 mx-auto lg:m-0 w-fit px-7 py-2.5 rounded text-lg bg-gradient-to-r to-indigo-500 from-finesseBlue ml-0">More About Us</button>
            </div>
        </div>
    </div>
  )
}

export default AboutSection