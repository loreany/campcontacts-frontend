import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';

interface CheckboxButtonProps {
  title: string;
  value?: boolean;
  className?: string;
  onChange?: (value: boolean) => void;
}

export function CheckboxButton({
  title,
  value,
  onChange,
  className,
}: CheckboxButtonProps) {
  return (
    <div className='flex items-center'>
      <label className={cn('pr-2 text-gray-700', className)} htmlFor='c1'>
        {title}
      </label>
      <Checkbox.Root
        checked={value}
        onCheckedChange={onChange}
        className='bg-white flex h-4 w-4 border-gray-500 items-center justify-center rounded-[4px] border '
        id={title}
      >
        <Checkbox.Indicator className='text-blue-700'>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
}
