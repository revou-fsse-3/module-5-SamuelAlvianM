import React from 'react';
import Suggestions from '@/components/Layout/Suggestion';
import { SearchProvider } from "@/features/hooks/useSearch";
import type { AppProps } from "next/app";
import Search from "@/components/Layout/Search"; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
      <SearchProvider>
        <Search />
        <Suggestions />
      </SearchProvider>
    </main>
  );
}

