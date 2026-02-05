const Table = () => {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h2 className="font-bold text-4xl mb-3">Team Members</h2>
                        <p className="text-gray-600 text-sm">A list of all the users in your account including their name, title, email and role.</p>
                    </div>

                    {/* button */}
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:indigo-600">Add User</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Table
