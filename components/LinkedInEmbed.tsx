'use client'

import { useState, useEffect, useRef } from 'react'

interface LinkedInEmbedProps {
  embedCode: string
  linkedinUrl: string
}

export default function LinkedInEmbed({ embedCode, linkedinUrl }: LinkedInEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // 如果没有嵌入代码，直接显示占位符
  if (!embedCode || embedCode.trim() === '') {
           return (
         <div className="w-full min-h-[450px] bg-muted rounded-lg border border-border flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-linkedin-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">LinkedIn Content</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Click the link below to view the complete LinkedIn post
          </p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-linkedin-500 hover:bg-linkedin-600 text-white rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            查看LinkedIn原帖
          </a>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setHasError(true)
      }
    }, 8000) // 8秒超时

    // 监听iframe加载事件
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://www.linkedin.com') {
        console.log('LinkedIn iframe loaded successfully')
        setIsLoaded(true)
        clearTimeout(timer)
      }
    }

    // 监听iframe的load事件
    const handleIframeLoad = () => {
      console.log('iframe load event triggered')
      // 给一点延迟让LinkedIn内容完全加载
      setTimeout(() => {
        setIsLoaded(true)
        clearTimeout(timer)
      }, 1000)
    }

    window.addEventListener('message', handleMessage)
    
    // 监听所有iframe的load事件
    const iframes = document.querySelectorAll('iframe[src*="linkedin.com"]')
    iframes.forEach(iframe => {
      iframe.addEventListener('load', handleIframeLoad)
    })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('message', handleMessage)
      iframes.forEach(iframe => {
        iframe.removeEventListener('load', handleIframeLoad)
      })
    }
  }, [isLoaded])

  if (hasError) {
          return (
        <div className="w-full min-h-[450px] bg-muted rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <h3 className="text-lg font-medium text-foreground mb-2">LinkedIn content temporarily unavailable</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This may be due to network connection issues or LinkedIn's security policies
          </p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-linkedin-500 hover:bg-linkedin-600 text-white rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View on LinkedIn
          </a>
        </div>
      </div>
    )
  }

      return (
      <div ref={containerRef} className="w-full bg-muted rounded-lg overflow-hidden relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
            <p className="text-sm text-muted-foreground">Loading LinkedIn content...</p>
          </div>
        </div>
      )}
      <div 
        className="w-full min-h-[450px] flex items-center justify-center overflow-hidden linkedin-embed-container"
        dangerouslySetInnerHTML={{ 
          __html: embedCode.replace(
            /width="[^"]*"/g, 'width="100%"'
          ).replace(
            /height="[^"]*"/g, 'height="450"'
          ).replace(
            /style="[^"]*"/g, ''
          ) + `<style>
            iframe { 
              width: 100% !important; 
              min-height: 450px !important; 
              pointer-events: none !important;
            }
            .linkedin-embed-container {
              pointer-events: none;
            }
            .linkedin-embed-container iframe {
              pointer-events: none !important;
            }
          </style>`
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}