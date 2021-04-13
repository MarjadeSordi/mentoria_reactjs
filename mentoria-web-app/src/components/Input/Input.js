import {
  StyledInput,
  MsgInputError,
  MsgInputCheck,
  ImagemCheck,
  ImagemError,
} from '../../styles/components/input';

const InputForm = ({
  name,
  type = 'text',
  value,
  onChange,
  validateInput,
  checkInput,
  error = false,
  check = false,
  img,
  imgError,
  ...props
}) => {
  return (
    <>
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

      {check ? (
        <>
          {' '}
          <MsgInputCheck>
            {' '}
            <p> {check}</p>{' '}
          </MsgInputCheck>{' '}
          <ImagemCheck src={img} />{' '}
        </>
      ) : (
        ''
      )}

      {error ? (
        <>
          {' '}
          <MsgInputError>
            {' '}
            <p> {error} </p>
          </MsgInputError>{' '}
          <ImagemError src={imgError} />
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default InputForm;
