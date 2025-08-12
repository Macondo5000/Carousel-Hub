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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setHasError(true)
      }
    }, 10000) // 10秒超时

    // 监听iframe加载
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://www.linkedin.com') {
        setIsLoaded(true)
        clearTimeout(timer)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('message', handleMessage)
    }
  }, [isLoaded])

  if (hasError) {
    return (
      <div className="w-full min-h-[400px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <h3 className="text-lg font-medium text-gray-600 mb-2">LinkedIn内容暂时无法加载</h3>
          <p className="text-sm text-gray-500 mb-4">
            这可能是由于网络连接或LinkedIn的安全策略导致的
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
            在LinkedIn上查看原帖
          </a>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full bg-gray-50 rounded-lg overflow-hidden relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-50 rounded-lg flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-linkedin-500 mx-auto mb-2"></div>
            <p className="text-sm text-gray-500">正在加载LinkedIn内容...</p>
          </div>
        </div>
      )}
      <div 
        className="w-full min-h-[400px] flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: embedCode }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}