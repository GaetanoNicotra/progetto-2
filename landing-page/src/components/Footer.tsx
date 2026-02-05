
const Footer = () => {
    return (
        <footer className="bg-slate-900 ">
            {/* per screen reader */}
            <h2 className="sr-only">Footer</h2>

            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="space-y-8">
                    <div className="flex gap-2 p-2">

                        <ul className="flex justify-between gap-12 w-full">

                            <li>
                                <ul>
                                    <li>
                                        <ul className="flex items-center mb-5">
                                            <li><img className='bg-indigo-600 rounded-xl p-2 mr-3' src="/public/logo.svg" alt="logo-navbar" /></li>
                                            <li className="text-xl font-bold text-white">TailwindShowcase</li>
                                        </ul>
                                    </li>

                                    <li className="text-gray-500 text-sm mb-5">Making the world a better place through constructing elegant hierarchies.</li>

                                    <li className="text-white text-2xl"><i className="fa-brands fa-facebook mr-3"></i><i className="fa-brands fa-linkedin mr-3"></i><i className="fa-brands fa-twitter mr-3"></i><i className="fa-brands fa-github mr-3"></i></li>
                                </ul>
                            </li>

                            <li>
                                <ul className="text-white leading-10">
                                    <li className="font-bold mb-4">Solutions </li>
                                    <li>Marketing</li>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Insights</li>
                                </ul>
                            </li>

                            <li>
                                <ul className="text-white leading-10">
                                    <li className="font-bold mb-4">Support</li>
                                    <li>Pricing</li>
                                    <li>Documentation</li>
                                    <li>Guides</li>
                                    <li>API Status</li>
                                </ul>
                            </li>

                            <li>
                                <ul className="text-white leading-10">
                                    <li className="font-bold mb-4">Company</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Jobs</li>
                                    <li>Press</li>
                                    <li>Partners</li>
                                </ul>
                            </li>

                            <li>
                                <ul className="text-white leading-10">
                                    <li className="font-bold mb-4">Legal </li>
                                    <li>Claim</li>
                                    <li>Privacy</li>
                                    <li>Terms</li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                    {/* Copywriter */}
                    <hr className="text-gray-500" />

                    <div>
                        <ul className="flex justify-between">

                            <li className="text-gray-600">© 2024 TailwindShowcase, Inc. All rights reserved.</li>

                            <li>
                                <input type="email" className="bg-gray-800 px-3 py-1.5 mr-3 rounded" placeholder="Enter your Email" />
                                <button className="bg-indigo-500 px-3 py-1.5 rounded text-white font-semibold">Subscribe</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
