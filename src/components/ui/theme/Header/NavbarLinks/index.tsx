'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import ToggleTheme from '../ToggleTheme';

type NavbarLinksProps = {
  desktop?: boolean;
};

const NavbarLinks = ({ desktop }: NavbarLinksProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- TODO: Re-enable when eslint-config-upleveled releases fixed version https://github.com/upleveled/eslint-config-upleveled/pull/554
    setHasMounted(!!ref.current);
  }, []);

  return (
    <div
      className={clsx({
        'items-center hidden lg:flex': desktop,
        'p-12 flex flex-col': !desktop,
      })}
      ref={ref}
    >
      <Link
        href={`${pathname}#about`}
        className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black min-[2170px]:dark:text-white"
        scroll
      >
        About
      </Link>
      <Link
        href={`${pathname}#projects`}
        className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black min-[2170px]:dark:text-white"
        scroll
      >
        Projects
      </Link>
      <Link
        href={`${pathname}#contact`}
        className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black min-[2170px]:dark:text-white"
        scroll
      >
        Contact
      </Link>
      {hasMounted && <ToggleTheme />}
    </div>
  );
};

export default NavbarLinks;
