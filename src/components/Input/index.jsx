import P from 'prop-types';
import * as S from './styles';

export const Input = ({
  label,
  typeInput,
  id,
  register,
  expand,
  placeholder,
}) => {
  return (
    <S.Container isExpand={expand}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={typeInput}
        placeholder={placeholder}
        {...register(id, { required: true })}
      />
    </S.Container>
  );
};

Input.propTypes = {
  label: P.string.isRequired,
  typeInput: P.string.isRequired,
  id: P.string.isRequired,
  register: P.func.isRequired,
  expand: P.bool,
  placeholder: P.string,
};
