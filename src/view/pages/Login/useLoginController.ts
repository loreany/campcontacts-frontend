import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { SigninParams } from '../../../app/services/authService/signin';
import { authService } from '../../../app/services/authService';
import { useAuth } from '../../../app/hooks/useAuth';
import toast from 'react-hot-toast';

const schema = z.object({
  username: z
    .string({ required_error: 'Usuário é obrigatório' })
    .min(1, 'Usuário é obrigatório'),
  password: z
    .string({ required_error: 'Senha é obrigatória' })
    .min(6, 'Senha deve conter pelo menos 6 dígitos'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch {
      toast.error('Credenciais inválidas!');
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
