import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogged = useSelector(state => state.userLogged);

    function quitSession(){
        dispatch(logout());
        navigate('/');
    }

    return(
        <section className=" bg-zinc-900 w-screen flex flex-row items-center justify-around p-4 ">
                        <h4>Usuario Logueado: {userLogged?.user?.username}</h4>
            <button onClick={quitSession}>Log Out</button>


        </section>
    )
}