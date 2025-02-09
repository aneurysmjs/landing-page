import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `
    inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md
    text-sm font-medium transition-colors

    [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0

    dark:focus-visible:ring-neutral-300

    disabled:pointer-events-none disabled:opacity-50

    focus-visible:outline-none focus-visible:ring-1
    focus-visible:ring-neutral-950
  `,
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-9 px-4 py-2',
        icon: 'h-9 w-9',
        lg: 'h-10 rounded-md px-8',
        sm: 'h-8 rounded-md px-3 text-xs',
      },
      variant: {
        default: `
          bg-neutral-900 text-neutral-50 shadow

          dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90

          hover:bg-neutral-900/90
        `,
        destructive: `
          bg-red-500 text-neutral-50 shadow-sm

          dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90

          hover:bg-red-500/90
        `,
        ghost: `
          dark:hover:bg-neutral-800 dark:hover:text-neutral-50

          hover:bg-neutral-100 hover:text-neutral-900
        `,
        link: `
          text-neutral-900 underline-offset-4

          dark:text-neutral-50

          hover:underline
        `,
        outline: `
          border border-neutral-200 bg-white shadow-sm

          dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800
          dark:hover:text-neutral-50

          hover:bg-neutral-100 hover:text-neutral-900
        `,
        secondary: `
          bg-neutral-100 text-neutral-900 shadow-sm

          dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80

          hover:bg-neutral-100/80
        `,
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
