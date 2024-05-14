import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
        <section className='w-screen flex flex-col items-center justify-center'>
            <form onSubmit={ handleSubmit(sumiteando) }>
                <h1>Renders: {rerenders/2}</h1>
            <h1>Haciendola Login</h1>
            <div className = 'flex flex-col items-start justify-center'> 
                <label htmlFor='username'>Username</label>
                <input type='text' placeholder='username' id= 'username' {...register('username')}/>
            </div>
            <div className = 'flex flex-col items-start justify-center'>
                <label htmlFor='password'>Password</label>
                <input type = 'password' placeholder='password' id = 'password' {...register('password')}/>
            </div>
            <button type = 'submit' >Log In</button>
            <p>{message}</p>
            </form>
            <DevTool control = {control}/>
        </section>
    )
}

export default Login;