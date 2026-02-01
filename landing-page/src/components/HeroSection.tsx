
const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt245 lg:pb-28">

            {/* mini banner */}
            <div className="text-center mt-10">
                <span className="text-slate-600 font-medium rounded-2xl bg-gray-50 border border-slate-100 px-4 py-1.5 shadow-sm"><b className="text-indigo-600">NEW</b> Tailwind CSS Showcase v2.0 is here ➡️</span>
            </div>

            {/* subtitle */}
            <div className="text-center mt-10">
                <h1 className="text-7xl font-bold">Build modern websities with <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">Speed and precision</span></h1>

                <h4 className="text-gray-500 mt-8 text-xl leading-8" >A complete showcase of common web design patterns built with Tailwind CSS. <br /> Clean, responsive, and accesible components ready for your next project.</h4>
            </div>

            {/* buttons */}
            <div className="mt-10 flex justify-center gap-4">
                <button className="px-5 py-3 bg-indigo-600 rounded-xl text-white hover:bg-indigo-500 delay-150 hover:cursor-pointer">
                    Start Building
                </button>

                <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 delay-150 hover:text-indigo-500 hover:cursor-pointer">
                    <img
                        src="github.svg"
                        alt="logo-github"
                        className="w-5 h-5"
                    />
                    <span>View on GitHub</span>
                </button>
            </div>


        </section >
    )
}

export default HeroSection
