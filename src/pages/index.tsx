import Image from "next/image";

import SiteHeader from '@/components/siteHeader'
import SearchFilters from "@/components/searchFilters";
import PropertyCard from "@/components/propertyCard";


export default function Home() {
    return (
        <div id="app" className="min-h-screen bg-gray-200 antialiased">
            <SiteHeader/>
            <SearchFilters />

            <main className="py-6">
                <div className="px-4">
                    <h3 className="text-gray-900 text-xl">Los Angeles</h3>
                    <p className="text-gray-600">Live like a stars in this luxurious Southern Californian estates.</p>
                </div>
                <div className="mt-6 sm:flex sm:-mx-2 sm:overflow-x-auto sm:pb-8">
                    <PropertyCard/>
                    <PropertyCard/>
                    <PropertyCard/>
                    <PropertyCard/>
                </div>


            </main>
        </div>
    );
}