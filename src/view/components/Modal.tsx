import * as RdxDialog from '@radix-ui/react-dialog';
import React from 'react';
import { cn } from '../../app/utils/cn';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose?(): void;
  title: string;
}

export function Modal({ open, title, children, onClose }: ModalProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            'fixed inset-0 bg-black/80 backdrop-blur-sm z-99 overflow-y-auto',
            'data-[state=open]:animate-overlay-show'
          )}
        >
          <RdxDialog.Content
            aria-describedby={undefined}
            className={cn(
              'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-4 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] outline-none',
              'data-[state=open]:animate-content-show'
            )}
          >
            <header className='h-12 flex items-center gap-2 text-gray-800'>
              <button
                onClick={onClose}
                className='w-12 h12 flex items-center justify-center outline-none'
              >
                <Cross2Icon className='w-6 h-6' />
              </button>
              <RdxDialog.Title>
                <span className='text-lg tracking-[-1px] font-bold ml-20'>
                  {title}
                </span>
              </RdxDialog.Title>
            </header>
            <div>{children}</div>
          </RdxDialog.Content>
        </RdxDialog.Overlay>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}
