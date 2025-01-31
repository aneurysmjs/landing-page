import type { FC, ReactNode } from 'react';

interface SectionLayoutProps {
  left: ReactNode;
  rigth: ReactNode;
  sectionNumber: number | string;
}

const SectionLayout: FC<SectionLayoutProps> = ({ left: Left, rigth: Right, sectionNumber }) => {
  return (
    <div
      className={`
        mx-auto flex w-full flex-col items-center justify-around bg-white
        shadow-lg

        before:absolute before:left-[15%] before:text-[450px]
        before:text-[#F3F7F4] before:content-[attr(section-number)]

        md:flex-row
      `}
      section-number={sectionNumber}
    >
      <div
        className={`
          z-10 text-center

          md:w-1/3 md:text-left
        `}
      >
        {Left}
      </div>
      <div
        className={`
          z-10 mt-6 flex justify-center

          md:mt-0 md:w-1/3
        `}
      >
        {Right}
      </div>
    </div>
  );
};

export default SectionLayout;
