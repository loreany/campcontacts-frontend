import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useLoginController } from './useLoginController';

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

  return (
    <div className='flex w-full h-full justify-center items-center bg-gray-100'>
      <div className='bg-gray-50 p-8  max-w-[504px] px-8 rounded-2xl shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] '>
        <header className='flex flex-col items-center gap-4 text-center'>
          <h1 className='text-2xl font-bold text-gray-700 tracking-[-1px]'>
            Entre em sua conta
          </h1>
        </header>

        <form onSubmit={handleSubmit} className='mt-[30px] flex flex-col gap-4'>
          <Input
            type='text'
            placeholder='Usuário'
            error={errors.username?.message}
            {...register('username')}
          />
          <Input
            type='password'
            placeholder='Senha'
            error={errors.password?.message}
            {...register('password')}
          />
          <Button type='submit' className='mt-2' isPending={isLoading}>
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
