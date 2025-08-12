'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import CarouselGrid from '@/components/CarouselGrid'
import FilterPanel from '@/components/FilterPanel'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedSort, setSelectedSort] = useState('latest')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry)
  }

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            发现LinkedIn上最优秀的Carousel内容
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            为市场营销人员和设计师提供灵感的聚合平台，探索来自各行各业的优秀内容
          </p>
        </div>

        <div className="mt-8">
          <FilterPanel 
            selectedCategory={selectedCategory}
            selectedIndustry={selectedIndustry}
            selectedSort={selectedSort}
            onCategoryChange={handleCategoryChange}
            onIndustryChange={handleIndustryChange}
            onSortChange={handleSortChange}
          />
          
          <CarouselGrid 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            selectedIndustry={selectedIndustry}
            selectedSort={selectedSort}
          />
        </div>
      </div>
    </main>
  )
} 