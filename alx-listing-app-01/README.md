# ALX Listing App

A responsive property listing page built with **Next.js**, **TypeScript**, and **Tailwind CSS**. The application displays luxury properties with filtering, a hero section, and a clean, user-friendly layout.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
  - [Technical](#technical-requirements)
  - [Functional](#functional-requirements)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Implementation Guide](#implementation-guide)
  - [1. Project Setup](#1-project-setup)
  - [2. Data Management](#2-data-management)
  - [3. Component Implementation](#3-component-implementation)
  - [4. Page Layout](#4-page-layout)
  - [5. Hero Section](#5-hero-section)
  - [6. Filter Section](#6-filter-section)
  - [7. Listing Section](#7-listing-section)
- [Best Practices](#best-practices)
- [Expected Outcomes](#expected-outcomes)

---

## Project Overview

This project is a responsive property listing page that adapts to all screen sizes. It features a hero section, filterable property listings, and a consistent layout with reusable components.

---

## Learning Objectives

- Apply responsive web design with Tailwind CSS
- Create reusable React components for layout
- Use TypeScript interfaces for type safety
- Structure a Next.js application
- Render dynamic data from arrays
- Implement filtering functionality
- Break down UI mockups into logical components

---

## Requirements

### Technical Requirements

- **Framework:** Next.js (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Component Structure:** Logical folder hierarchy
- **Type Safety:** Typed components and props

### Functional Requirements

- **Header:** Navigation, logo, search, accommodation types
- **Footer:** Relevant links and information
- **Layout:** Consistent wrapper for all pages
- **Hero Section:** Background image, call-to-action text
- **Filter Section:** Clickable filter pills
- **Property Listings:** Responsive grid, property cards with image, name, price, rating

---

## Project Structure

```
alx-listing-app-00/
├── components/
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── constants/
│   └── index.ts
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   └── index.tsx
├── styles/
│   └── globals.css
└── README.md
```

---

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/alx-listing-app-00.git
   cd alx-listing-app-00
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

---

## Implementation Guide

### 1. Project Setup

- Duplicate the `alx-listing-app` repository and rename it to `alx-listing-app-00`.
- Create the folder structure as shown above.

### 2. Data Management

- In `constants/index.ts`, export a constant `PROPERTYLISTINGSAMPLE` as an array of property data (see below for sample structure).
- In `interfaces/index.ts`, define a `PropertyProps` interface for property data.

### 3. Component Implementation

- **Header:** `components/layout/Header.tsx`  
  Includes logo, navigation, search bar, sign in/up, and accommodation types.
- **Footer:** `components/layout/Footer.tsx`  
  Contains relevant links and information.
- **Layout:** `components/layout/Layout.tsx`  
  Wraps header, footer, and main content.

  ```typescript
  // components/layout/Layout.tsx
  import Header from "./Header";
  import Footer from "./Footer";

  const Layout: React.FC = ({ children }) => (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );

  export default Layout;
  ```

### 4. Page Layout

- In `pages/_app.tsx`, wrap all pages with the `Layout` component:

  ```typescript
  // pages/_app.tsx
  import Layout from "@/components/layout/Layout";
  import "@/styles/globals.css";
  import type { AppProps } from "next/app";

  export default function App({ Component, pageProps }: AppProps) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
  ```

### 5. Hero Section

- In `pages/index.tsx`, add a hero section with a background image and headings:
  - “Find your favorite place here!”
  - “The best prices for over 2 million properties worldwide.”
- Import your background image from `constants` before using it.

### 6. Filter Section

- Implement a filter section with predefined filters (e.g., Top Villa, Self Checkin).
- Create a `Pill` component that renders clickable filter pills.
- Map over an array of filter labels to display them.

### 7. Listing Section

- In `pages/index.tsx`, map over `PROPERTYLISTINGSAMPLE` to render property cards.
- Each card should show the image, name, price, and rating.

---

## Best Practices

- **Component Organization:**  
  Use a consistent folder structure. Keep components small and focused.
- **Styling:**  
  Use Tailwind utility classes. Implement mobile-first responsive design.
- **TypeScript:**  
  Define clear interfaces for all props. Type all components and functions.
- **Performance:**  
  Optimize images, use loading states, and consider lazy loading.
- **Accessibility:**  
  Use semantic HTML, proper contrast, alt text for images, and keyboard navigation.

---

## Expected Outcomes

- Fully responsive property listing page
- Clean, maintainable code with TypeScript
- Reusable layout components
- Properly structured property data
- Functional filter components
- Visually appealing, consistent UI

---

## Sample Property Data Structure

```typescript
// constants/index.ts
export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image2.jpg",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image3.jpg",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image4.jpg",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "https://example.com/image5.jpg",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "https://example.com/image6.jpg",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image7.jpg",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "https://example.com/image8.jpg",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image9.jpg",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image10.jpg",
    discount: "40"
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image11.jpg",
    discount: "50"
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image12.jpg",
    discount: ""
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image13.jpg",
    discount: "35"
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "https://example.com/image14.jpg",
    discount: ""
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image15.jpg",
    discount: "20"
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "https://example.com/image16.jpg",
    discount: "25"
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "https://example.com/image17.jpg",
    discount: "30"
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image18.jpg",
    discount: ""
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "https://example.com/image19.jpg",
    discount: "60"
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image20.jpg",
    discount: ""
  }
];

---

Happy coding!