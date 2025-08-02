// components/ui/PropertyCard.tsx
import React from 'react';
import { PropertyProps } from '@/interfaces';

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FBBF24"/>
              <stop offset="50%" stopColor="#E5E7EB"/>
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/400x300?text=Property+Image';
          }}
        />
        {property.discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {property.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {property.name}
        </h3>
        
        <div className="text-sm text-gray-600 mb-2">
          {property.address.city}, {property.address.state}, {property.address.country}
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(property.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {property.rating.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {cat}
            </span>
          ))}
          {property.category.length > 2 && (
            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
              +{property.category.length - 2} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-4">
            <span>{property.offers.bed} bed{property.offers.bed !== '1' ? 's' : ''}</span>
            <span>{property.offers.shower} bath{property.offers.shower !== '1' ? 's' : ''}</span>
            <span>{property.offers.occupants} guests</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            {formatPrice(property.price)}
            <span className="text-sm font-normal text-gray-600">/night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;