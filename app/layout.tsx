import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PostProvider } from '@/contexts/PostContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LinkedIn Carousel Gallery - Marketing & Design Platform',
  description: 'Discover the best carousel content for marketers and designers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2063448278280890"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <PostProvider>
          {children}
        </PostProvider>
      </body>
    </html>
  )
} 