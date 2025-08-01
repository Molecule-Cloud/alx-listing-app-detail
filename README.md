# Property Detail Page Implementation

## Project Description

This project focuses on implementing a responsive Property Detail Page for a listing application using Next.js and Tailwind CSS. The page dynamically displays comprehensive property information including images, descriptions, amenities, reviews, and a booking section. The implementation follows modern web development practices with reusable components and responsive design principles.

## Learning Objectives

- Implement dynamic routing in Next.js for property detail pages
- Create reusable React components for property display
- Structure a responsive layout using Tailwind CSS
- Manage component state and props effectively
- Implement interactive elements like date pickers and tabs
- Display and organize property data in an intuitive UI
- Follow best practices for component composition

## Requirements

### Dynamic Routing
- Implement `[id].tsx` to handle dynamic property pages

### Component Structure
- **PropertyDetail** - main container component
- **BookingSection** - handles reservation functionality
- **ReviewSection** - displays user feedback

### Responsive Design
- Ensure proper display on all screen sizes

### Data Handling
- Properly type and manage property data

### UI Elements
- Image gallery/grid
- Amenities listing
- Rating display
- Booking form with date selection
- Review cards with user info

## Best Practices

### Component Design
- Single Responsibility Principle for components
- Proper TypeScript typing for props and data
- Reusable UI components

### Styling
- Consistent spacing and typography
- Mobile-first approach
- Proper use of Tailwind utility classes

### Code Organization
- Clear folder structure
- Separation of concerns
- Proper component composition

### Performance
- Optimized image display
- Efficient data handling
- Lazy loading where appropriate

## Implementation Details

### PropertyDetail.tsx
The main container component that:
- Displays property header with name, rating, and location
- Shows an image grid (with main image prominently displayed)
- Contains property description in tabbed format
- Lists amenities with appropriate icons
- Integrates the BookingSection and ReviewSection

### BookingSection.tsx
A fixed-position component that:
- Displays pricing information
- Provides date selection controls
- Calculates and shows total cost
- Includes reservation CTA button

### ReviewSection.tsx
A component that:
- Displays all property reviews
- Shows reviewer avatars and ratings
- Formats review content properly
- Handles pagination if needed

## Expected Outcomes

- A fully responsive property detail page
- Properly structured components that can be reused
- Clean, maintainable code following best practices
- Intuitive user interface with all required functionality
- Proper data handling and typing throughout the application

## Tasks

### 0. Implement Responsive Property Detail Page with Tailwind CSS and Dynamic Components
**Status:** Mandatory

#### Objective
The objective of this milestone is to implement the Property Detail Page based on the provided mockup. You will break the page down into sections, create reusable components, and style the layout using Tailwind CSS. By the end of this task, you will have a fully functional, responsive detail page that showcases the property information, including the description, amenities, reviews, and booking section.

#### Instructions

##### 1. Duplicate the Repository
Duplicate the repository `alx-listing-app-00` and rename it to `alx-listing-app-01`.

##### 2. Folder Structure
Ensure that the following folder structure exists in your project:

```
components/property/PropertyDetail.tsx
components/property/BookingSection.tsx
components/property/ReviewSection.tsx
```

##### 3. Create a Property Detail Page
In `pages/property/[id].tsx`, create a dynamic page to display the details of a property. The `id` will correspond to the property being displayed.

```typescript
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
```

##### 4. Implement the Property Detail Section
Create a `PropertyDetail.tsx` component in `components/property/` that takes a property object and renders the following:

- Property name, rating, location
- A grid of images of the property
- A description of the property (implement this as tabs to include What we offer, Reviews, About host)
- List of amenities and services the property offers
- Booking section on the right, which includes the price, check-in/check-out dates, and total cost

```typescript
import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
        {/* Add more images */}
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
```

##### 5. Create a Booking Section
In `components/property/BookingSection.tsx`, create a functional component that displays:

- The nightly price
- Check-in and check-out date pickers
- A calculation of total payment (nightly rate × number of nights)
- A "Reserve now" button

```typescript
const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" className="border p-2 w-full mt-2" />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" className="border p-2 w-full mt-2" />
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p>Total payment: <strong>${price * 7}</strong></p>
      </div>

      {/* Reserve button */}
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">Reserve now</button>
    </div>
  );
};

export default BookingSection;
```

##### 6. Create a Review Section
In `components/property/ReviewSection.tsx`, implement a review section that:

- Maps over an array of reviews and renders each review with the user's name, rating, and review content
- Reviews should be displayed with the user's profile picture and rating stars

```typescript
const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500">{review.rating} stars</p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
```

##### 7. Modify Layout to Include All Sections
In `pages/property/[id].tsx`, use the PropertyDetail, BookingSection, and ReviewSection components to create a full detail page layout.

Ensure the layout is responsive and adjusts properly for different screen sizes.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser

## Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Components:** React Functional Components
