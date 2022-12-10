import Services from "./Services"

const ServiceSection = () => {
  return (
    <div className="w-full flex mt-10 px-5 md:p-0">
        <div className="flex mx-auto max-w-6xl py-20 flex-col items-center">
            <p className="text-center section_title">Our Services</p>
            <h1 className="section_header">We Offer Reliable IT Services</h1>
            <p className="mx-auto md:w-7/12 text-finesseBlue text-center mt-4">Our solutions have been put into use in businesses all over Nigeria. They are user-friendly applications with cutting-edge features.</p>
            <Services/>
        </div>
    </div>
  )
}

export default ServiceSection