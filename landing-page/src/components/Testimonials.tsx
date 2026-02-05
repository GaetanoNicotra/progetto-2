

const Testimonials = () => {
    return (
        <section className="bg-white py-24 sm:py-32" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* testi */}
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
                    <p className="text-5xl font-bold mt-3">We have worked with thousands of amazing people</p>
                </div>

                {/* card recensioni */}
                <div className="isolate mx-auto mt-16 max-w-md grid-cols-1 gap-y-8 grid sm:mt-20 lg:max-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    <div className="ring-1 ring-slate-200 rounded-3xl bg-white p-8 xl:p-10 shadow-sm">
                        <p className="font-semibold text-yellow-500"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                        <p className="text-gray-500 mt-5 text-md mb-5">"Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."</p>
                        <div className="flex gap-3 items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-600"></div>
                            <div>
                                <p className="font-bold">Leslie Alexander</p>
                                <p>Co-Founder / CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="ring-1 ring-slate-200 rounded-3xl bg-white p-8 xl:p-10 shadow-sm">
                        <p className="font-semibold text-yellow-500"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                        <p className="text-gray-500 mt-5 text-md mb-5">"Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."</p>
                        <div className="flex gap-3 items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-600"></div>
                            <div>
                                <p className="font-bold">Michael Foster</p>
                                <p>CTO</p>
                            </div>
                        </div>
                    </div>
                    <div className="ring-1 ring-slate-200 rounded-3xl bg-white p-8 xl:p-10 shadow-sm">
                        <p className="font-semibold text-yellow-500"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                        <p className="text-gray-500 mt-5 text-md mb-5">"Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."</p>
                        <div className="flex gap-3 items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-600"></div>
                            <div>
                                <p className="font-bold">Dries Vincent</p>
                                <p>Product Manager</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Testimonials
