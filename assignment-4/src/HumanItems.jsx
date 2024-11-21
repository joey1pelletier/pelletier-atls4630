import { useState } from 'react';



export default function HumanItems(items) {
    const allItems = {item_1: items.item1, item_2: items.item2};
    const allItemsArray = Object.values(allItems);
    const [curr_index, setCurrentIndex] = useState(0);
    function incrementStateCounter() {
        setCurrentIndex((curr_index + 1) % 2);
      }
    return (
        <>
        <button onClick={incrementStateCounter}>{allItemsArray[curr_index]}</button>
        </>
    );
}