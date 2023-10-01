'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        disabled={disabled}
        className={cn(
          `
            w-auto
            rounded-full
            border-transparent
            bg-black
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:opacity-75
            disabled:pointer-events-none
            disabled:opacity-50
          `,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
