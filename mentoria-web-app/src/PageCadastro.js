import InputForm from '../src/components/Input';
import { Link } from 'react-router-dom';


const PagedeCadastro = () => {
    return (
        <>

        <InputForm />

        <Link to ='/login'> <button> Login   </button> </Link>
    
        <Link to ='/home'> <button >  Home </button> </Link>
        </>
    )
}

export default PagedeCadastro;