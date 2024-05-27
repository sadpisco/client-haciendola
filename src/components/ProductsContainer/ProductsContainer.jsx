import ListGroup from 'react-bootstrap/ListGroup';
import ProductCard from '../ProductCard/ProductCard';
import { motion, AnimatePresence } from "framer-motion"


export default function ProductsContainer({ products, deleteProducto }){

    return (
      <section>
        <ListGroup className="w-screen flex flex-col items-center justify-center gap-[5px] max-w-[1200px]">
          <ListGroup.Item className="bg-slate-900 w-[90%] flex flex-row items-center justify-between rounded-md text-white border-none">
            <p className="w-[70%] font-montserrat font-semibold">Titulo</p>
            <p className="w-[15%] font-montserrat font-semibold">Stock</p>
            <p className="w-[15%] font-montserrat font-semibold">Precio</p>
          </ListGroup.Item>
          <AnimatePresence>
          { products?.map((product) => <ProductCard product = {product} key = {product.sku} deleteProducto = {deleteProducto}/>)}
          </AnimatePresence>
        </ListGroup>
      </section>
    );
}