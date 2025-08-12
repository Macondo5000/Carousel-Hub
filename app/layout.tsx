import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LinkedIn Carousel Hub - 营销设计灵感聚合平台',
  description: '发现和分享LinkedIn上最优秀的Carousel内容，为市场营销人员和设计师提供灵感',
  keywords: 'LinkedIn, Carousel, 营销, 设计, 灵感, 社交媒体',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
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
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 