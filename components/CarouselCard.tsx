'use client'

import { CarouselData } from '@/types/carousel'
import LinkedInEmbed from './LinkedInEmbed'

interface CarouselCardProps {
  carousel: CarouselData
}

export default function CarouselCard({ carousel }: CarouselCardProps) {
  return (
    <div className="carousel-card overflow-hidden">
      {/* LinkedIn嵌入式帖子 */}
      <div className="p-4">
        <LinkedInEmbed 
          embedCode={carousel.embedCode}
          linkedinUrl={carousel.linkedinUrl}
        />
      </div>

      {/* CTA Button */}
      <div className="px-4 py-3 border-t border-border">
        <a
          href={carousel.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200 flex items-center justify-center"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          View on LinkedIn →
        </a>
      </div>
    </div>
  )
} 