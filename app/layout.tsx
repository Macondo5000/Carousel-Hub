import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LinkedIn Carousel Gallery - Marketing & Design Inspiration Platform',
  description: 'Discover and share the best LinkedIn Carousel content to inspire marketers and designers',
  keywords: 'LinkedIn, Carousel, Marketing, Design, Inspiration, Social Media',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script 
          src="https://platform.linkedin.com/in.js" 
          type="text/javascript"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('message', function(event) {
                if (event.origin !== 'https://www.linkedin.com') return;
                
                if (event.data.type === 'resize') {
                  const iframe = document.querySelector('iframe[src*="linkedin.com/embed"]');
                  if (iframe && event.data.height) {
                    iframe.style.height = event.data.height + 'px';
                  }
                }
              });
            `
          }}
        />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2063448278280890"
          crossorigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 