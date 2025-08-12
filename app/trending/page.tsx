'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import CarouselCard from '@/components/CarouselCard'
import { CarouselData } from '@/types/carousel'
import { FireIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/outline'

export default function TrendingPage() {
  const [trendingCarousels, setTrendingCarousels] = useState<CarouselData[]>([])
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('week')

  // 真实LinkedIn热门帖子数据
  const mockTrendingCarousels: CarouselData[] = [
    {
      id: 'trending-1',
      title: 'Why Wide Research? - 热门AI研究话题',
      description: '探索Wide Research的优势、应用场景以及我们如何优化成本并防止信用过度使用',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'technology',
      industry: 'tech',
      tags: ['AI研究', 'Wide Research', '热门话题', '技术创新'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-10',
      featured: true,
    },
    {
      id: 'trending-2',
      title: 'Why Wide Research? - AI技术深度解析',
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
      createdAt: '2024-01-12',
      featured: true,
    },
    {
      id: 'trending-3',
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
      createdAt: '2024-01-11',
      featured: true,
    },
    {
      id: 'trending-4',
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
      createdAt: '2024-01-13',
      featured: false,
    },
    {
      id: 'trending-5',
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
      createdAt: '2024-01-09',
      featured: false,
    },
    {
      id: 'trending-6',
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
      createdAt: '2024-01-08',
      featured: false,
    },
  ]

  useEffect(() => {
    // 模拟API调用延迟
    const timer = setTimeout(() => {
      setTrendingCarousels(mockTrendingCarousels)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // 根据时间范围筛选内容
  const getFilteredCarousels = () => {
    const now = new Date()
    const timeRanges = {
      day: 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
    }

    if (timeRange === 'all') {
      return trendingCarousels
    }

    return trendingCarousels.filter(carousel => {
      const postDate = new Date(carousel.createdAt)
      return now.getTime() - postDate.getTime() <= timeRanges[timeRange as keyof typeof timeRanges]
    })
  }

  const filteredCarousels = getFilteredCarousels()

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-linkedin-500"></div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FireIcon className="h-12 w-12 text-orange-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              热门内容
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            发现LinkedIn上最受欢迎和讨论度最高的Carousel内容
          </p>
        </div>

        {/* 时间范围筛选 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center space-x-4">
            <ChartBarIcon className="h-5 w-5 text-linkedin-500" />
            <span className="text-sm font-medium text-gray-900">热门时间范围</span>
            
            <div className="flex space-x-2">
              {[
                { value: 'day', label: '24小时', icon: '🔥' },
                { value: 'week', label: '本周', icon: '📈' },
                { value: 'month', label: '本月', icon: '⭐' },
                { value: 'all', label: '全部', icon: '🌟' },
              ].map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    timeRange === range.value
                      ? 'bg-linkedin-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{range.icon}</span>
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 热门统计 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-linkedin-500 mb-2">
              {filteredCarousels.length}
            </div>
            <div className="text-sm text-gray-600">热门内容</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">
              {filteredCarousels.reduce((sum, carousel) => sum + carousel.likes, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">总点赞数</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {filteredCarousels.reduce((sum, carousel) => sum + carousel.comments, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">总评论数</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">
              {filteredCarousels.reduce((sum, carousel) => sum + carousel.shares, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">总分享数</div>
          </div>
        </div>

        {/* 热门内容展示 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <StarIcon className="h-6 w-6 text-yellow-500 mr-2" />
              热门内容 ({filteredCarousels.length})
            </h2>
            
            <div className="text-sm text-gray-600">
              按热度排序 • 更新时间: {new Date().toLocaleString('zh-CN')}
            </div>
          </div>

          {filteredCarousels.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-gray-400 mb-4">
                <FireIcon className="mx-auto h-12 w-12" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">暂无热门内容</h3>
              <p className="text-gray-600">在选定的时间范围内还没有足够热度的内容</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCarousels.map((carousel, index) => (
                <div key={carousel.id} className="relative">
                  {/* 热门排名标识 */}
                  {index < 3 && (
                    <div className="absolute -top-3 -left-3 z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                        index === 0 ? 'bg-yellow-500' : 
                        index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                  )}
                  <CarouselCard carousel={carousel} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 热门标签 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">热门标签</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { tag: '营销策略', count: 156 },
              { tag: '设计灵感', count: 134 },
              { tag: '品牌建设', count: 98 },
              { tag: '内容营销', count: 87 },
              { tag: '用户体验', count: 76 },
              { tag: '数据分析', count: 65 },
              { tag: '社交媒体', count: 54 },
              { tag: '创新思维', count: 43 },
            ].map((item) => (
              <div
                key={item.tag}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full cursor-pointer transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{item.tag}</span>
                <span className="text-xs bg-linkedin-500 text-white px-2 py-1 rounded-full">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 