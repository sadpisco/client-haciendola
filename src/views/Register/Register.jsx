import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { registerUser } from '../../redux/actions';

let rerenders = 0;

export default function Register(){
    rerenders++; 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginForm = useForm();
    const registerMessage = useSelector (state => state.registerMessage)
    const { register, control, handleSubmit } = loginForm;

    const sumiteando = function(formData){
        dispatch(registerUser(formData));
    };

    return(
        <section className='w-screen flex flex-col items-center justify-center text-white'>
                            <h1 className = "font-montserrat text-center text-lg fixed top-[3vh] w-screen">Renders: {rerenders/2}</h1>
            <h1 className = "font-montserrat w-auto text-center text-white text-4xl pb-[3vh]">Register</h1>
            <form onSubmit={ handleSubmit( sumiteando )}>
                <div className = ' flex flex-col items-center justify-start p-2 gap-[10px]'>
                    <label className = "font-montserrat text-xl text-white">Username</label>
                    <input type ='text' {...register('username')} className = "p-[10px] rounded-md text-white font-montserrat"/>
                </div>
                <div className = ' flex flex-col items-center justify-start p-2 gap-[10px]'>
                    <label className = "font-montserrat text-xl text-white">Password</label>
                    <input type ='text'{...register('password')} className = "p-[10px] rounded-md text-white font-montserrat"/>
                </div>
                <p className = "text-red font-montserrat text-xl text-center w-auto">{registerMessage}</p>
                <div className = 'flex flex-row w-screen items-center justify-center gap-[2vh] p-4'> 
                <Button type = "submit" className = "font-montserrat text-md">Registrarme</Button>
                <Button onClick={ () => navigate('/')} className = "font-montserrat text-md">Ya tengo cuenta</Button>
                </div>
            </form>
            <DevTool control = {control}/>
        </section>
)
}