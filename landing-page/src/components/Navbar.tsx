

const Navbar = () => {
    return (
        <nav className="border border-slate-200 p-4 sticky">
            <ul className="flex justify-around items-center">

                {/* logo */}
                <li>
                    <ul className="flex items-center">
                        <li><img className='bg-indigo-600 rounded-xl p-2 mr-3' src="/public/logo.svg" alt="logo-navbar" /></li>
                        <li className="text-xl font-bold text-slate-900">TailwindShowcase</li>
                    </ul>
                </li>


                {/* navigation */}
                <li>
                    <ul className="gap-7 text-gray-500 font-medium hidden sm:flex">
                        <li>Features</li>
                        <li>Components</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </li>


                {/* button */}
                <li><button className="bg-indigo-600 rounded-lg py-2 px-4 text-white font-medium shadow-md focus-visible:outline-2 hover:bg-indigo-500 focus-visible:outline-indigo-600 hidden sm:block">Get Started</button></li>

                {/* hamburger menu */}
                <li className="block sm:hidden">
                    <div className="text-black "> ☰ </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
