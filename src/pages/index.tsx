import SiteHeader from '@/components/siteHeader'
import SearchFilters from "@/components/searchFilters";
import Image from "next/image";


export default function Home() {
    return (
        <div id="app" className="min-h-screen bg-gray-200 antialiased">
            <SiteHeader/>
            <SearchFilters />

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
                                {/*Stars*/}
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