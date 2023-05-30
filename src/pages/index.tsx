import Header from '../components/header'
import Image from "next/image";


export default function Home() {
    return (
        <div id="app" className="min-h-screen bg-gray-200 antialiased">
            <Header/>
            <section className="flex justify-between bg-gray-800 px-4 py-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        {/* Search icon */}
                        <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                        </svg>
                    </div>
                    <input className="bg-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 text-white rounded-lg pl-10 pr-3 py-2" placeholder="Search by keywords"/>
                </div>
                <button className="inline-flex items-center bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pr-4 pl-3">
                    <svg className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
                    </svg>
                    <span className="ml-1 text-white font-medium">Filters</span>
                </button>
            </section>

            <main className="px-4 py-6">
                <h3 className="text-gray-900 text-xl">Los Angeles</h3>
                <p className="text-gray-600">Live like a stars in this luxurious Southern Californian estates.</p>

                {/*Image and description*/}
                <div className="mt-6">
                    <div>
                        <img className="rounded-lg shadow-md h-64"
                             src="/images/villa.jpg" alt="House"
                             width={350}
                             height={350}/>
                    </div>

                    {/*Description card*/}
                    <div className="relative px-4 -mt-16">
                        <div className="bg-white rounded-lg shadow-lg px-4 py-4">
                            <div className="flex">
                                <span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 font-semibold rounded-full uppercase tracking-wide text-xs" >Plus</span>
                                <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                                    3 beds &bull; 2 baths
                                </div>
                            </div>
                            <h4 className="mt-1 text-gray-900 font-semibold text-lg">Modern house in the city center</h4>
                            <div className="mt-1">
                                <span className="text-gray-900">$1,400</span>
                                <span className="ml-1 text-sm text-gray-600">/wk</span>
                            </div>

                            <div className="mt-2 flex items-center text-sm text-gray-600">
                                <svg className="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg>
                                <svg className="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg>
                                <svg className="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg>
                                <svg className="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg>
                                <svg className="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg>

                                <span className="ml-2">34 Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}