import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../app/utils/cn';
import {
  CrossCircledIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from '@radix-ui/react-icons';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
  password?: boolean;
  icon?: boolean;
  toggleIcon?(): void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      name,
      id,
      error,
      password,
      toggleIcon,
      icon,
      className,
      ...props
    },
    ref
  ) => {
    {
      const inputId = id ?? name;

      return (
        <div className='relative'>
          <input
            {...props}
            ref={ref}
            name={name}
            id={inputId}
            className={cn(
              'bg-white w-full rounded-lg border border-gray-500 px-3 h-[50px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
              error && '!border-red-900',
              className
            )}
            placeholder=' '
          />
          <label
            htmlFor={inputId}
            className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all'
          >
            {placeholder}
          </label>
          {password && (
            <button
              type='button'
              className='absolute top-5 right-3'
              onClick={toggleIcon}
            >
              {icon ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </button>
          )}
          {error && (
            <div className='flex gap-2 items-center mt-2 text-red-900'>
              <CrossCircledIcon />
              <span className='text-xs'>{error}</span>
            </div>
          )}
        </div>
      );
    }
  }
);
Input.displayName = 'Input';
