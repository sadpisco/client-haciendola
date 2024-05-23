import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Header({ isRegresar }){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogged = useSelector(state => state.userLogged);

    function quitSession(){
        dispatch(logout());
        navigate('/');
    }

    return(
        <section className=" bg-zinc-900 w-screen flex flex-row items-center justify-around p-4 text-white sticky top-0 z-10">
                        <h4 className = "font-montserrat font-regular text-xs md:text-lg">Usuario Logueado: {userLogged?.user?.username}</h4>
                        <div className = "flex flex-row items-center justify-center gap-[5vw]">
                        {isRegresar?<Button className = "font-montserrat text-xs md:text-lg" onClick = { () => navigate('/products')}>Regresar</Button> :<Button  className = "font-montserrat text-xs md:text-lg" onClick = { () => navigate('/products/create')}>Crear Producto</Button>}
                        <Button onClick={quitSession} className = "font-montserrat text-xs md:text-lg">Cerrar Sesion</Button>
                        </div>
            
        </section>
    )
}