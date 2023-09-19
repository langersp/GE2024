import './globals.css'
import './style.css'
import './use.typekit.net_oty8kzu.css'

import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GE2024',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
