import { Transition } from '@headlessui/react';
import { Spinner } from './Spinner';

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='bg-blue-900 fixed top-0 left-0 w-full h-full flex items-center justify-center'>
        <Spinner className='text-blue-900 fill-white' />
      </div>
    </Transition>
  );
}
