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
  type = 'text',
  validateInput,
  error,
  check,
  show,
  imgerror,
  imgcheck,
  ...props
}) => {
  return (
    <div>
      <StyledDivGrey error={error} check={check} {...props}>
        <StyledInput
          type={type}
          onBlur={validateInput}
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
    </div>
  );
};

export default InputForm;
