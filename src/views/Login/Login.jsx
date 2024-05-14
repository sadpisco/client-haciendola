import styles from './Login.module.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';


function Login(){
    const loginForm = useForm();
    const { register, control } = loginForm;


    return(
        <section className='w-screen flex flex-col items-center justify-center'>
            <form>
            <h1>Haciendola Login</h1>
            <div className = 'flex flex-col items-start justify-center'> 
                <label htmlFor='username'>Username</label>
                <input type='text' placeholder='username' id= 'username' {...register('username')}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type = 'password' placeholder='password' id = 'password' {...register('password')}/>
            </div>
            </form>
            <DevTool control = {control}/>
        </section>
    )
}

export default Login;