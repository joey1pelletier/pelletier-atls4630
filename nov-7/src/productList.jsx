import productItem from "./productItem";

export default function productList( title, products ) {
    return (
        <div>
            <h2>{title}</h2>
            {products.map(product => ProductItem key={productItem.name} productItem={productItem})}
        </div>
    )
}