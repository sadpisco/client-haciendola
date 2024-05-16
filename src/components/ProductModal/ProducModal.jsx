/* eslint-disable react/prop-types */
import styles from './ProductModal.module.css';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ProductModal({product, setModal, deleteProducto}){
    const navigate = useNavigate();
    const deleteMsg = useSelector( state => state.deleteProMsg);
    return (
      <section className={styles.holeModal}>
        <section className=" w-[90%] max-w-[1080px] h-auto min-h-screen flex flex-col items-center justify-center mb-[10vh] md:mb-[0vh] ">
          <div className=" h-auto flex flex-row items-center justify-between w-[90%] max-w-[1080px] pb-2">
            <h1 className="text-white text-lg md:text-2xl lg:text-3xl">
              {product?.title}
            </h1>
            <div className = "flex flex-row items-center justify-center gap-[10px]">
            <Button 
            className = "font-montserrat text-xs md:text-base"
            onClick = {() => navigate(`/products/${product.sku}`)}
            >Actualizar</Button>
            <Button
            className = "font-montserrat text-xs md:text-base"
            onClick = {() => {
            deleteProducto(product.sku);
            setTimeout(()=> setModal(false), 1000);
            }}>Eliminar</Button>
            <Button 
            className = "font-montserrat text-xs md:text-base"
            onClick={() => {
            navigate('/products');
            setTimeout(()=> setModal(false), 500);
            }}>Cerrar</Button>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center w-[90%] gap-[1vh] h-auto">
            <div className="flex flex-col items-center justify-between w-full bg-slate-900 p-2 rounded-md ">
              <p className="w-auto font-montserrat font-semibold">Description</p>
              <p className="w-auto font-montserrat">{product.description}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-slate-900 p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">SKU</p>
              <p className="w-auto font-montserrat">{product.sku}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-slate-900 p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Stock</p>
              <p className="w-auto font-montserrat">{product.stock}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-slate-900 p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Barcode</p> 
              <p className="w-auto font-montserrat">{product.barcode}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-slate-900 p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Compared Price</p>
              <p className="w-auto font-montserrat">{product.comparePrice}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-slate-900 p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Grams</p>
              <p className="w-auto font-montserrat">{product.grams}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full bg-slate-900 p-2 rounded-md">
              <p className="w-auto font-montserrat font-semibold">Handle</p>
              <p className="w-auto font-montserrat">{product.handle}</p>
            </div>
            <p className = "text-white">{deleteMsg}</p>
          </div>
        </section>
      </section>
    );
}