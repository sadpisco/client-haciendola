import ProductModal from '../ProductModal/ProducModal';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

export default function ProductCard({product, deleteProducto}){
    const [modal, setModal] = useState(null);

    const devuelveStrings = function (value){
        if (value == 1){
            return <p className = "font-montserrat text-xs text-black w-full md:text-lg text-center">{`${value} unidad`}</p>
        } else {
            return <p className = "font-montserrat text-xs text-black w-full md:text-lg text-center">{`${value} unidades`}</p>
        }
    };

    return(
        <motion.section className = "border-none cursor-pointer bg-white w-[90%] flex flex-row items-center justify-between p-[1vh] rounded-sm" onClick={ () => setModal(true)} exit = {{ opacity: 0 }}>
            <p className = "font-montserrat text-xs text-black w-[70%] md:text-lg">{product.title}</p>
            <p className = "font-montserrat text-xs text-black w-[20%] md:text-lg text-center">{devuelveStrings(product.stock)}</p>
            <p className = "font-montserrat text-xs text-black w-[15%] md:text-lg text-center">$ {product.price}.00</p>
            <AnimatePresence wait>
            {modal && <ProductModal product = {product} modal = {modal} setModal = {setModal} deleteProducto={deleteProducto}/>}
            </AnimatePresence>
        </motion.section>
    )
}