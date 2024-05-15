import ListGroup from 'react-bootstrap/ListGroup';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductsContainer({ products }){

    return (
      <section>
        <ListGroup className="w-screen flex flex-col items-center justify-center gap-[5px] max-w-[1200px]">
          <ListGroup.Item className="bg-slate-900 w-[90%] flex flex-row items-center justify-between rounded-md text-white">
            <p className="w-[70%] font-montserrat font-semibold">Title</p>
            <p className="w-[15%] font-montserrat font-semibold">Stock</p>
            <p className="w-[15%] font-montserrat font-semibold ">Price</p>
          </ListGroup.Item>
          { products?.map((product) => <ProductCard product = {product} key = {product.sku}/>)}
        </ListGroup>
      </section>
    );
}