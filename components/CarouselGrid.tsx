'use client'

import { useState, useEffect } from 'react'
import CarouselCard from './CarouselCard'
import { CarouselData } from '@/types/carousel'

interface CarouselGridProps {
  searchQuery: string
  selectedCategory: string
  selectedIndustry: string
  selectedSort: string
}

export default function CarouselGrid({
  searchQuery,
  selectedCategory,
  selectedIndustry,
  selectedSort,
}: CarouselGridProps) {
  const [carousels, setCarousels] = useState<CarouselData[]>([])
  const [loading, setLoading] = useState(true)

  // 真实LinkedIn帖子数据
  const mockCarousels: CarouselData[] = [
    {
      id: '1',
      title: 'Why Wide Research? - Manus AI的深度研究',
      description: '探索Wide Research的优势、应用场景以及我们如何优化成本并防止信用过度使用',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'technology',
      industry: 'tech',
      tags: ['AI研究', 'Wide Research', '成本优化', '信用管理'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-15',
      featured: true,
    },
    {
      id: '2',
      title: 'Why Wide Research? - 技术优势分析',
      description: '深入了解Wide Research的技术优势和在AI研究领域的应用价值',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'technology',
      industry: 'tech',
      tags: ['AI技术', '研究工具', '技术创新', 'AI应用'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-14',
      featured: false,
    },
    {
      id: '3',
      title: 'Why Wide Research? - 成本优化策略',
      description: 'Manus AI如何通过技术创新优化研究成本，提升研究效率',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'business',
      industry: 'tech',
      tags: ['成本优化', '效率提升', 'AI研究', '技术创新'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-13',
      featured: true,
    },
    {
      id: '4',
      title: 'Why Wide Research? - 应用场景探索',
      description: '探索Wide Research在不同领域的应用场景和实际价值',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'technology',
      industry: 'tech',
      tags: ['应用场景', 'AI研究', '技术应用', '行业价值'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-12',
      featured: false,
    },
    {
      id: '5',
      title: 'Why Wide Research? - 信用管理机制',
      description: '了解Manus AI如何建立有效的信用管理机制，防止过度使用',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'business',
      industry: 'tech',
      tags: ['信用管理', '风险控制', 'AI研究', '平台治理'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-11',
      featured: false,
    },
    {
      id: '6',
      title: 'Why Wide Research? - 未来发展方向',
      description: '探索Manus AI Wide Research技术的未来发展方向和潜在影响',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'technology',
      industry: 'tech',
      tags: ['未来趋势', 'AI发展', '技术前景', '创新方向'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-10',
      featured: true,
    },
  ]

  useEffect(() => {
    // 模拟API调用延迟
    const timer = setTimeout(() => {
      setCarousels(mockCarousels)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // 过滤和搜索逻辑
  const filteredCarousels = carousels.filter((carousel) => {
    const matchesSearch = searchQuery === '' || 
      carousel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      carousel.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      carousel.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || carousel.category === selectedCategory
    const matchesIndustry = selectedIndustry === 'all' || carousel.industry === selectedIndustry
    
    return matchesSearch && matchesCategory && matchesIndustry
  })

  // 排序逻辑
  const sortedCarousels = [...filteredCarousels].sort((a, b) => {
    switch (selectedSort) {
      case 'latest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case 'popular':
        return (b.likes + b.comments + b.shares) - (a.likes + a.comments + a.shares)
      case 'featured':
        return Number(b.featured) - Number(a.featured)
      default:
        return 0
    }
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-linkedin-500"></div>
      </div>
    )
  }

  return (
    <div>
              <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-900">
              发现灵感 ({sortedCarousels.length})
            </h2>
            {searchQuery && (
              <span className="text-sm text-gray-600">
                搜索: "{searchQuery}"
              </span>
            )}
          </div>
        </div>

      {sortedCarousels.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">未找到相关内容</h3>
          <p className="text-gray-600">尝试调整搜索条件或筛选器</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCarousels.map((carousel) => (
            <CarouselCard key={carousel.id} carousel={carousel} />
          ))}
        </div>
      )}
    </div>
  )
} 