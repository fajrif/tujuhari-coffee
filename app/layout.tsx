import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { siteMeta } from '@/lib/site-config'
import './globals.css'

const nbInternational = localFont({
  src: [
    { path: './fonts/nb-international-regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/nb-international-bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-nb-international',
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nbInternational.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
