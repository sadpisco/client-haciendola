/* eslint-disable react/prop-types */
import styles from './ProductModal.module.css';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductModal({product, setModal, deleteProducto }){
    const navigate = useNavigate();
    const deleteMsg = useSelector( state => state.deleteProMsg);
    console.log(`El producto ${product.title} se ha renderizado.`);
    return (
      <motion.section className={styles.holeModal} exit = {{ opacity: 0 }}>
        <motion.section className="cursor-default w-[85%] max-w-[1080px] h-auto flex flex-col items-center justify-center mb-[10vh] md:mb-[0vh] pt-[1vh] pb-[2vh] rounded-md border-white border-2" 
        animate = {{ 
          opacity: 2
         }}
        initial = {{ 
          opacity: 0
        }}
        >
          <div className=" h-auto flex flex-row items-center justify-between w-[95%]   pt-[2vh] pb-[2vh]">
            <h1 className="text-white text-lg md:text-2xl lg:text-3xl">
              {product?.title}
            </h1>
            <div className = "flex flex-row items-center justify-center gap-[10px] h-full">
            <Button 
            className = "font-montserrat text-xs md:text-base"
            onClick = {() => navigate(`/products/${product.sku}`)}
            >Actualizar</Button>
            <Button
            className = "font-montserrat text-xs md:text-base"
            onClick = {() => {
            deleteProducto(product.sku);
            setTimeout(()=> setModal(false), 10);
            }}>Eliminar</Button>
            <Button 
            className = "font-montserrat text-xs md:text-base"
            onClick={() => {
            setTimeout(()=> setModal(false), 10);
            }}>Cerrar</Button>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center w-[95%] gap-[1vh] h-auto">
            <div className="flex flex-col items-center justify-between w-full bg-black p-2 rounded-md ">
              <p className="w-auto font-montserrat font-semibold">Description</p>
              <p className="w-auto font-montserrat">{product.description || <Skeleton />}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-black p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">SKU</p>
              <p className="w-auto font-montserrat">{product.sku}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-black p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Stock</p>
              <p className="w-auto font-montserrat">{product.stock}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-black p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Barcode</p> 
              <p className="w-auto font-montserrat">{product.barcode}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-black p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Compared Price</p>
              <p className="w-auto font-montserrat">{product.comparePrice}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-black p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Grams</p>
              <p className="w-auto font-montserrat">{product.grams}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-black p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Handle</p>
              <p className="w-auto font-montserrat">{product.handle}</p>
            </div>
            <motion.p className = "text-white"         animate = {{ scale: 1,
          opacity: 1
         }}
        initial = {{ scale: 0.2,
          opacity: 0
        }}>{deleteMsg}</motion.p>
          </div>
        </motion.section>
      </motion.section>
    );
}