

function Table() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Text and CTA */}
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                            Team Members
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            A list of all the users in your account including their name,
                            title, email and role.
                        </p>
                    </div>

                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Add user
                        </button>
                    </div>
                </div>

                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-slate-300">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                                            >
                                                <a href="#" className="group inline-flex">
                                                    Name
                                                    <span className="ml-2 flex-none rounded bg-slate-200 text-slate-900 group-hover:bg-slate-300">
                                                    </span>
                                                </a>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                                            >
                                                Role
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                                            >
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                                                Lindsay Walton
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Front-end Developer
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                lindsay.walton@example.com
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Member
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-green-50 text-green-700 ring-green-600/20">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a
                                                    href="#"
                                                    className="text-slate-400 hover:text-indigo-600"
                                                >

                                                    <span className="sr-only">Edit</span>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                                                Courtney Henry
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Designer
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                courtney.henry@example.com
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Admin
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-green-50 text-green-700 ring-green-600/20">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a
                                                    href="#"
                                                    className="text-slate-400 hover:text-indigo-600"
                                                >

                                                    <span className="sr-only">Edit</span>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                                                Tom Cook
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Director of Product
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                tom.cook@example.com
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Member
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-slate-50 text-slate-600 ring-slate-500/20">
                                                    Offline
                                                </span>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a
                                                    href="#"
                                                    className="text-slate-400 hover:text-indigo-600"
                                                >

                                                    <span className="sr-only">Edit</span>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                                                Whitney Francis
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Copywriter
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                whitney.francis@example.com
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Admin
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-green-50 text-green-700 ring-green-600/20">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a
                                                    href="#"
                                                    className="text-slate-400 hover:text-indigo-600"
                                                >

                                                    <span className="sr-only">Edit</span>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                                                Leonard Krasner
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Senior Designer
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                leonard.krasner@example.com
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                Owner
                                            </td>
                                            <td className="whitespace-nowrap text-sm px-3 py-4 text-slate-500">
                                                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-green-50 text-green-700 ring-green-600/20">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a
                                                    href="#"
                                                    className="text-slate-400 hover:text-indigo-600"
                                                >

                                                    <span className="sr-only">Edit</span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Table };