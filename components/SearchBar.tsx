'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索LinkedIn Carousel内容，如：营销策略、设计灵感、品牌故事..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500 text-gray-900 placeholder-gray-500"
          />
        </div>
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-linkedin-500 hover:bg-linkedin-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          搜索
        </button>
      </form>
      
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <span className="text-sm text-gray-600">热门搜索：</span>
        {['营销策略', '品牌设计', '用户体验', '内容营销', '社交媒体'].map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setQuery(tag)
              onSearch(tag)
            }}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors duration-200"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
} 