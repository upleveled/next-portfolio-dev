'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

type AllProvidersProps = {
  children: ReactNode;
};

const AllProviders = ({ children }: AllProvidersProps) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
);

export default AllProviders;
