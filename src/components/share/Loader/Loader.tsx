'use client';

import type { FC, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type LoaderProps = HTMLAttributes<HTMLDivElement>;

const Loader: FC<LoaderProps> = ({ className, ...props }) => {
  return (
    <div
      aria-busy="true"
      className={cn(`flex flex-col items-center justify-center`, className)}
      role="alert"
      {...props}
    >
      <div
        className={`
          h-12 w-12 animate-spin rounded-full border-4 border-[#0B3B3C]
          border-t-transparent
        `}
      />
      <p className="mt-4 text-[#0B3B3C]">Loading...</p>
    </div>
  );
};

export default Loader;
