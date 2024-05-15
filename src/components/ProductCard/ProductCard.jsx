import React from 'react';
import ProductModal from '../ProductModal/ProducModal';
import { useState } from 'react';

export default function ProductCard({product}){
    const [modal, setModal] = useState(false);

    const clickHandler = function(){
        setModal(!modal);
    };

    return(
        <section className = "bg-white w-[90%] flex flex-row items-center justify-between p-[1vh] rounded-md" onClick={clickHandler}>
            <p className = "font-montserrat text-lg text-black w-[70%]">{product.title}</p>
            <p className = "font-montserrat text-lg text-black w-[15%]">{product.price}</p>
            <p className = "font-montserrat text-lg text-black w-[15%]">{product.stock}</p>
            <ProductModal product = {product} modal = {modal} setModal = {setModal}/>
        </section>
    )
}