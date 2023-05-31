import {useState} from "react";

export default function SearchFilters() {
    let [isOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <section className="bg-gray-800">
            <div className="flex justify-between bg-gray-800 px-4 py-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        {/* Search icon */}
                        <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                        </svg>
                    </div>
                    <input
                        className="w-full bg-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 text-white rounded-lg pl-10 pr-3 py-2"
                        placeholder="Search by keywords"/>
                </div>
                <button type="button" onClick={toggle} className="ml-4 inline-flex items-center bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pr-4 pl-3">
                    {/*Filter icon*/}
                    <svg className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
                    </svg>
                    <span className="ml-1 text-white font-medium">Filters</span>
                </button>
            </div>

            {isOpen ? (
                <form>
                    <fieldset className="px-4 py-4 border-t border-gray-900 sm:flex sm:-mx-2">
                        <div className="flex -mx-2 sm:w-1/2 sm:mx-0">
                            <label className="block w-1/2 px-2">
                                <span className="text-sm font-semibold text-gray-500">Bedrooms</span>
                                <select
                                    className="mt-1 form-select block bg-gray-700 hover:bg-gray-600 shadow border-none text-white rounded-lg w-full">
                                    <option>4</option>
                                </select>
                            </label>
                            <label className="block w-1/2 px-2">
                                <span className="text-sm font-semibold text-gray-500">Bathrooms</span>
                                <select
                                    className="mt-1 form-select block bg-gray-700 hover:bg-gray-600 shadow border-none text-white rounded-lg w-full">
                                    <option>2</option>
                                </select>
                            </label>
                        </div>

                        <div className="mt-4 sm:w-1/2 sm:mt-0 sm:px-2">
                            <label>
                                <span className="text-sm font-semibold text-gray-500">Price range</span>
                                <select className="mt-1 form-select block w-full bg-gray-700 hover:bg-gray-600 shadow border-none text-white rounded-lg">
                                    <option>Up to $2,000/wk</option>
                                </select>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="px-4 py-4 border-t border-gray-900">
                        <div className="sm:flex">
                            <span className="block text-sm font-semibold text-gray-500">Property Type</span>
                            <label className="mt-3 sm:px-2 flex items-center">
                                <input type="radio" name="propertyType" value="house"
                                       className="h-5 w-5 form-radio bg-gray-900 text-indigo-500 focus:ring-indigo-500 border-none bg-gray-700"/>
                                <span className="ml-2 text-white">House</span>
                            </label>
                            <label className="mt-3 sm:px-2 flex items-center">
                                <input type="radio" name="propertyType" value="apartment"
                                       className="h-5 w-5 form-radio bg-gray-900 text-indigo-500 focus:ring-indigo-500 border-none bg-gray-700"/>
                                <span className="ml-2 text-white">Apartment</span>
                            </label>
                            <label className="mt-3 sm:px-2 flex items-center">
                                <input type="radio" name="propertyType" value="loft"
                                       className="h-5 w-5 form-radio bg-gray-900 text-indigo-500 focus:ring-indigo-500 border-none bg-gray-700"/>
                                <span className="ml-2 text-white">Loft</span>
                            </label>
                            <label className="mt-3 sm:px-2 flex items-center">
                                <input type="radio" name="propertyType" value="townhouse"
                                       className="h-5 w-5 form-radio bg-gray-900 text-indigo-500 focus:ring-indigo-500 border-none bg-gray-700"/>
                                <span className="ml-2 text-white">Townhouse</span>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="px-4 py-4 border-t border-gray-900">
                        <span className="block text-sm font-semibold text-gray-500">Amenities</span>
                        <label className="mt-3 flex items-center">
                            <input
                                className="form-checkbox h-5 w-5 bg-gray-900 text-indigo-500 border-none bg-gray-700 rounded-lg"
                                type="checkbox" name="balcony"/>
                            <span className="ml-2 text-white">Balcony</span>
                        </label>
                        <label className="mt-3 flex items-center">
                            <input
                                className="form-checkbox h-5 w-5 bg-gray-900 text-indigo-500 border-none bg-gray-700 rounded-lg"
                                type="checkbox" name="airConditioning"/>
                            <span className="ml-2 text-white">Air conditioning</span>
                        </label>
                        <label className="mt-3 flex items-center">
                            <input
                                className="form-checkbox h-5 w-5 bg-gray-900 text-indigo-500 border-none bg-gray-700 rounded-lg"
                                type="checkbox" name="pool"/>
                            <span className="ml-2 text-white">Pool</span>
                        </label>
                        <label className="mt-3 flex items-center">
                            <input
                                className="form-checkbox h-5 w-5 bg-gray-900 text-indigo-500 border-none bg-gray-700 rounded-lg"
                                type="checkbox" name="beach"/>
                            <span className="ml-2 text-white">Beach</span>
                        </label>
                        <label className="mt-3 flex items-center">
                            <input
                                className="form-checkbox h-5 w-5 bg-gray-900 text-indigo-500 border-none bg-gray-700 rounded-lg"
                                type="checkbox" name="petFriendly"/>
                            <span className="ml-2 text-white">Pet friendly</span>
                        </label>
                        <label className="mt-3 flex items-center">
                            <input
                                className="form-checkbox h-5 w-5 bg-gray-900 text-indigo-500 border-none bg-gray-700 rounded-lg"
                                type="checkbox" name="kidFriendly"/>
                            <span className="ml-2 text-white">Kid friendly</span>
                        </label>
                        <label className="mt-3 flex items-center">
                            <input
                                className="form-checkbox h-5 w-5 bg-gray-900 text-indigo-500 border-none bg-gray-700 rounded-lg"
                                type="checkbox" name="parking"/>
                            <span className="ml-2 text-white">Parking</span>
                        </label>
                    </fieldset>
                    <div className="bg-gray-900 px-4 py-4">
                        <button
                            className="block w-full px-4 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-400 rounded-lg">Update
                            results
                        </button>
                    </div>
                </form>
            ) : null}
        </section>
    );
}