import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
// import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


let rerenders = 0;

function ProductsCRUD(){
    rerenders ++;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
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
        <section className='text-white flex flex-col items-center justify-center'>
            <Header />
            <h1 className= 'p-8'>Productos</h1>
            <ListGroup className='w-screen flex flex-col items-center justify-center gap-[5px]'>
            <ListGroup.Item className = 'bg-blue-400 w-[90%] flex flex-row items-between justify-between'>
                <p className = "w-[160px] font-montserrat font-semibold">Title</p>
                <p className = "font-montserrat font-semibold">Stock</p>
                <p className = "font-montserrat font-semibold md:hidden">Price</p>
            </ListGroup.Item>
                {products?.map((element) => 
                          <ListGroup.Item action key={element.sku} className = 'w-[90%] flex flex-row items-between justify-between font-montserrat'>
                            <p className = 'max-w-[160px] w-[160px] font-montserrat'>{element.title}</p>
                            <p className = "font-montserrat ">{element.stock}</p>
                            <p className = "font-montserrat md:hidden">{element.price}</p>
                        </ListGroup.Item>
                )}
            </ListGroup>

        </section>
    )
}

export default ProductsCRUD