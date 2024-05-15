// import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login/Login';
import ForgotPassword from './views/ForgotPassword/ForgotPassword';
import ProductsCRUD from './views/ProductsCRUD/ProductsCRUD';
import Register from './views/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className = "App">
      <Routes>
        <Route path = '/' element = {<Login />}/>
        <Route path = '/register' element = {<Register />}/>
        <Route path = '/forgorpassword' element = {<ForgotPassword />}/>
        <Route path = '/products' element = {<ProductsCRUD />}/>
      </Routes>
    </div>
  )
}

export default App
