import type { Metadata } from 'next'
import React from "react";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import '@/styles/main.css';

export const metadata: Metadata = {
  title: 'Frabit | The next-gen database automatic platform',
  description: 'The next-gen database automatic platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='dark h-full'>
      <body>
        <div className='relative bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 flex min-h-screen flex-col'>
          <Header />
          <main className=''>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
