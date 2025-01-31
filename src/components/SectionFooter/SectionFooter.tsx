import Image from 'next/image';
import Link from 'next/link';

const year = new Date().getFullYear();

interface FooterData {
  id: string;
  links: {
    href: string;
    id: string;
    text: string;
  }[];
  title: string;
}

const footerData: FooterData[] = [
  {
    id: '1',
    links: [
      { href: '#', id: '1', text: 'Popular' },
      { href: '#', id: '2', text: 'Trending' },
      { href: '#', id: '3', text: 'Guided' },
      { href: '#', id: '4', text: 'Products' },
    ],
    title: 'Product',
  },
  {
    id: '2',
    links: [
      { href: '#', id: '2', text: 'Press' },
      { href: '#', id: '3', text: 'Mission' },
      { href: '#', id: '4', text: 'Strategy' },
      { href: '#', id: '5', text: 'About' },
    ],
    title: 'Company',
  },
  {
    id: '3',
    links: [
      { href: '#', id: '6', text: 'Support' },
      { href: '#', id: '7', text: 'Customer Service' },
      { href: '#', id: '8', text: 'Get Started' },
    ],
    title: 'Info',
  },
];

const SectionFooter = () => {
  return (
    <footer
      className={`
        w-full bg-[#E8EFE9] px-6 py-8 text-[#0B3B3C]

        md:px-12
      `}
    >
      <div
        className={`
          mx-auto grid grid-cols-2 gap-6

          md:grid-cols-[2fr_1fr_1fr_1fr_1fr]
        `}
      >
        {/* Logo */}
        <div
          className={`
            col-span-full flex items-center

            md:col-span-1
          `}
        >
          <Link className="relative inline-block shrink-0" href="https://manual.co" target="_blank">
            <Image
              alt="Logo Manual"
              height={75}
              priority
              src="/images/logo-manual.svg"
              width={75}
            />
          </Link>
        </div>

        {footerData.map((data) => (
          <nav className="w-full" key={data.id}>
            <h3 className="mb-2 text-xxs font-tt-norms-bold uppercase">{data.title}</h3>
            <ul className="space-y-1">
              {data.links.map((link) => (
                <li key={link.id}>
                  <a className="hover:underline" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav className="w-full">
          <h3 className="mb-2 text-xxs font-tt-norms-bold uppercase">Follow Us</h3>
          <ul className="flex items-center space-x-3">
            <li>
              <a aria-label="Facebook" href="#">
                <Image
                  alt="Logo Facebook"
                  height={24}
                  src="/images/logos/logo-facebook.svg"
                  width={24}
                />
              </a>
            </li>
            <li>
              <a aria-label="Google" href="#">
                <Image
                  alt="Logo Google"
                  height={24}
                  src="/images/logos/logo-google.svg"
                  width={24}
                />
              </a>
            </li>
            <li>
              <a aria-label="Twitter" href="#">
                <Image
                  alt="Logo Twitter"
                  height={24}
                  src="/images/logos/logo-twitter.svg"
                  width={24}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div
        className={`
          mt-6 flex flex-col items-center justify-between border-t pt-4 text-sm

          md:flex-row
        `}
      >
        <p>&copy; {year} Manual. All rights reserved</p>
      </div>
    </footer>
  );
};

export default SectionFooter;
