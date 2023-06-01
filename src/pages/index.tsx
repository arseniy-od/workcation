import Head from 'next/head'
import Image from "next/image";

import SiteHeader from '@/components/siteHeader'
import SearchFilters from "@/components/searchFilters";
import PropertyCard from "@/components/propertyCard";


export default function Home() {

    const properties = [
        {imageUrl: '/images/villa.jpg', text: 'Modern house in the city center', beds: 3, baths: 2, reviewCount: 34, price: 1400, rating: 5},
        {imageUrl: '/images/house1.jpg', text: 'Cool house in the city center', beds: 17, baths: 25, reviewCount: 17, price: 20, rating: 3},
        {imageUrl: '/images/house2.jpg', text: 'New house in the city center', beds: 1, baths: 1, reviewCount: 3, price: 100500, rating: 4},
        {imageUrl: '/images/house3.jpg', text: 'Beautiful house in the city center', beds: 98, baths: 21, reviewCount: 345, price: 777, rating: 1}
        ];

    return (
        <div id="app" className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
            <Head>
                <title>Workcation</title>
            </Head>

            <SiteHeader />

            <div className="xl:flex xl:flex-1 xl:overflow-x-hidden xl:overflow-y-hidden">
                <SearchFilters/>

                <div className="overflow-y-auto xl:flex-1">
                    <main className="py-6">
                        <div className="px-4">
                            <h3 className="text-gray-900 text-xl">Los Angeles</h3>
                            <p className="text-gray-600">Live like a stars in this luxurious Southern Californian
                                estates.</p>
                        </div>
                        <div className="mt-6 sm:overflow-x-auto ">
                            <div className="px-4 sm:inline-flex sm:-mx-2 sm:pb-8">
                                {properties.map((property, i) => <PropertyCard property={property} key={i}/>)}

                            </div>
                        </div>

                    </main>

                    <main className="py-6">
                        <div className="px-4">
                            <h3 className="text-gray-900 text-xl">Phoenix</h3>
                            <p className="text-gray-600">Escape the cold and enjoy weather without rain</p>
                        </div>
                        <div className="mt-6 sm:overflow-x-auto ">
                            <div className="px-4 sm:inline-flex sm:-mx-2 sm:pb-8">
                                {properties.map((property, i) => <PropertyCard property={property} key={i}/>)}

                            </div>
                        </div>

                    </main>
                </div>

            </div>
        </div>
    );
}