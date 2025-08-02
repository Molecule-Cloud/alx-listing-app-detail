import { PropertyProps } from "@/interfaces";
import { SAMPLE_REVIEWS } from "@/constants";
import Image from 'next/image'
import { useState } from "react";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";


const PropertyDetail: React.FC <{ property: PropertyProps }>= ({ property }) => {
    const [activeTab, setActiveTab] = useState("Description")
    const tabs = [
        {id: "Desciprtion", label: "Description"},
        {id: "amenities", lavel: "Amenities"},
        {id: "reviews", label: "Reviews"},
        {id: "host", label: "Host"}
    ];



    return (
        <>
        {/* Main Container */}
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold">{property.name}</h1>
            </div>

            <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">{property.rating}</span>
                <span className="">{property.address.city}, {property.address.country}</span>
            </div>
        {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
                <Image 
                    src={property.image} alt={property.name}
                    className="col-span-2 w-full h-96 object-cover rounded-lg">
                </Image>

                <Image 
                    src={property.image} alt={property.name}
                    className="col-span-2 w-full h-96 object-cover rounded-lg">
                </Image>

                <Image 
                    src={property.image} alt={property.name}
                    className="col-span-2 w-full h-96 object-cover rounded-lg">
                </Image>
            </div>
        {/* Description */}
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">Description</h2>
                <p>{property.description}</p>
            </div>
        {/* Amenities */}
            <div className="mt-4">
                <h2 className="text-2xl font-semi-bold">What this place Offers</h2>
                <ul className="flex flex-wrap space-x-4">{property.category.map((amenity, index) => (
                    <li key={index} className="bg-gray-200 p-2 rounded-md">{amenity}</li>
                ))}
                </ul>
            </div>             
        </>
    )
}


export default PropertyDetail;