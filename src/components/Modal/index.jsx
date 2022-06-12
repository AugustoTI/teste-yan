import P from 'prop-types';
import * as S from './styles';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalProvider/context';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';

export const Modal = ({ modalActive, setModal }) => {
  const { clearCart } = useContext(GlobalContext);
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    clearCart();
    setModal(false);
  };

  const handleOutsideClick = ({ currentTarget, target }) => {
    if (target === currentTarget) setModal(false);
  };

  return (
    modalActive && (
      <S.BackgroundModal onClick={handleOutsideClick}>
        <S.ContainerModal>
          <h1>Fill in the form to complete the purchase</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.InputsForm>
              <Input
                placeholder="Your Name"
                label="Name"
                id="name"
                typeInput="text"
                register={register}
              />
              <Input
                placeholder="Your Password"
                label="Password"
                id="password"
                typeInput="password"
                register={register}
              />
              <Input
                placeholder="Your Email"
                expand={true}
                label="Email"
                id="email"
                typeInput="email"
                register={register}
              />
            </S.InputsForm>
            <select {...register('formOfPayment')}>
              <option value="credit card">Credit Card</option>
              <option value="ticket">Ticket</option>
              <option value="installments">Installments</option>
            </select>
            <br />
            <S.Button>Enviar</S.Button>
          </form>
        </S.ContainerModal>
      </S.BackgroundModal>
    )
  );
};

Modal.propTypes = {
  modalActive: P.bool.isRequired,
  setModal: P.func.isRequired,
};
