import Image from 'next/image';
import Link from 'next/link';

import Quiz from '@/app/[locale]/components/Quiz';

const SectionHeader = () => {
  return (
    <header
      className={`
        relative h-96 w-full

        md:h-[700px] md:max-w-[1440px]
      `}
    >
      <Link
        className={`
          relative z-10 ml-32 mt-8 hidden

          md:inline-block
        `}
        href="https://manual.co"
        target="_blank"
      >
        <Image
          alt="Logo Manual"
          height={40}
          priority
          src="/images/logo-manual.svg"
          style={{ objectFit: 'cover' }}
          width={40}
        />
      </Link>

      <Image
        alt="Man's health"
        className={`
          hidden

          md:inline
        `}
        fill
        priority // Preload the image (optional, for above-the-fold images)
        quality={75} // Adjust image quality (optional)
        src="/images/landing-hero.jpg"
        style={{ objectFit: 'cover' }}
      />

      <div
        className={`
          absolute inset-0 left-0 flex w-full flex-col items-start
          justify-center text-white
        `}
      >
        <article
          className={`
            ml-0 w-full px-8

            lg:w-[430px]

            md:ml-32 md:w-[340px] md:px-0
          `}
        >
          <h2
            className={`
              text-center text-5xl font-bold text-[#0B3B3C]

              lg:text-[90px]/[90px]

              md:text-left md:text-[70px]/[70px]
            `}
          >
            Be good to yourself
          </h2>
          <p className="mt-4 text-[18px]/[30px] text-[#0B3B3C]">
            We’re working around the clock to bring you a holistic approach to your wellness. From
            top to bottom, inside and out.
          </p>

          <Quiz />
        </article>
      </div>
    </header>
  );
};

export default SectionHeader;
