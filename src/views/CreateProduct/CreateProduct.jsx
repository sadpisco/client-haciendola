import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../redux/actions';
import Button from 'react-bootstrap/Button';

let rerenders = 0;

export default function CreateProduct(){
    rerenders++;
    console.log(rerenders);
    const isRegresar = true;
    const createProductForm = useForm();
    const { register, control, handleSubmit } = createProductForm;
    const dispatch = useDispatch();
    const message  = useSelector( state => state.createProMsg);

    const submitCreate = function(formData){
        console.log(formData);
        dispatch(createProduct(formData));
    }

    return (
      <section className="min-h-screen text-white flex flex-col items-center justify-center">
        <Header isRegresar={isRegresar} />
        <p className="font-montserrat text-base md:text-lg text-center">
          renders: {rerenders / 2}
        </p>
        <div className = " pt-[5vh] md:pt-[2vw] border-white border-1 mt-[2vh] rounded-md flex flex-col items-center justify-around p-4 m-[2vw]">
          <h1 className = "text-center font-montserrat text-3xl">Crear Producto</h1>
        <form
          className=" w-[75vw]  flex flex-col items-center justify-center gap-[2vh] max-w-[600px] h-auto"
          onSubmit={handleSubmit(submitCreate)}
        >
          <div className="flex flex-col items-center justify-center w-[100%] max-w-[600px]">
            <label className="font-montserrat text-base md:text-lg text-left w-full font-semibold">
              SKU
            </label>
            <input
              placeholder = 'SKU o ID, Numero de 11 digitos.'
              {...register("sku")}
              className="bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] max-w-[600px]">
            <label className="font-montserrat text-base md:text-lg text-left w-full font-semibold">
              Titulo
            </label>
            <input
              placeholder = 'Nombre del producto.'
              {...register("title")}
              className="bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] max-w-[600px]">
            <label className="font-montserrat text-base md:text-lg text-left w-full font-semibold">
              Stock
            </label>
            <input
              placeholder = 'Cantidad de producto, numero entero.'
              {...register("stock")}
              className="bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] max-w-[600px]">
            <label className="font-montserrat text-base md:text-lg text-left w-full font-semibold">
              Precio
            </label>
            <input
              placeholder = 'Precio, numero entero.'
              {...register("price")}
              className="bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] max-w-[600px]">
            <label className="font-montserrat text-base md:text-lg text-left w-full font-semibold">
              Gramos
            </label>
            <input
              placeholder = 'Cantidad en gramos.'
              {...register("grams")}
              className="bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] max-w-[600px]">
            <label className="font-montserrat text-base md:text-lg text-left w-full font-semibold">
              Compare Price
            </label>
            <input
              placeholder = 'Compare price, entero.'
              {...register("comparePrice")}
              className="bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] max-w-[600px]">
            <label className="font-montserrat text-base md:text-lg text-left w-full font-semibold">
              Codigo de barras
            </label>
            <input
              placeholder = 'Codigo de barras, entero de 11 digitos.'
              {...register("barcode")}
              className="bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] max-w-[600px]">
            <label className="font-montserrat text-base md:text-lg text-left w-full font-semibold">
              Handle
            </label>
            <input
              placeholder = 'Nombre en codigo.'
              {...register("handle")}
              className="bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] max-w-[600px]">
            <label className="font-montserrat text-base md:text-lg text-left w-full font-semibold">
              Descripcion
            </label>
            <input
              placeholder = 'Descripcion de producto.'
              {...register("description")}
              className="bg-white text-black rounded-sm p-1 w-full font-montserrat font-medium"
            />
          </div>
          <p>{message}</p>
          <Button
            type="submit"
            className="font-montserrat text-md font-semibold"
          >
            Crear Producto
          </Button>
        </form>
        </div>
        <DevTool control={control} />
      </section>
    );
}