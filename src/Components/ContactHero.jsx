import { Link } from "react-router-dom"

const ContactHero = () => {
  return (
    <div className="w-full md:h-fit flex py-5 mb-5 md:mb-32 bg-finesseBlue/20">
        <div className="max-w-6xl mx-auto md:h-fit w-full flex lg:flex-row flex-col">
            <div className="md:w-fit mx-auto lg:py-0 text-center lg:text-left py-16 lg:w-2/5 px-5 xl:px-0 my-auto gap-5 flex flex-col">
                <h1 className="text-5xl leading-tight text-finesseBlue font-medium">Contact Us</h1>
                <span className="text-finesseBlue text-lg md:ml-0 mx-auto leading-6 flex gap-1">
                    <Link to='/'>Home</Link>
                    <p>|</p>
                    <p>Contact Us</p>
                </span>
            </div>
            <div className="md:w-full lg:w-3/5 flex">
              <img src="/assets/about.jpg" alt="heroImg" className="object-cover hidden md:inline-flex w-11/12 md:w-6/12 lg:w-9/12  mx-auto lg:mr-0 lg:ml-auto lg:my-auto" />
            </div>
        </div>
    </div>
  )
}

export default ContactHero