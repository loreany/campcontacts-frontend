import { PersonIcon } from '@radix-ui/react-icons';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from './DropdownMenu';
import { usePasswordChangeModalController } from '../pages/Dashboard/PasswordChangeModal/usePasswordChangeModalController';
import { PasswordChangeModal } from '../pages/Dashboard/PasswordChangeModal';

interface userMenuProps {
  name: string | undefined;
}

export function UserMenu({ name }: userMenuProps) {
  const {
    handleOpenPasswordModal,
    isPasswordModalOpen,
    handleClosedPasswordModal,
  } = usePasswordChangeModalController();

  return (
    <>
      <PasswordChangeModal
        open={isPasswordModalOpen}
        onClose={handleClosedPasswordModal}
      />

      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <div className='bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center border-blue-100 cursor-pointer'>
            <span className='text-sm tracking-[-0.5px] text-blue-900'>
              {name?.slice(0, 2).toUpperCase()}
            </span>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='w-40'>
          <DropdownMenuItem
            className='flex items-center justify-between'
            onSelect={handleOpenPasswordModal}
          >
            <PersonIcon className='w-4 h-4 text-blue-700' />
            <span>Alterar Senha</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </>
  );
}
