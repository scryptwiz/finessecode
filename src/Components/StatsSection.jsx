const StatsSection = () => {
  return (
    <div className="w-full flex my-10 py-16">
        <div className="stat_max_section gap-7 lg:text-left text-center lg:gap-12">
            <div className="">
                <h1 className="text-3xl font-semibold text-finesseBlue">500</h1>
                <p className="text-finesseBlue mt-2">Project Completed</p>
            </div>
            <hr className="h-full border border-finesseBlue/70" />
            <div className="">
                <h1 className="text-3xl font-semibold text-finesseBlue">1.1k</h1>
                <p className="text-finesseBlue mt-2">Active Client</p>
            </div>
            <hr className="h-full border border-finesseBlue/70" />
            <div className="">
                <h1 className="text-3xl font-semibold text-finesseBlue">2.6k</h1>
                <p className="text-finesseBlue mt-2">Happy Clients</p>
            </div>
            <hr className="h-full border border-finesseBlue/70" />
            <div className="">
                <h1 className="text-3xl font-semibold text-finesseBlue">5.1k</h1>
                <p className="text-finesseBlue mt-2">Project Completed</p>
            </div>
        </div>
    </div>
  )
}

export default StatsSection