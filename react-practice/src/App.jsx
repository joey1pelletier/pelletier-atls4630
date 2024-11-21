import { useState } from 'react'
import MyButton from './MyButton'
import SharedDataButton from './SharedDataButton';

import './App.css'
// object
const user = {
    name: 'Joey Pelletier',
    age: 21,
};

// rendering list
const user_items = [
  { title: 'Airpods (not)', id: 1 },
  { title: 'water bottle', id: 2 },
];





// there is no special syntax for conditionals. Can do normal if else statements

export default function App() {
  // using map() function to transform array of products/items into a list of li buttons
  const listOfItems = user_items.map(item =>
      <li key={item.id}>{item.title}</li>
  );

  return (
    <div>
      {/* line below: curly brackets = escaping back into JS*/}
      <h1>{user.name}'s button</h1> 
      <MyButton />
      <MyButton />
      <SharedDataButton />
      <SharedDataButton />
      <h1>{user.name}'s items</h1>
      <ul>{listOfItems}</ul>
    </div>
  )
}


