// pages/index.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { HERO_BANNER, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import { Pill } from '@/components/common/Pill';
import PropertyCard from '@/components/common/PropertyCard';
import Image from 'next/image';

const Home: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredProperties = activeFilters.length === 0 
    ? PROPERTYLISTINGSAMPLE 
    : PROPERTYLISTINGSAMPLE.filter(property => 
        activeFilters.some(filter => 
          property.category.some(cat => 
            cat.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );

  return (
    <>
      <div className="mt-2 bg-white w-full">
        <ul className="flex flex-row space-x-4 bg-white items-center justify-between  p-2">
          <li>
            <Link href="#">
              <Image src="assets/svgs/rooms.svg" alt="rooms" width={35} height={35} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/mansions.svg" alt="mansions" width={38} height={38} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/lakefront.svg" alt="lakefront" width={40} height={40} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/countryside.svg" alt="countryside" width={50} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/villa.svg" alt="villa" width={30} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/tropical.svg" alt="tropical" width={30} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/new.svg" alt="new" width={25} height={20} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/pool.svg" alt="pool" width={50} height={50} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/beachhouse.svg" alt="beachhouse" width={50} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/island.svg" alt="island" width={30} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/camping.svg" alt="camping" width={40} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/aprtment.svg" alt="apartment" width={45} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/house.svg" alt="house" width={30} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/lakefront.svg" alt="lakefront" width={50} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/farmhouse.svg" alt="farmhouse" width={50} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/treehouse.svg" alt="treehouse" width={50} height={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="assets/svgs/cabins.svg" alt="cabins" width={30} height={30} />
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="p-6 flex flex-col space-y-5">
        <section className="relative h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full px-4">
          <div className="relative h-full w-full rounded-lg overflow-hidden">
            {/* Background Image */}
            <Image
              src={HERO_BANNER}
              alt="Hero Background"
              fill
              priority
              className="object-cover"
              quality={80}
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Text Content (centered) */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
              <h1 className="text-7xl sm:text-4xl md:text-7xl font-bold text-white mb-2 sm:mb-4">
                Find Your Favourite<br />
                Place Here!
              </h1>
              <p className="text-sm sm:text-xl text-white max-w-xs sm:max-w-2xl mb-4 sm:mb-8">
                The best prices for over 2 million properties worldwide
              </p>
              <button className="bg-[#34967C] hover:bg-[#2D7F6A] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-lg font-medium transition">
                Explore Now
              </button>
            </div>
          </div>
        </section>

      {/* Filter Section */}
      <section className=" flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-between">
            {FILTERS.map((filter, index) => (
              <Pill
                key={index}
                label={filter}
                active={activeFilters.includes(filter)}
                onClick={() => toggleFilter(filter)}
              />
            ))}
          </div>
          
          {activeFilters.length > 0 && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setActiveFilters([])}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Listing Section */}
      <section className="">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
            </h2>
            <p className="text-gray-600">
              {activeFilters.length > 0 
                ? `Showing ${filteredProperties.length} properties matching your filters`
                : `Explore our collection of ${PROPERTYLISTINGSAMPLE.length} amazing properties`
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-2a1 1 0 011-1h1a1 1 0 011 1v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}
          
        </div>
      </section>
      </div>

    </>
  );
};

export default Home;