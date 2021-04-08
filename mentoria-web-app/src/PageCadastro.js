import InputForm from '../src/components/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const PagedeCadastro = () => {
    const [value, setValue ] = useState('');
    const [error, setError ] = useState('');
    const [check, setCheck ] = useState('');

     const handleInput = e => {
     const value = e.currentTarget.value;
     setValue(value)

   };


   const ValidarInput = () => {
       if(value) {
           setError(false)
       } else {
           setError('Não é permitido campos vazios')
       }
    }

    const ChecarInput = () => {
        setCheck('Pode prosseguir')
    }
    return (
        <>

        <InputForm name="input1" onChange={handleInput} />
        <InputForm name="input2" onChange={handleInput} />
        <InputForm name="input3" onChange={handleInput} value={value} validateInput={ValidarInput} checkInput={ChecarInput} error={error} />
        <InputForm name="input4" onChange={handleInput} />

        <Link to ='/login'> <button> Login   </button> </Link>
    
        <Link to ='/home'> <button >  Home </button> </Link>
        </>
    )
}

export default PagedeCadastro;