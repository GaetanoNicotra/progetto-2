

const Feature = () => {
    return (
        <section className='bg-slate-50 py-24 sm:py-32 mt-15'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
                <h2 className='text-base font-semibold leading-7 text-indigo-600 mb-3'>Everything you need</h2>
                <p className="text-4xl font-bold">Powerful features for modern apps</p>
                <p className="mt-5 text-gray-500 leading-8">Quis tellus eget adipiscing convallis sit sit eget aliquent quis. Suspendisse eget egestas a elementu, pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
            </div>

            {/* icone */}
            <div className="mx-auto mt-16 max-w-xl sm:mt-2 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 ">
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-indigo-600">
                                <img className="size-6" src="logo.svg" alt="logo" />
                            </div>
                            Lightning Fast
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                            <p className="flex-auto">Optimized for speed with zero runtime overhead. Your site loads instantly.</p>
                        </dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-indigo-600">
                                <img className="size-6" src="logo.svg" alt="logo" />
                            </div>
                            Secure by Default
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                            <p className="flex-auto">Built-in security features to protect your data and your users.</p>
                        </dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-indigo-600">
                                <img className="size-6" src="logo.svg" alt="logo" />
                            </div>
                            Mobile First
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                            <p className="flex-auto">Responsive design patterns that look great on any device size.</p>
                        </dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-indigo-600">
                                <img className="size-6" src="logo.svg" alt="logo" />
                            </div>
                            Modern Layouts
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                            <p className="flex-auto">Flexbox and Grid systems made easy with utility classes.</p>
                        </dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-indigo-600">
                                <img className="size-6" src="logo.svg" alt="logo" />
                            </div>
                            Customizable Theme
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                            <p className="flex-auto">Easily extend the default design system to match your brand.</p>
                        </dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-indigo-600">
                                <img className="size-6" src="logo.svg" alt="logo" />
                            </div>
                            Developer Friendly
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                            <p className="flex-auto">Intellisense support and type safety for a better coding experience.</p>
                        </dd>
                    </div>

                </dl>
            </div>
        </section>
    )
}

export default Feature
