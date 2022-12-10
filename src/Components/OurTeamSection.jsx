const OurTeamSection = () => {
  return (
    <div className="flex w-full flex-col">
        <h1 className="text-center text-3xl font-medium text-finesseBlue mb-10">Our Team</h1>
        <div className="w-full pb-20 flex flex-wrap gap-7 justify-center px-5 md:px-0">
            <div className="bg-white shadow-md flex flex-col md:w-4/12 w-full lg:w-2/12 rounded">
                <img src="/assets/write.jpg" alt="WebDev" className="h-52 object-cover rounded-t"/>
                <div className="px-3 pt-2 pb-4 flex flex-col gap-1">    
                    <h1 className="team_title">Prince Chisomaga</h1>
                    <p className="team_content">Backend Developer</p>
                </div>
            </div>
            <div className="bg-white shadow-md flex flex-col md:w-4/12 w-full lg:w-2/12 rounded">
                <img src="/assets/build.jpg" alt="WebDev" className="h-52 object-cover rounded-t"/>
                <div className="px-3 pt-2 pb-4 flex flex-col gap-1">    
                    <h1 className="team_title">Gbenga Oyewole</h1>
                    <p className="team_content">Software Engineer</p>
                </div>
            </div>
            <div className="bg-white shadow-md flex flex-col md:w-4/12 w-full lg:w-2/12 rounded">
                <img src="/assets/write2.jpg" alt="WebDev" className="h-52 object-cover rounded-t"/>
                <div className="px-3 pt-2 pb-4 flex flex-col gap-1">    
                    <h1 className="team_title">Moses Ukomadu</h1>
                    <p className="team_content">Chief Executive Officer</p>
                </div>
            </div>
            <div className="bg-white shadow-md flex flex-col md:w-4/12 w-full lg:w-2/12 rounded">
                <img src="/assets/write2.jpg" alt="WebDev" className="h-52 object-cover rounded-t"/>
                <div className="px-3 pt-2 pb-4 flex flex-col gap-1">    
                    <h1 className="team_title">Enoch Taiwo</h1>
                    <p className="team_content">Back End Developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeamSection