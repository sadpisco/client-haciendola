import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

let rerenders = 0;

function ProductsCRUD(){
    rerenders ++;
    const dispatch = useDispatch();
    const products = useSelector( state => state.allProducts );
    const userLogged = useSelector ( state => state.userLogged );
    const navigate = useNavigate();

    console.log(products, rerenders/2);

useEffect(() => {
    dispatch(getAllProducts());
    if (!userLogged.status){
        navigate('/');
    }
}, [dispatch, navigate, userLogged]);


    return(
        <section>
            <Header />
            <h1>Productos</h1>
        </section>
    )
}

export default ProductsCRUD