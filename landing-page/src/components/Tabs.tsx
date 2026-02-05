

const Tabs = () => {
    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-20">
            <h4 className="text-center font-bold text-4xl">Interactive Components</h4>
            <p className="text-gray-500 text-lg text-center mt-5">Smooth transitions and state management for delightful user interfaces.</p>

            {/* tabs selection */}
            <div className="flex justify-center items-center bg-slate-100 gap-4 mt-5 rounded-xl p-2">
                <button className="bg-white py-2 px-20 rounded-lg font-medium ring-white ring-offset-2 ring-opacity-60 ring-offset-indigo-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-out cursor-pointer text-indigo-600 shadow-sm"><i className="fa-solid fa-layer-group"></i> Design</button>

                <button className="py-2 px-20 rounded-lg font-medium ring-white ring-offset-2 ring-opacity-60 ring-offset-indigo-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-out cursor-pointer text-slate-500 hover:bg-white hover:text-slate-700"><i className="fa-solid fa-code"></i> Development</button>

                <button className="py-2 px-20 rounded-lg font-medium  ring-white ring-offset-2 ring-opacity-60 ring-offset-indigo-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-out cursor-pointer text-slate-500 hover:bg-white hover:text"><i className="fa-solid fa-cube"></i> Deployment</button>
            </div>

            <div className="mt-6 min-h-75 rounded-2xl bg-slate-50 p-8 ring-slate-200">
                <h3 className="text-xl font-semibold text-slate-600">Design System</h3>
                <p className="mt-4 text-slate-600">Our design system is built on a comprehensive set of tokens that ensure consistency across all products. From typography to color palettes, every decision is intentional.</p>
                <div className="flex gap-3 mt-5">
                    <div className="h-20 w-55 bg-indigo-700 rounded-xl relative"><div className="absolute animate-ping h-full w-full rounded-2xl bg-indigo-200"></div></div>
                    <div className="h-20 w-55 bg-indigo-500 rounded-xl"></div>
                    <div className="h-20 w-55 bg-indigo-300 rounded-xl"></div>
                    <div className="h-20 w-55 bg-indigo-100 rounded-xl"></div>
                </div>
            </div>

        </div >
    )
}

export default Tabs
