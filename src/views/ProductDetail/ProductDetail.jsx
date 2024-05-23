import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, updateProduct } from '../../redux/actions';
import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Button from 'react-bootstrap/Button';

let rerenders = 0;

export default function ProductDetail(){
    rerenders++;
    const isRegresar = true;
    const { id } = useParams();
    const dispatch = useDispatch();
    const producto  = useSelector( state => state.detailProduct);
    const message  = useSelector( state => state.updateProMsg);
    const updateProductForm = useForm();
    const { register, control, handleSubmit } = updateProductForm;

    useEffect(() => {
        dispatch(getProduct(id));

    }, [id, dispatch]);

    const submitUpdate = function(formData){
        console.log(formData);
        dispatch(updateProduct(formData));
    }

    return(
        <section className = "min-h-screen text-white flex flex-col items-center justify-center">
            <Header isRegresar = {isRegresar} />
            <p className = "font-montserrat text-base md:text-lg text-center">renders: {rerenders/2}</p>
            <div className = " pt-[5vh] md:pt-[2vw] border-white border-2 mt-[2vh] rounded-md flex flex-col items-center justify-around p-4 m-[2vw]">
            <h1 className = "font-montserrat text-base md:text-lg text-center pt-2 font-bold">Actualizar Producto</h1>
            <h1 className = "font-montserrat text-base md:text-lg text-center pt-2 ">{producto.title}</h1>

            <form className = " w-[90vw]  flex flex-col items-center justify-center gap-[2vh] max-w-[600px] h-auto" onSubmit={handleSubmit(submitUpdate)}>
            <div className = "flex flex-col items-center justify-center w-[100%] max-w-[600px]">
                    <label className = "font-montserrat text-base md:text-lg text-left w-full font-semibold">SKU</label>
                    <input defaultValue= {producto.sku} {...register('sku')} className='bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium' />
                </div>
                <div className = "flex flex-col items-center justify-center w-[100%] max-w-[1080px]">
                    <label className = "font-montserrat text-base md:text-lg text-left w-full font-semibold">Title</label>
                    <input defaultValue= {producto.title} {...register('title')} className='bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium'/>
                </div>
                <div className = "flex flex-col items-center justify-center w-[100%] max-w-[1080px]">
                    <label className = "font-montserrat text-base md:text-lg text-left w-full font-semibold">Stock</label>
                    <input defaultValue= {producto.stock} {...register('stock')} className='bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium'/>
                </div>
                <div className = "flex flex-col items-center justify-center w-[100%] max-w-[1080px]">
                    <label className = "font-montserrat text-base md:text-lg text-left w-full font-semibold">Price</label>
                    <input defaultValue= {producto.price} {...register('price')} className='bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium'/>
                </div>
                <div className = "flex flex-col items-center justify-center w-[100%] max-w-[1080px]">
                    <label className = "font-montserrat text-base md:text-lg text-left w-full font-semibold">Grams</label>
                    <input defaultValue= {producto.grams} {...register('grams')} className='bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium'/>
                </div>
                <div className = "flex flex-col items-center justify-center w-[100%] max-w-[1080px]">
                    <label className = "font-montserrat text-base md:text-lg text-left w-full font-semibold">Compared Price</label>
                    <input defaultValue= {producto.comparePrice} {...register('comparePrice')} className='bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium'/>
                </div>
                <div className = "flex flex-col items-center justify-center w-[100%] max-w-[1080px]">
                    <label className = "font-montserrat text-base md:text-lg text-left w-full font-semibold">Barcode</label>
                    <input defaultValue= {producto.barcode} {...register('barcode')} className='bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium'/>
                </div>
                <div className = "flex flex-col items-center justify-center w-[100%] max-w-[1080px]">
                    <label className = "font-montserrat text-base md:text-lg text-left w-full font-semibold">Handle</label>
                    <input defaultValue= {producto.handle} {...register('handle')} className='bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium'/>
                </div>
                <div className = "flex flex-col items-center justify-center w-[100%] max-w-[1080px]">
                    <label className = "font-montserrat text-base md:text-lg text-left w-full font-semibold">Description</label>
                    <input defaultValue= {producto.description} {...register('description')} className='bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium h-auto'/>
                </div>
                <p>{message}</p>
                <Button type = 'submit' className = "font-montserrat text-md font-semibold">
                    Actualizar
                </Button>

            </form>
            </div>
            <DevTool control = {control}/>
        </section>
    )
}