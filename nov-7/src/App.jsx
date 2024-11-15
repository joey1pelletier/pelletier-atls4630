import filterableProductsList from "./filterableProductsList"

const data = [
  {
    category: 'fruits',
    price: 1,
    stocked: true,
    name: 'Banana'
  },
  {
    category: 'vegetables',
    price: 4,
    stocked: true,
    name: 'Sqaush'
  },
  {
    category: 'vegetables',
    price: 2,
    stocked: true,
    name: 'Spinach'
  },
  {
    category: 'fruits',
    price: 1,
    stocked: false,
    name: 'Apple'
  },
]

export default function App() {
  return (
    <filterableProductsList products="data" />
  )
}
