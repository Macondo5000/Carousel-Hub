'use client'

import { useMemo } from 'react'
import CarouselCard from './CarouselCard'
import { CarouselData } from '@/types/carousel'
import { sampleLinkedInPosts } from '@/data/samplePosts'

interface CarouselGridProps {
  selectedCategory: 'enterprise' | 'personal'
}

export default function CarouselGrid({ selectedCategory }: CarouselGridProps) {
  const filteredCarousels = useMemo(() => {
    return sampleLinkedInPosts.filter(carousel => carousel.category === selectedCategory)
  }, [selectedCategory])

  if (filteredCarousels.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-muted-foreground mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">No {selectedCategory === 'enterprise' ? 'enterprise' : 'personal'} content available</h3>
        <p className="text-muted-foreground">Please switch to another category to view content</p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCarousels.map((carousel) => (
          <CarouselCard key={carousel.id} carousel={carousel} />
        ))}
      </div>
    </div>
  )
}