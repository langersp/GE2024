import './globals.css'
import './style.css'
import './use.typekit.net_oty8kzu.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GE2024',
  description: 'GE2024',
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
