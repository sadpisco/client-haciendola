import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';

function ProductsCRUD(){
    const dispatch = useDispatch();
    const products = useSelector( state => state.allProducts );
    const userLogged = useSelector ( state => state.userLogged );
    const navigate = useNavigate();

useEffect(() => {
    dispatch(getAllProducts());
    if (!userLogged.status){
        navigate('/');
    }
}, [dispatch, navigate, userLogged]);


    return(
        <section className='text-white flex flex-col items-center justify-center'>
            <Header />
            <h1 className= 'p-8'>Productos</h1>
            <ProductsContainer products = {products} />
         </section>
    )
}

export default ProductsCRUD