import { ComponentProps } from 'react';
import { Spinner } from './Spinner';
import { cn } from '../../app/utils/cn';

interface ButtonProps extends ComponentProps<'button'> {
  isPending?: boolean;
  variant?: 'ghost';
}

export function Button({
  className,
  isPending,
  disabled,
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isPending}
      className={cn(
        'bg-blue-700 hover:bg-blue-600 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 px-6 h-12 rounded-2xl font-medium text-white transition-all flex items-center justify-center',
        variant === 'ghost' &&
          'bg-transparent border border-blue-700 text-gray-800 hover:bg-blue-800/5',
        className
      )}
    >
      {!isPending && children} {isPending && <Spinner className='w-6 h-6' />}{' '}
    </button>
  );
}
