import React, { useState } from 'react';
import { Star, Heart, Share, MapPin, Users, Bed, Bath, Wifi, Mountain, Waves, ChefHat, Utensils, Sparkles, Coffee, Flame } from 'lucide-react';



const PropertyDetail: React.FC<{ property: any }> = ({ property }) => {
    const [activeTab, setActiveTab] = useState('description');

    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'amenities', label: 'What we offer' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'host', label: 'About host' }
    ];

    const amenities = [
        { name: "Mountain view", icon: Mountain },
        { name: "Shared beach access", icon: Waves },
        { name: "Chef", icon: ChefHat },
        { name: "Butler", icon: Utensils },
        { name: "Cleaning available during stay", icon: Sparkles },
        { name: "Bartender", icon: Coffee },
        { name: "Pool - infinity", icon: Waves },
        { name: "Hot tub", icon: Flame },
        { name: "Kitchen", icon: Utensils },
        { name: "Wifi", icon: Wifi }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div className="space-y-6">
                        {/* Property Basic Info */}
                        <div className="flex items-center space-x-6 text-sm pb-6 border-b">
                            <div className="flex items-center">
                                <Bed className="w-4 h-4 mr-2" />
                                <span>{property.offers.bed} Bedrooms</span>
                            </div>
                            <div className="flex items-center">
                                <Bath className="w-4 h-4 mr-2" />
                                <span>{property.offers.shower} Bathroom</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                <span>{property.offers.occupants} guests</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Feel like exploring the Dominican? Start the day with a hike on one of Playa Morón's
                                many trails. Weave your way around the gated community to find secluded sandy coves
                                for swimming and paddleboarding. When you'Feel like exploring the Dominican? Start the
                                day with a hike on one of Playa Morón's many trails. Weave your way around the gated
                                community to find secluded sandy coves for swimming and paddleboarding. When you're
                                ready to chill with friends, the beach house pool awaits. Spend the night entertaining
                                in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views.
                            </p>

                            <div className="mt-6">
                                <h3 className="font-semibold text-lg mb-3">The space</h3>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><span className="font-medium">BEDROOM & BATHROOM</span></p>
                                    <p>• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Desk, Balcony, Ocean view</p>
                                </div>
                                <button className="text-emerald-600 font-medium text-sm mt-3 hover:underline">
                                    Read more →
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'amenities':
                return (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
                        <p className="text-gray-700 mb-6">Each home is fully equipped to meet your needs, with ample space and privacy.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {amenities.map((amenity, index) => {
                                const IconComponent = amenity.icon;
                                return (
                                    <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                                        <IconComponent className="w-5 h-5 text-gray-600" />
                                        <span className="text-gray-800">{amenity.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );

            case 'reviews':
                return (
                    <div className="text-gray-500">
                        <p>Reviews are shown in the ReviewSection below</p>
                    </div>
                );

            case 'host':
                return (
                    <div className="text-gray-500">
                        <p>About host content coming soon...</p>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="space-y-8">
            {/* Property Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                            <span className="font-medium">{property.rating}</span>
                            <span className="ml-1">( 345 reviews )</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{property.address.state}, {property.address.city}, {property.address.country}</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span>Mainstream</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-sm hover:bg-gray-50 px-3 py-2 rounded-lg">
                        <Heart className="w-4 h-4" />
                        <span>Save</span>
                    </button>
                    <button className="flex items-center space-x-2 text-sm hover:bg-gray-50 px-3 py-2 rounded-lg">
                        <Share className="w-4 h-4" />
                        <span>Share</span>
                    </button>
                </div>
            </div>

            {/* Image Gallery - Using YOUR property.image */}
            <div className="grid grid-cols-4 gap-2 h-96 rounded-xl overflow-hidden">
                <div className="col-span-2 row-span-2">
                    <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop";
                        }}
                    />
                </div>
                <div className="col-span-1">
                    <img
                        src={property.image}
                        alt={`${property.name} view 2`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop";
                        }}
                    />
                </div>
                <div className="col-span-1">
                    <img
                        src={property.image}
                        alt={`${property.name} view 3`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop";
                        }}
                    />
                </div>
                <div className="col-span-1">
                    <img
                        src={property.image}
                        alt={`${property.name} view 4`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop";
                        }}
                    />
                </div>
                <div className="col-span-1 relative">
                    <img
                        src={property.image}
                        alt={`${property.name} view 5`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=400&h=300&fit=crop";
                        }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <button className="text-white text-sm font-medium">Show all photos</button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                    ? 'border-gray-900 text-gray-900'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
                <div className="text-right text-sm text-gray-500 mt-2 mb-6">
                    Published July 01, 2024
                </div>
            </div>

            {/* Tab Content */}
            <div className="pb-8">
                {renderTabContent()}
            </div>
        </div>
    );
};


export default PropertyDetail;