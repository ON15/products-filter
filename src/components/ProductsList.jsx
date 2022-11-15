import Product from './Product'

export default function ProductsList({products}) {
  return (
    <section className='products'>
        {products.map(product=>{
            return <Product {...product} key={product.id} />
        })}
    </section>
  )
}
