"use client";

import { ProductType } from '@/types';
import React from 'react'
const ProductCard = ({product}:{product:ProductType}) => {
  return (
    <div className="mt-10">
        <h2>{product.name}</h2>
        <div>{product.shortDescription}</div>
    </div>
  )
}
export default ProductCard
