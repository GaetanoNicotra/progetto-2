const Form = () => {
    return (
        <section className="py-24 bg-slate-50">
            {/* titolo */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-6">
                    <h2 className="text-3xl font-bold">Form components</h2>
                    <p className="text-gray-500 mt-5 text6-lg">Beautifully styled inputs with focus states, validation styles, and icons.</p>
                </div>
            </div>

            {/* form */}

            {/* input */}
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12">
                <form className="space-y-8">
                    <div className="grid-cols-1 grid gap-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <label htmlFor="name" className="block text-sm font-medium leading-6">First name</label>
                            <div className="relative mt-2">
                                <input type="text" name='name' className="w-full block rounded-md border-o py-2 px-10 trext-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Jhon" />
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <label htmlFor="name" className="block text-sm font-medium leading-6">E-mail adress</label>
                            <div className="relative mt-2">
                                <input type="text" name='name' className="w-full block rounded-md border-o py-2 px-10 trext-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Emailexample@ok.com" />
                            </div>
                        </div>

                    </div>

                    {/* select */}
                    <div className="sm:col-span-1">
                        <label htmlFor="name" className="block text-sm font-medium leading-6">Role</label>
                        <div className="relative mt-2">
                            <select name='name' className="w-full rounded-md border-o py-2 px-10 trext-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="">Designer</option>
                                <option value="">Developer</option>
                                <option value="">PM</option>
                                <option value="">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* textarea */}
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="block text-sm font-medium leading-6">Role</label>
                        <div className="relative mt-2">
                            <textarea name="message" id="" placeholder="Talk about your project.." className="w-full shadow-sm ring-1 ring-slate-300 focus:ring-2 focus:ring-indigo-600 rounded-xl p-3"></textarea>
                        </div>
                    </div>

                    {/* checkbox */}
                    <div>
                        <label htmlFor="" className="block font-semibold mb-4">Notifications</label>
                        <div className="flex font-center">
                            <input type="checkbox" name="check" className="mr-5" />
                            <p className="font-semibold"> Comments</p>

                        </div>
                        <div className="text-gray-500 ml-8">Get notified when someones posts a comment on a posting.</div>
                    </div>

                    {/* radio button */}
                    <div className="">
                        <label htmlFor="" className="block font-medium leading-6">Push Notification</label>

                        <input className="block" type="radio" name="" id="" />
                        <input type="radio" name="" id="" />


                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form
