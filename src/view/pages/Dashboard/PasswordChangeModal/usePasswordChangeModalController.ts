import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { usersService } from '../../../../app/services/usersService';
import toast from 'react-hot-toast';
import { useDashboard } from '../DashboardContext/useDashboard';

export function usePasswordChangeModalController() {
  const [arePasswordsVisible, setArePasswordsVisible] = useState(false);

  const {
    isPasswordModalOpen,
    handleClosedPasswordModal,
    handleOpenPasswordModal,
  } = useDashboard();

  const schema = z
    .object({
      oldPassword: z
        .string({ required_error: 'Senha atual é obrigatória' })
        .min(1, 'Senha atual é obrigatória'),
      newPassword: z
        .string({ required_error: 'Senha é obrigatória' })
        .min(6, 'Senha deve conter pelo menos 6 dígitos'),
      confirmPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: 'As senhas não coincidem',
      path: ['confirmPassword'],
    });

  type FormData = z.infer<typeof schema>;

  const togglePasswordsVisible = useCallback(() => {
    setArePasswordsVisible((prevState) => !prevState);
  }, []);

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isLoading, mutateAsync } = useMutation(usersService.patch);

  const handleSubmit = hookFormSubmit(async ({ oldPassword, newPassword }) => {
    try {
      await mutateAsync({ oldPassword, newPassword });

      toast.success('Senha Alterada com sucesso!');
      handleClosedPasswordModal();
      reset({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch {
      toast.error('Erro ao alterar senha!');
    }
  });

  return {
    isPasswordModalOpen,
    handleOpenPasswordModal,
    handleClosedPasswordModal,
    togglePasswordsVisible,
    arePasswordsVisible,
    register,
    errors,
    handleSubmit,
    isLoading,
    reset,
  };
}
