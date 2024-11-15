import searchArea from "./searcharea";
import productList from "./productList";

export default function filterableProductsList( products ) {

    const fruits = products.filter(product =>
        product.category === 'fruits')
    
    const vegetables = products.filter(product =>
        product.category === 'vegetables')    
    return (
        <>
            <searchArea />
            <div className='lists-container'>

            </div>
            <productList title="fruits" products={fruits} />
            <productList title="vegetables" products={vegetables} />
        </>
    )
}