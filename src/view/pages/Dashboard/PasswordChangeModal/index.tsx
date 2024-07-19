import { Button } from '../../../components/Button';
import { CheckboxButton } from '../../../components/CheckboxButton';
import { Input } from '../../../components/Input';
import { Modal } from '../../../components/Modal';
import { usePasswordChangeModalController } from './usePasswordChangeModalController';
import { useEffect } from 'react';

interface PasswordChangeModalProps {
  open: boolean;
  onClose(): void;
}

export function PasswordChangeModal({
  open,
  onClose,
}: PasswordChangeModalProps) {
  const {
    arePasswordsVisible,
    togglePasswordsVisible,
    handleSubmit,
    register,
    reset,
    errors,
  } = usePasswordChangeModalController();

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} title='Alterar Senha'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 relative'>
          <Input
            type={arePasswordsVisible ? 'text' : 'password'}
            placeholder='Senha Atual'
            error={errors.oldPassword?.message}
            password
            toggleIcon={togglePasswordsVisible}
            icon={arePasswordsVisible}
            {...register('oldPassword')}
          ></Input>

          <Input
            type={arePasswordsVisible ? 'text' : 'password'}
            placeholder='Nova Senha'
            error={errors.newPassword?.message}
            {...register('newPassword')}
          ></Input>

          <Input
            type={arePasswordsVisible ? 'text' : 'password'}
            placeholder='Confirme a Nova Senha'
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          ></Input>

          <CheckboxButton
            value={arePasswordsVisible}
            onChange={togglePasswordsVisible}
            title='Mostrar Senhas'
            className='text-sm text-gray-600 ml-1'
          />
        </div>

        <Button type='submit' className='w-full mt-6 md:max-w-[400px]'>
          Salvar
        </Button>
      </form>
    </Modal>
  );
}

{
  /* <button
            type='button'
            className='absolute top-5 right-3'
            onClick={togglePasswordsVisible}
          >
            {arePasswordsVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </button> */
}
