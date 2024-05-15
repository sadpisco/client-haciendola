import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Header(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogged = useSelector(state => state.userLogged);

    function quitSession(){
        dispatch(logout());
        navigate('/');
    }

    return(
        <section className=" bg-zinc-900 w-screen flex flex-row items-center justify-around p-4 text-white relative top-0">
                        <h4 className = "font-montserrat font-regular">Usuario Logueado: {userLogged?.user?.username}</h4>
            <Button onClick={quitSession} className = "font-montserrat">Log Out</Button>
        </section>
    )
}