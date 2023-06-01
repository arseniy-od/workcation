import {useState} from "react";


export default function SearchFilters() {
    let [isOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen(!isOpen);
    }

    function LabelProperty({ text }) {
        return (
            <label className="mt-3 sm:px-2 flex items-center w-1/4 lg:w-full lg:px-0">
                <input type="radio" name="propertyType" value="house"
                       className="h-5 w-5 form-radio bg-gray-900 text-indigo-500 focus:ring-indigo-500 border-none bg-gray-700"/>
                <span className="ml-2 text-white">{text}</span>
            </label>
        );
    }

    function LabelAmenity ({ text, name }) {
        return (
            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                    className="form-checkbox h-5 w-5 bg-gray-900 text-indigo-500 border-none bg-gray-700 rounded-lg"
                    type="checkbox" name={name}/>
                <span className="ml-2 text-white">{text}</span>
            </label>
        );
    }

    function FiltersForm() {
        return (
            <form className={"xl:flex xl:flex-col xl:justify-between xl:h-full xl:w-72 xl:block" + (isOpen ? " block" : " hidden")}>
                <div className="lg:flex xl:block xl:overflow-y-auto">
                    <fieldset className="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full xl:border-t-0">
                        <div className="flex flex-wrap -mx-2">

                            <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                                <span className="text-sm font-semibold text-gray-500">Bedrooms</span>
                                <select
                                    className="mt-1 form-select block bg-gray-700 hover:bg-gray-600 shadow border-none text-white rounded-lg w-full">
                                    <option>4</option>
                                </select>
                            </label>

                            <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                                <span className="text-sm font-semibold text-gray-500">Bathrooms</span>
                                <select
                                    className="mt-1 form-select block bg-gray-700 hover:bg-gray-600 shadow border-none text-white rounded-lg w-full">
                                    <option>2</option>
                                </select>
                            </label>

                            <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:w-full lg:mt-4">
                                <span className="text-sm font-semibold text-gray-500">Price range</span>
                                <select
                                    className="mt-1 form-select block w-full bg-gray-700 hover:bg-gray-600 shadow border-none text-white rounded-lg">
                                    <option>Up to $2,000/wk</option>
                                </select>
                            </label>
                        </div>
                    </fieldset>

                    {/*Property type*/}
                    <fieldset className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                        <span className="block text-sm font-semibold text-gray-500">Property Type</span>
                        <div className="sm:flex lg:block">
                            <LabelProperty text="House"/>
                            <LabelProperty text="Apartment"/>
                            <LabelProperty text="Loft"/>
                            <LabelProperty text="Townhouse"/>

                        </div>
                    </fieldset>

                    {/*Amenities*/}
                    <fieldset className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">

                        <span className="block text-sm font-semibold text-gray-500">Amenities</span>
                        <div className="sm:flex sm:-mx-2 sm:flex-wrap">
                            <LabelAmenity text="Balcony" name="balcony"/>
                            <LabelAmenity text="Pool" name="pool"/>
                            <LabelAmenity text="Beach" name="beach"/>
                            <LabelAmenity text="Pet friendly" name="petFriendly"/>
                            <LabelAmenity text="Kid friendly" name="kidFriendly"/>
                            <LabelAmenity text="Parking" name="parking"/>

                            {/*This label is bigger than others*/}
                            <label className="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full">
                                <input
                                    className="form-checkbox h-5 w-5 bg-gray-900 text-indigo-500 border-none bg-gray-700 rounded-lg"
                                    type="checkbox" name="airConditioning"/>
                                <span className="ml-2 text-white">Air conditioning</span>
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className="bg-gray-900 px-4 py-4 sm:text-right">
                    <button className="block w-full px-4 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-400 rounded-lg sm:w-auto sm:inline-block xl:block xl:w-full">
                        Update results
                    </button>
                </div>
            </form>
        );
    }

    return (
        <section className="bg-gray-800 xl:w-72">

            {/*Search & filter*/}
            <div className="flex justify-between bg-gray-800 px-4 py-3 xl:hidden">

                {/*Search*/}
                <div className="relative w-full max-w-xs">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        {/* Search icon */}
                        <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                        </svg>
                    </div>
                    <input
                        className="w-full block bg-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 text-white rounded-lg pl-10 pr-3 py-2"
                        placeholder="Search by keywords"/>
                </div>

                {/*Filter*/}
                <button type="button" onClick={toggle} className="ml-4 inline-flex items-center bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pr-4 pl-3">
                    <svg className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
                    </svg>
                    <span className="ml-1 text-white font-medium">Filters</span>
                </button>

            </div>
                <FiltersForm/>
        </section>
    );
}