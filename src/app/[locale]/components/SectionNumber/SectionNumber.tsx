import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

const leftClasses = `left-0 md:left-[80%]`;
const rightClasses = `right-0 md:right-[80%]`;

type Direction = 'left' | 'right';

interface SectionNumberProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  direction?: Direction;
  sectionNumber: number | string;
}

const SectionNumber: FC<SectionNumberProps> = ({
  children,
  className,
  direction = 'left',
  sectionNumber,
  ...props
}) => {
  const directionClass = direction === 'left' ? leftClasses : rightClasses;

  return (
    <div className={cn(`relative`, className)} {...props}>
      <div
        className={cn(
          `
            absolute top-0 z-[1] hidden h-full items-center text-[#F3F7F4]
            content-[attr(section-number)]

            lg:text-[400px]

            md:flex md:text-[300px]
          `,
          directionClass,
        )}
      >
        {sectionNumber}
      </div>
      {children}
    </div>
  );
};

export default SectionNumber;
