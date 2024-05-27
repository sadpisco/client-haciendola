import ProductModal from '../ProductModal/ProducModal';
import { useState } from 'react';
import { motion } from "framer-motion"

export default function ProductCard({product, deleteProducto}){
    const [modal, setModal] = useState(null);

    return(
        <section className = "border-none cursor-pointer bg-white w-[90%] flex flex-row items-center justify-between p-[1vh] rounded-md" onClick={ () => setModal(true)}>
            <p className = "font-montserrat text-xs text-black w-[70%] md:text-lg">{product.title}</p>
            <p className = "font-montserrat text-xs text-black w-[15%] md:text-lg">{product.price}</p>
            <p className = "font-montserrat text-xs text-black w-[15%] md:text-lg">{product.stock}</p>
            {modal && <ProductModal product = {product} modal = {modal} setModal = {setModal} deleteProducto={deleteProducto}/>}
        </section>
    )
}