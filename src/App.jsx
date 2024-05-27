import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login/Login';
import ForgotPassword from './views/ForgotPassword/ForgotPassword';
import ProductsCRUD from './views/ProductsCRUD/ProductsCRUD';
import Register from './views/Register/Register';
import ProductDetail from './views/ProductDetail/ProductDetail';
import CreateProduct from './views/CreateProduct/CreateProduct';
import Playground from './views/PlayGround/Playground';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className = "App">
      <Routes>
        <Route path = '/' element = {<Login />}/>
        <Route path = '/register' element = {<Register />}/>
        <Route path = '/forgorpassword' element = {<ForgotPassword />}/>
        <Route path = '/products' element = {<ProductsCRUD />}/>
        <Route path = '/playground' element = {<Playground />}/>
        <Route path = '/products/:id' element = {<ProductDetail />}/>
        <Route path = '/products/create' element = {<CreateProduct />}/>
      </Routes>
    </div>
  )
}

export default App
