import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

let rerenders = 0;

function Login(){
    rerenders++; 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginForm = useForm();
    const { register, control, handleSubmit } = loginForm;
    const message = useSelector( state => state.loginMessage );
    const userLogged = useSelector( state => state.userLogged );
    console.log(userLogged);
    const sumiteando = function(formData){
        dispatch(loginUser(formData));
    };

    useEffect(() => {
        if(userLogged.status){
            console.log(`Iniciando sesion como ${userLogged.user.username}`);
            navigate('/products');
        } 
    }, [userLogged, navigate]);

    return(
        <section className='w-screen flex flex-col items-center justify-center text-white'>
            <form onSubmit={ handleSubmit(sumiteando) }>
                <h1 className = "font-montserrat text-center text-lg fixed top-[3vh] w-screen">Renders: {rerenders/2}</h1>
            <h1 className = "font-montserrat w-auto text-center text-white text-4xl pb-[3vh]">Login</h1>
            <div className = ' flex flex-col items-center justify-start p-2 gap-[10px]'> 
                <label htmlFor='username' className = "font-montserrat text-xl text-white">Username</label>
                <input type='text' placeholder='username' id= 'username' {...register('username')} className = "p-[10px] rounded-md text-white font-montserrat"/>
            </div>
            <div className = ' flex flex-col items-center justify-start p-2 gap-[10px]'>
                <label htmlFor='password' className = "font-montserrat text-xl text-white">Password</label>
                <input type = 'password' placeholder='password' id = 'password' {...register('password')} className = "p-[10px] rounded-md text-white font-montserrat"/>
            </div>
            <p className = "text-red font-montserrat text-xl text-center w-auto">{message}</p>
            <div className = 'flex flex-row w-screen items-center justify-center gap-[2vh] p-4'>
            <Button type = 'submit' className = "font-montserrat text-md">Log In</Button>
            <Button type = 'button' onClick={ () => navigate('/register')} className = "font-montserrat text-md">Register</Button>
            </div>
            </form>
            <DevTool control = {control}/>
        </section>
    )
}

export default Login;