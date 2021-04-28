import {
  StyledInput,
  MsgInputError,
  MsgInputCheck,
  ImagemCheck,
  ImagemError,
  StyledDivGrey,
} from '../../styles/components/Input';

import correct from '../../assets/icons/correct.svg';
import Vector from '../../assets/icons/Vector.svg';
import { PasswordToogle } from '../../styles/components/Password';

const InputForm = ({
  name,
  type = 'text',
  value,
  onChange,
  validateInput,
  error = false,
  check = false,
  show,
  imgerror,
  imgcheck,
  ...props
}) => {
  return (
    <>
      <StyledDivGrey erro={error} checkar={check} focus={'#4F4F4F'}>
        <StyledInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={validateInput}
          error={error}
          check={check}
          {...props}
        />

        {show ? <PasswordToogle> {show} </PasswordToogle> : ' '}

        {imgcheck ? (
          <>
            {' '}
            <ImagemCheck src={correct} alt="Check" />
          </>
        ) : (
          ''
        )}

        {imgerror ? (
          <>
            <ImagemError src={Vector} alt="Erro" />
          </>
        ) : (
          ''
        )}
      </StyledDivGrey>
      <MsgInputCheck>
        <p> {check}</p>{' '}
      </MsgInputCheck>{' '}
      <MsgInputError>
        {' '}
        <p> {error} </p>
      </MsgInputError>{' '}
    </>
  );
};

export default InputForm;
