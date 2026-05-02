import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'APIDrift Demo - Broken Checkout',
  description: 'Demonstrating API contract drift',
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

// Made with Bob
