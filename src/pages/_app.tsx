import React from 'react';
import Suggestions from '@/components/Layout/Suggestion';  // Adjust the path accordingly
import { SearchProvider } from "@/features/hooks/useSearch";
import type { AppProps } from "next/app";
import Search from "@/components/Layout/Search";  // Adjust the path accordingly

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="relative">
      <Component {...pageProps} />
      <SearchProvider>
        <Search />
        <Suggestions />
      </SearchProvider>
    </main>
  );
}

