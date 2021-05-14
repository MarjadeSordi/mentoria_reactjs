import {
  StyledInput,
  MsgInputError,
  MsgInputCheck,
  ImagemCheck,
  ImagemError,
  StyledDivGrey,
  StyledDivBack,
  TextDiv,
  StyledInputTag,
} from '../../styles/components/Input';

import correct from '../../assets/icons/correct.svg';
import Vector from '../../assets/icons/Vector.svg';
import { PasswordToogle } from '../../styles/components/Password';

const InputTag = ({
  type = 'text',

  validateInput,
  error,
  check,
  show,
  imgerror,
  imgcheck,
  onFocus,
  placeholder,
  nulo = true,

  ...props
}) => {
  return (
    <div>
      <StyledDivBack error={error} check={check} null={nulo} {...props}>
        <StyledInputTag
          type={type}
          onBlur={validateInput}
          check={check}
          placeholder={placeholder}
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
      </StyledDivBack>
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

export default InputTag;
