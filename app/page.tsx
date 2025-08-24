'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import CategoryToggle from '@/components/CategoryToggle'
import CarouselGrid from '@/components/CarouselGrid'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'enterprise' | 'personal'>('enterprise')

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 mt-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-gray-400 bg-clip-text text-transparent mb-4">
            LinkedIn Carousel Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the best carousel content for marketers and designers.
          </p>
          
          {/* Category Toggle */}
          <CategoryToggle
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Content Area */}
        <div className="mt-8">
          <CarouselGrid selectedCategory={selectedCategory} />
        </div>
      </div>
    </main>
  )
}