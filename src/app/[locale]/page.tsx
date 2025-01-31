import type { FC } from 'react';

import Image from 'next/image';

import SectionFooter from '@/components/SectionFooter';
import SectionHeader from '@/components/SectionHeader';
import SectionInfo from '@/components/SectionInfo';
import SectionLayout from '@/components/SectionLayout';
import SectionNumber from '@/components/SectionNumber';

const Home: FC = () => {
  return (
    <div className={`flex flex-col items-center justify-center font-tt-norms`}>
      <SectionHeader />

      <main className="bg-white py-8">
        <h3
          className={`
            mb-12 text-center text-[40px]/[60px] line font-semibold
            text-[#0B3B3C]
          `}
        >
          What we can help with
        </h3>

        <SectionLayout
          className={`
            flex-col-reverse

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
        <SectionLayout>
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
