
const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt245 lg:pb-28">
            {/* mini banner */}
            <div className="text-center mt-10">
                <span className="text-slate-600 font-medium rounded-2xl bg-gray-50 border border-slate-100 px-4 py-1.5 shadow-sm"><b className="text-indigo-600">NEW</b> Tailwind CSS Showcase v2.0 is here ➡️</span>
            </div>

            <div className="text-center mt-10">
                <h1 className="text-7xl font-bold">Build modern websities with <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">Speed and precision</span></h1>

                <h4 className="text-gray-500 mt-8 text-xl" >A complete showcase of common web design patterns built with Tailwind CSS. <br /> Clean, responsive, and accesible components ready for your next project.</h4>
            </div>

            {/* buttons */}
            <div className="text-center mt-10">
                <button className="px-5 py-3 bg-indigo-600 rounded-xl text-white">Start Building</button>
                <button className="px-5 py-3"><img src="github.svg" alt="logo-gitHub" />View on GitHub</button>
            </div>
        </section>
    )
}

export default HeroSection
