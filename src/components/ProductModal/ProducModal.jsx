import styles from './ProductModal.module.css';
import Button from 'react-bootstrap/Button';

export default function ProductModal({product, modal, setModal}){
    console.log(product);
    if (!modal) return null;

    return(
        <section className= {styles.holeModal}>
            <section className = "bg-slate-600 w-[90%] max-w-[1080px] flex flex-col items-center justify-center">
            <div className = "flex flex-row items-center justify-between w-full">
            <h1 className = "text-white">{product?.title}</h1>
            <Button onClick={ () => setModal(!modal)}>Close</Button>
            </div>
            <div className = "flex flex-col items-center justify-center w-[90%]">
            <div className = "flex flex-col items-center justify-between w-full">
                <p className = "w-auto">Description</p>
                <p className = "w-auto">{product.description}</p>
                </div>
                <div className = "flex flex-row items-center justify-between w-full">
                <p className = "w-auto">SKU</p>
                <p className = "w-auto">{product.sku}</p>
                </div>
                <div className = "flex flex-row items-center justify-between w-full">
                <p className = "w-auto">Stock</p>
                <p className = "w-auto">{product.stock}</p>
                </div>
                <div className = "flex flex-row items-center justify-between w-full">
                <p className = "w-auto">Barcode</p>
                <p className = "w-auto">{product.barcode}</p>
                </div>
                <div className = "flex flex-row items-center justify-between w-full">
                <p className = "w-auto">Compared Price</p>
                <p className = "w-auto">{product.comparePrice}</p>
                </div>
                <div className = "flex flex-row items-center justify-between w-full">
                <p className = "w-auto">Grams</p>
                <p className = "w-auto">{product.grams}</p>
                </div>
                <div className = "flex flex-row items-center justify-between w-full">
                <p className = "w-auto">Handle</p>
                <p className = "w-auto">{product.handle}</p>
                </div>
            </div>
            </section>
        </section>
    )
}