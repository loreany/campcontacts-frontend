import { ExitIcon, PlusIcon } from '@radix-ui/react-icons';
import { Spinner } from '../../../components/Spinner';
import { UserMenu } from '../../../components/UserMenu';
import { useRegisterContactsController } from './useRegisterContactsController';
import { useAuth } from '../../../../app/hooks/useAuth';
import formatName from '../../../../app/utils/formatName';

export function RegisterContacts() {
  const { signout, user } = useAuth();
  const { openNewContactsModal } = useRegisterContactsController();
  const isLoading = false;

  return (
    <div className='bg-blue-900 md:rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col'>
      {isLoading && (
        <div className='w-full h-full flex items-center justify-center'>
          <Spinner className='text-blue-950/50 fill-white w-10 h-10' />
        </div>
      )}

      {!isLoading && (
        <>
          <div className='mt-8 md:mt-4 flex justify-between'>
            <div className='flex items-center gap-4'>
              <UserMenu name={user?.nome} />
              <span className='text-white tracking=[-1px] text-lg font-bold'>
                {user?.nome ? formatName(user?.nome) : 'Usuario'}
              </span>
            </div>

            <button
              className='flex items-center gap-2 text-white rounded-2xl'
              onClick={signout}
            >
              <ExitIcon className='w-6 h-6' />
              <span className='tracking=[-1px] text-sm hidden lg:flex '>
                Sair
              </span>
            </button>
          </div>

          <div className='flex-1 flex flex-col justify-end mt-10 md:mt-0'>
            <button
              className='mt-4 h-52 rounded-2xl border-2 p-2 border-blue-600 flex flex-col items-center justify-center gap-4 text-white hover:bg-blue-950/5 transition-colors'
              onClick={openNewContactsModal}
            >
              <div className='w-11 h-11 rounded-full border-2 border-white flex items-center justify-center'>
                <PlusIcon className='w-6 h-6' />
              </div>
              <span className='tracking-[-0.5px] font-medium block w-32 text-center'>
                Cadastrar novo contato
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
