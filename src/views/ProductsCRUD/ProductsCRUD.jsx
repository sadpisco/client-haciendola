import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { getAllProducts, deleteProduct } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';

function ProductsCRUD(){
    const dispatch = useDispatch();
    const products = useSelector( state => state.allProducts );
    const userLogged = useSelector ( state => state.userLogged );
    const navigate = useNavigate();

    const deleteProducto = useCallback((sku) => {
        dispatch(deleteProduct(sku));
        setTimeout(()=> dispatch(getAllProducts()),1000);
    }, [dispatch]);

useEffect(() => {
    dispatch(getAllProducts());
    if (!userLogged.status){
        navigate('/');
    }
}, [dispatch, navigate, userLogged, deleteProducto]);





    return(
        <section className='text-white flex flex-col items-center justify-center overflow-auto'>
            <Header />
            <h1 className= 'p-8 font-montserrat text-2xl md:text-4xl'>Productos</h1>
            <ProductsContainer products = {products} deleteProducto = {deleteProducto}/>
         </section>
    )
}

export default ProductsCRUD