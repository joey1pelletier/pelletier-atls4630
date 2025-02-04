import { useState } from 'react'

import './App.css'

import SepButton from './SepButton';

export default function App() {

  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple", id: 1},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit", id: 2},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit", id: 3},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach", id: 4},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin", id: 5},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas", id: 6}
  ];

  // turns array of products into array of li items (essentially what map() does; it transforms arrays of things to arrays of different things)
  const listItems = PRODUCTS.map(product => 
    // the key attribute acts like something to keep track of an index. Comes into play when you insert, delete, or reorder the items
      <li key={product.id}
          style={{
            color: product.stocked ? 'green' : 'red'
          }}
      >
        {product.name}
      </li>
    );

    
  return (
    <>
      <ul>{listItems}</ul>
      <SepButton />
      <SepButton />
    </>
  )
}


