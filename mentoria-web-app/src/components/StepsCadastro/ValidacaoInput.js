import * as yup from 'yup';
import SetInput from './StepInput';

const FormValidation = () => {
  const FormValidationYup = yup.object().shape({
    nome: yup.string().max(30).required('Você precisa preencher o campo nome'),
  });

  return <SetInput validacao={FormValidationYup} />;
};

export default FormValidation;
