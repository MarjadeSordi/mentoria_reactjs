import InputForm from '../src/components/Input/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import correct from '../src/assets/icons/correct.svg';

const PagedeCadastro = () => {
    const [value, setValue ] = useState('');
    const [error, setError ] = useState('');
    const [check, setCheck ] = useState('');

     const handleInput = e => {
     const value = e.currentTarget.value;
     setValue(value)

   };


   const ValidarInput = () => {
       if(value ==='') {
           setError('Não pode deixar campos em branco')       
       }
       
       else if (value){
           setCheck('Pode prosseguuir')
       }
    
     
    }


   
    return (
        <>

        <InputForm name="input1" onChange={handleInput} />
        <InputForm name="input2" onChange={handleInput} value={value} validateInput={ValidarInput} check={check} img={correct}/>
        <InputForm name="input3" onChange={handleInput} value={value} validateInput={ValidarInput}  error={error}  />
        <InputForm name="input4" onChange={handleInput}  />

        <Link to ='/login'> <button> Login   </button> </Link>
    
        <Link to ='/home'> <button >  Home </button> </Link>
        </>
    )
}

export default PagedeCadastro;