import './globals.css'
import './style.css'
import './use.typekit.net_oty8kzu.css'
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5654 Election Centre',
  description: '5654 Election Centre',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  )
  // return (
  //   <html lang="en">
  //     <body><div>Election Complete.</div></body>
  //   </html>)
}
