import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import SectionInfo from '@/components/SectionInfo';
import SectionLayout from '@/components/SectionLayout';

const Home: FC = () => {
  return (
    <div
      className={`
        mx-auto flex max-w-7xl flex-col items-center justify-center
        font-tt-norms
      `}
    >
      <header
        className={`
          relative

          lg:bg-yellow-500

          md:bg-blue-500

          sm:w-full sm:bg-red-500

          xl:h-[750px] xl:bg-green-600
        `}
      >
        <Link
          className="relative z-10 ml-32 mt-8 inline-block"
          href="https://manual.co"
          target="_blank"
        >
          <Image
            alt="Logo Manual"
            height={40}
            priority
            src="/images/logo-manual.svg"
            style={{ objectFit: 'contain' }}
            width={40}
          />
        </Link>

        <Image
          alt="Header Image"
          fill
          priority // Preload the image (optional, for above-the-fold images)
          quality={75} // Adjust image quality (optional)
          src="/images/header-background-image.png"
          style={{ objectFit: 'contain' }}
        />

        <div
          className={`
            absolute inset-0 left-0 flex w-full flex-col items-start
            justify-center text-white
          `}
        >
          <article className="ml-32 w-[430px]">
            <h2 className="text-[90px]/[90px] font-bold text-[#0B3B3C]">Be good to yourself</h2>
            <p className="mt-4 text-[18px]/[30px] text-[#0B3B3C]">
              We’re working around the clock to bring you a holistic approach to your wellness. From
              top to bottom, inside and out.
            </p>
            <button
              aria-label="open quiz"
              className={`
                mt-6 bg-[#7E0707] px-6 py-2 text-[10px]/[15px] uppercase
              `}
              type="button"
            >
              Take the Quiz
            </button>
          </article>
        </div>
      </header>

      {/* Content Section */}
      <main className="bg-white py-16">
        <h3
          className={`
            mb-12 text-center text-[40px]/[60px] line font-semibold
            text-[#0B3B3C]
          `}
        >
          What we can help with
        </h3>

        <div>
          <SectionLayout
            left={
              <Image
                alt="Erectile dysfunction"
                height={445}
                priority // Preload the image (optional, for above-the-fold images)
                quality={75} // Adjust image quality (optional)
                src="/images/hair-loss.jpg"
                style={{ objectFit: 'contain' }}
                width={370}
              />
            }
            rigth={
              <SectionInfo
                content="Hair loss needn’t be irreversible. We can help! We’re working around the clock to
              bring you a holistic approach to your wellness. From top to bottom, inside and out."
                subtitle="Hair loss needn’t be irreversible. We can help! "
                title="Hair loss"
              />
            }
            sectionNumber="01"
          />

          <div
            className={`
              mx-auto flex w-full flex-col items-center justify-around bg-white
              shadow-lg

              before:absolute before:left-[15%] before:text-[450px]
              before:text-[#F3F7F4] before:content-[attr(section-number)]

              md:flex-row
            `}
            section-number="02"
          >
            <div
              className={`
                z-10 text-center

                md:w-1/3 md:text-left
              `}
            >
              <h6 className="text-xxs font-semibold uppercase text-[#6D8A83]">
                Erectile Dysfunction
              </h6>
              <h4
                className={`
                  mt-2 text-[28px]/[40px] font-bold text-[#0B3B3C] text-2-1xl
                `}
              >
                Erections can be a tricky thing. But no need to feel down!
              </h4>
              <p className="mt-4 text-[18px]/[30px] text-[#0B3B3C]">
                We’re working around the clock to bring you a holistic approach to your wellness.
                From top to bottom, inside and out.
              </p>
            </div>
            <div
              className={`
                z-10 mt-6 flex justify-center

                md:mt-0 md:w-1/3
              `}
            >
              <Image
                alt="Erectile dysfunction"
                height={445}
                priority // Preload the image (optional, for above-the-fold images)
                quality={75} // Adjust image quality (optional)
                src="/images/erectile-dysfunction.jpg"
                style={{ objectFit: 'contain' }}
                width={370}
              />
            </div>
          </div>
        </div>
      </main>

      <footer
        className={`
          w-full bg-[#E8EFE9] px-6 py-8 text-[#0B3B3C]

          md:px-12
        `}
      >
        <div
          className={`
            mx-auto grid grid-cols-1 gap-6

            md:grid-cols-4
          `}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link
              className="relative z-10 ml-32 mt-8 inline-block"
              href="https://manual.co"
              target="_blank"
            >
              <Image
                alt="Logo Manual"
                height={75}
                priority
                src="/images/logo-manual.svg"
                style={{ objectFit: 'contain' }}
                width={75}
              />
            </Link>
          </div>

          {/* Product Section */}
          <nav>
            <h3 className="mb-2 text-xxs font-tt-norms-bold uppercase">Product</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:underline" href="#">
                  Popular
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Trending
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Guided
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Products
                </a>
              </li>
            </ul>
          </nav>

          {/* Company Section */}
          <nav>
            <h3 className="mb-2 text-xxs font-tt-norms-bold uppercase">Company</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:underline" href="#">
                  Press
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Mission
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Strategy
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  About
                </a>
              </li>
            </ul>
          </nav>

          {/* Info Section */}
          <nav>
            <h3 className="mb-2 text-xxs font-tt-norms-bold uppercase">Info</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:underline" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Customer Service
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div
          className={`
            mt-6 flex flex-col items-center justify-between border-t pt-4
            text-sm

            md:flex-row
          `}
        >
          <p>&copy; 2024 Manual. All rights reserved</p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a aria-label="Facebook" className="hover:text-gray-900" href="#">
              {/* <FaFacebookF /> */}
              <span>FaFacebo</span>
            </a>
            <a aria-label="Google" className="hover:text-gray-900" href="#">
              {/* <FaGoogle /> */}
              <span>FaGoogle</span>
            </a>
            <a aria-label="Twitter" className="hover:text-gray-900" href="#">
              {/* <FaTwitter /> */}
              <span>FaTwitte</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
