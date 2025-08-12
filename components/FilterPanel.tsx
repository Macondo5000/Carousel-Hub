'use client'

import { useState } from 'react'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline'

interface FilterPanelProps {
  selectedCategory: string
  selectedIndustry: string
  selectedSort: string
  onCategoryChange: (category: string) => void
  onIndustryChange: (industry: string) => void
  onSortChange: (sort: string) => void
}

export default function FilterPanel({
  selectedCategory,
  selectedIndustry,
  selectedSort,
  onCategoryChange,
  onIndustryChange,
  onSortChange,
}: FilterPanelProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const categories = [
    { id: 'all', name: '全部分类', count: 0 },
    { id: 'marketing', name: '营销策略', count: 45 },
    { id: 'design', name: '设计灵感', count: 32 },
    { id: 'branding', name: '品牌建设', count: 28 },
    { id: 'content', name: '内容创作', count: 36 },
    { id: 'social-media', name: '社交媒体', count: 41 },
    { id: 'business', name: '商业洞察', count: 23 },
    { id: 'technology', name: '科技趋势', count: 19 },
  ]

  const industries = [
    { id: 'all', name: '全行业', count: 0 },
    { id: 'tech', name: '科技', count: 38 },
    { id: 'finance', name: '金融', count: 25 },
    { id: 'healthcare', name: '医疗健康', count: 18 },
    { id: 'education', name: '教育', count: 22 },
    { id: 'retail', name: '零售', count: 31 },
    { id: 'manufacturing', name: '制造业', count: 15 },
    { id: 'consulting', name: '咨询', count: 29 },
  ]

  const getSelectedCategoryName = () => {
    const category = categories.find(cat => cat.id === selectedCategory)
    return category ? category.name : '全部分类'
  }

  const getSelectedIndustryName = () => {
    const industry = industries.find(ind => ind.id === selectedIndustry)
    return industry ? industry.name : '全行业'
  }

  const getSelectedSortName = () => {
    const sortOptions = [
      { id: 'latest', name: '最新' },
      { id: 'popular', name: '最受欢迎' },
      { id: 'featured', name: '精选推荐' }
    ]
    const sort = sortOptions.find(s => s.id === selectedSort)
    return sort ? sort.name : '最新'
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-600">
          <FunnelIcon className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">筛选</span>
        </div>
        
        {/* 分类筛选 */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('category')}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors duration-200"
          >
            <span>{getSelectedCategoryName()}</span>
            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${openDropdown === 'category' ? 'rotate-180' : ''}`} />
          </button>
          
          {openDropdown === 'category' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              <div className="py-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      onCategoryChange(category.id)
                      setOpenDropdown(null)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                      selectedCategory === category.id ? 'text-linkedin-600 bg-linkedin-50' : 'text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      {category.count > 0 && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 行业筛选 */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('industry')}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors duration-200"
          >
            <span>{getSelectedIndustryName()}</span>
            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${openDropdown === 'industry' ? 'rotate-180' : ''}`} />
          </button>
          
          {openDropdown === 'industry' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              <div className="py-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => {
                      onIndustryChange(industry.id)
                      setOpenDropdown(null)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                      selectedIndustry === industry.id ? 'text-linkedin-600 bg-linkedin-50' : 'text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{industry.name}</span>
                      {industry.count > 0 && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {industry.count}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 排序筛选 */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('sort')}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors duration-200"
          >
            <span>{getSelectedSortName()}</span>
            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${openDropdown === 'sort' ? 'rotate-180' : ''}`} />
          </button>
          
          {openDropdown === 'sort' && (
            <div className="absolute top-full left-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              <div className="py-2">
                {[
                  { id: 'latest', name: '最新' },
                  { id: 'popular', name: '最受欢迎' },
                  { id: 'featured', name: '精选推荐' }
                ].map((sort) => (
                  <button
                    key={sort.id}
                    onClick={() => {
                      onSortChange(sort.id)
                      setOpenDropdown(null)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                      selectedSort === sort.id ? 'text-linkedin-600 bg-linkedin-50' : 'text-gray-700'
                    }`}
                  >
                    {sort.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 