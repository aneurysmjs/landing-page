import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type SectionLayoutProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const SectionLayout: FC<SectionLayoutProps> = ({
  children,

  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        `
          mx-auto flex w-full flex-col items-center justify-around bg-white px-8

          md:flex-row
        `,
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
