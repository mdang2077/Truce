import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'APIDrift - API Drift Detector & Sync Agent',
  description: 'Bob catches API drift before your users do',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}

// Made with Bob
