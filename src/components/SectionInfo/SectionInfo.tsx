import type { FC } from 'react';

interface SectionInfoProps {
  content: string;
  subtitle: string;
  title: string;
}

const SectionInfo: FC<SectionInfoProps> = ({ content, subtitle, title }) => {
  return (
    <article>
      <h6 className="text-xxs font-semibold uppercase text-[#6D8A83]">{title}</h6>
      <h4
        // eslint-disable-next-line readable-tailwind/multiline
        className={`
            mt-2 text-[28px]/[40px] font-bold text-[#0B3B3C] text-2-1xl
        `}
      >
        {subtitle}
      </h4>
      <p className="mt-4 text-[18px]/[30px] text-[#0B3B3C]">{content}</p>
    </article>
  );
};

export default SectionInfo;
