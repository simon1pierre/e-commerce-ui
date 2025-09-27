import { ProductTypes } from '@/types';
import React from 'react'
import Categories from './Categories';
import ProductCard from './ProductCard';
 const Products: ProductTypes = [
  {
    id: 1,
    name: "Classic Agenda",
    shortDescription: "2025 daily planner with hardcover",
    description: "A durable and stylish agenda for organizing your daily tasks and academic schedule.",
    price: 4000,
    sizes: ["standard"],
    colors: ["blue", "black"],
    images: {
      gray: "/products/agenda-gray.png",
      purple: "/products/agenda-purple.png",
      green: "/products/agenda-green.png",
    },
  },
  {
    id: 2,
    name: "Student Notebook",
    shortDescription: "200-page lined notebook",
    description: "Affordable notebook with smooth pages, perfect for lectures and notes.",
    price: 1500,
    sizes: ["A5", "A4"],
    colors: ["white", "blue"],
    images: {
      gray: "/products/notebook-gray.png",
      purple: "/products/notebook-blue.png",
      green: "/products/notebook-green.png",
    },
  },
  {
    id: 3,
    name: "Blue Ink Pen",
    shortDescription: "Smooth writing ballpoint pen",
    description: "Reliable everyday pen for smooth and long-lasting writing.",
    price: 500,
    sizes: ["standard"],
    colors: ["blue"],
    images: {
      gray: "/products/pen-blue.png",
      purple: "/products/pen-blue.png",
      green: "/products/pen-blue.png",
    },
  },
  {
    id: 4,
    name: "Highlighter Set",
    shortDescription: "Pack of 3 bright highlighters",
    description: "Highlight your notes with vibrant and long-lasting colors.",
    price: 2500,
    sizes: ["pack"],
    colors: ["yellow", "pink", "green"],
    images: {
      gray: "/products/highlighter-yellow.png",
      purple: "/products/highlighter-pink.png",
      green: "/products/highlighter-green.png",
    },
  },
  {
    id: 5,
    name: "Sticky Notes",
    shortDescription: "100-sheet sticky notes pad",
    description: "Compact and colorful sticky notes for quick reminders and bookmarks.",
    price: 1000,
    sizes: ["small", "medium"],
    colors: ["yellow", "pink"],
    images: {
      gray: "/products/stickynotes-yellow.png",
      purple: "/products/stickynotes-pink.png",
      green: "/products/stickynotes-green.png",
    },
  },
  {
    id: 6,
    name: "Premium Leather Agenda",
    shortDescription: "A5 premium leather-look agenda",
    description: "Elegant leather-look agenda with pen loop and premium paper.",
    price: 7500,
    sizes: ["A5"],
    colors: ["black", "brown"],
    images: {
      gray: "/products/agenda-leather-black.png",
      purple: "/products/agenda-leather-brown.png",
      green: "/products/agenda-leather-black.png",
    },
  },
  {
    id: 7,
    name: "Spiral Notebook",
    shortDescription: "50-page spiral notebook",
    description: "Compact spiral-bound notebook, perfect for quick notes.",
    price: 900,
    sizes: ["A5"],
    colors: ["white"],
    images: {
      gray: "/products/notebook-spiral.png",
      purple: "/products/notebook-spiral.png",
      green: "/products/notebook-spiral.png",
    },
  },
  {
    id: 8,
    name: "Mechanical Pencil",
    shortDescription: "0.5mm refillable pencil",
    description: "Durable pencil with refillable leads, perfect for precise writing.",
    price: 700,
    sizes: ["standard"],
    colors: ["black", "grey"],
    images: {
      gray: "/products/mechanical-pencil.png",
      purple: "/products/mechanical-pencil.png",
      green: "/products/mechanical-pencil.png",
    },
  },
  {
    id: 9,
    name: "Colored Gel Pens",
    shortDescription: "Set of 6 colored pens",
    description: "Bright gel pens, great for notes, highlighting, and journaling.",
    price: 1500,
    sizes: ["pack"],
    colors: ["red", "blue", "green", "purple", "orange", "black"],
    images: {
      gray: "/products/gel-pens.png",
      purple: "/products/gel-pens.png",
      green: "/products/gel-pens.png",
    },
  },
  {
    id: 10,
    name: "Desk Planner",
    shortDescription: "Landscape weekly desk agenda",
    description: "Large desk planner with weekly layout and tear-off notes.",
    price: 5600,
    sizes: ["landscape"],
    colors: ["white", "grey"],
    images: {
      gray: "/products/desk-planner-white.png",
      purple: "/products/desk-planner-grey.png",
      green: "/products/desk-planner-white.png",
    },
  },
];

const ProductList = () => {
  return (
    <div className="w-full">
      <Categories/>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
         {Products.map(product=>(
          <ProductCard key={product.id} product={product}></ProductCard>
         ))}
      </div>
    </div>
  )
}
export default ProductList
