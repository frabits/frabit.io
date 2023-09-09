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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const topBanner = PROMO_DATA.TOP_BANNER
  return (
    <html lang="en" className='dark h-full'>
      <body>
        <div className='relative bg-zinc-800 flex min-h-screen flex-col'>
          <Header />
          <main className=''>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
