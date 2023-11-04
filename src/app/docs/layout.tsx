import type { Metadata } from 'next'
import React from "react";

import Banner from "@/components/common/banner";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import '@/styles/main.css';
import PROMO_DATA from "@/lib/promo-data";

export const metadata: Metadata = {
  title: 'Frabit | The next-gen database automatic platform',
  description: 'The next-gen database automatic platform',
}

export default function DocLayout({ children,}: { children: React.ReactNode }) {
  return (
      <>
        <div lang="en" className='dark h-full'>
          {children}
        </div>
      </>
  )
}
