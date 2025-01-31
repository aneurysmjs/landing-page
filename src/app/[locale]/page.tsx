import type { FC } from 'react';

import Image from 'next/image';

import SectionFooter from '@/app/[locale]/components/SectionFooter';
import SectionHeader from '@/app/[locale]/components/SectionHeader';
import SectionInfo from '@/app/[locale]/components/SectionInfo';
import SectionLayout from '@/app/[locale]/components/SectionLayout';
import SectionNumber from '@/app/[locale]/components/SectionNumber';

const Home: FC = () => {
  return (
    <div className={`flex flex-col items-center justify-center font-tt-norms`}>
      <SectionHeader />

      <main
        className={`
          w-full bg-white

          md:max-w-[1440px]
        `}
      >
        <h3
          className={`
            my-16 text-center text-[40px]/[60px] line font-semibold
            text-[#0B3B3C]
          `}
        >
          What we can help with
        </h3>

        <SectionLayout
          className={`
            mb-24 flex-col-reverse px-24

            md:flex-row
          `}
        >
          <SectionNumber className="md:w-1/3" sectionNumber="01">
            <Image
              alt="Hair Loss"
              className={`
                relative z-10 my-8

                md:my-0
              `}
              height={445}
              priority // Preload the image (optional, for above-the-fold images)
              quality={75} // Adjust image quality (optional)
              src="/images/hair-loss.jpg"
              style={{ objectFit: 'contain' }}
              width={370}
            />
          </SectionNumber>
          <SectionInfo
            className={`
              relative z-10

              md:w-1/3
            `}
            content="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
            subtitle="Hair loss needn’t be irreversible. We can help! "
            title="Hair loss"
          />
        </SectionLayout>
        <SectionLayout className="px-24">
          <SectionInfo
            className={`
              relative z-10

              md:w-1/3
            `}
            content="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
            subtitle="Erections can be a tricky thing. But no need to feel down!"
            title="Erectile Dysfunction"
          />
          <SectionNumber className="md:w-1/3" direction="right" sectionNumber="02">
            <Image
              alt="Erectile dysfunction"
              className={`
                relative z-10 my-8

                md:my-0
              `}
              height={445}
              priority // Preload the image (optional, for above-the-fold images)
              quality={75} // Adjust image quality (optional)
              src="/images/erectile-dysfunction.jpg"
              style={{ objectFit: 'contain' }}
              width={370}
            />
          </SectionNumber>
        </SectionLayout>
      </main>

      <SectionFooter />
    </div>
  );
};

export default Home;
