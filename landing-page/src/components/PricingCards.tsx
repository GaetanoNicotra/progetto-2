
const PricingCards = () => {
    return (
        <section className="bg-slate-50 py-24 sm:py-32 mt-30" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* testi */}
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                    <p className="text-5xl font-bold mt-3">Pricing plans for teams of all sizes</p>
                    <p className="text-lg text-gray-500 mt-5">Choose the perfect plan for your needs. Always know what you'll pay.</p>
                </div>

                {/* card tariffe */}
                <div className="isolate mx-auto mt-16 max-w-md grid-cols-1 gap-y-8 grid sm:mt-20 lg:max-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    <div className="ring-1 ring-slate-200 rounded-3xl bg-white p-8 xl:p-10 shadow-sm">
                        <p className="font-semibold">Basic</p>
                        <p className="text-gray-500 mt-5 text-md mb-5">Everything necessary to get started.</p>
                        <span className="font-bold text-3xl"> $19 <span className="text-gray-500 text-sm">/month</span></span>
                        <div>
                            <button className="rounded-xl text-indigo-600 text-center font-semibold ring-1 px-20 py-2 mt-5 hover:cursor-pointer hover:ring-2">Buy plan</button>
                        </div>
                        <ul className="text-gray-600 text-sm leading-9 mt-8">
                            <li><i className="fa-solid fa-check text-indigo-500"></i> 5 products</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> Up to 1,000 subscribers</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> Basic analytics</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> 48-hour support response</li>
                        </ul>
                    </div>

                    <div className="ring-indigo-600  ring-3 rounded-3xl bg-white p-8 xl:p-10 shadow-sm scale-105 ">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-indigo-600">Essential</p>
                            <p className="text-indigo-500 bg-indigo-100 font-semibold rounded-3xl px-2 py-1.5">Most popular</p>
                        </div>

                        <p className="text-gray-500 mt-5 text-md mb-5">Perfect for growing businesses.</p>
                        <span className="font-bold text-4xl"> $49 <span className="text-gray-500 text-sm">/month</span></span>
                        <div>
                            <button className="rounded-xl text-white bg-indigo-600 text-center font-semibold ring-1 px-20 py-2 mt-5 hover:cursor-pointer hover:ring-2">Buy plan</button>
                        </div>
                        <ul className="text-gray-600 text-sm leading-9 mt-8">
                            <li><i className="fa-solid fa-check text-indigo-500"></i> 5 products</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> Up to 1,000 subscribers</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> Basic analytics</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> 48-hour support response</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> 48-hour support response</li>
                        </ul>
                    </div>

                    <div className="ring-1 ring-slate-200 rounded-3xl bg-white p-8 xl:p-10 shadow-sm">
                        <p className="font-semibold">Growth</p>
                        <p className="text-gray-500 mt-5 text-md mb-5">Advanced features for scaling teams.</p>
                        <span className="font-bold text-3xl"> $99 <span className="text-gray-500 text-sm">/month</span></span>
                        <div>
                            <button className="rounded-xl text-indigo-600 text-center font-semibold ring-1 px-20 py-2 mt-5 hover:cursor-pointer hover:ring-2">Buy plan</button>
                        </div>
                        <ul className="text-gray-600 text-sm leading-9 mt-8">
                            <li><i className="fa-solid fa-check text-indigo-500"></i> 5 products</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> Up to 1,000 subscribers</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> Basic analytics</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> 48-hour support response</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> 48-hour support response</li>
                            <li> <i className="fa-solid fa-check text-indigo-500"></i> 48-hour support response</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingCards
