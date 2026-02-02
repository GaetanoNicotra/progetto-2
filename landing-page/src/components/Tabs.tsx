

const Tabs = () => {
    return (
        <div>
            <h4 className="text-center font-bold text-4xl">Interactive Components</h4>
            <p className="text-gray-500 text-lg text-center mt-5">Smooth transitions and state management for delightful user interfaces.</p>

            <div className="flex justify-center items-center bg-slate-100 gap-4 mt-5 ">
                <button className="py-2 px-20 rounded-lg font-medium ring-white ring-offset-2 ring-opacity-60 ring-offset-indigo-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-out cursor-pointer  text-indigo-600 shadow-sm"><i className="fa-solid fa-layer-group"></i>Design</button>
                <button className="py-2 px-20 rounded-lg font-medium ring-white ring-offset-2 ring-opacity-60 ring-offset-indigo-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-out cursor-pointer text-slate-500 hover:bg-white hover:text-slate-700"><i className="fa-solid fa-code"></i>Development</button>
                <button className="py-2 px-20 rounded-lg font-medium  ring-white ring-offset-2 ring-opacity-60 ring-offset-indigo-400 focus:outline-none focus:ring-2 transition-all duration-200 ease-out cursor-pointer text-slate-500 hover:bg-white hover:text"><i className="fa-solid fa-cube"></i>Deployment</button>
            </div>
        </div >
    )
}

export default Tabs
