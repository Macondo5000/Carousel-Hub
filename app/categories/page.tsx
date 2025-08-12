'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import CarouselCard from '@/components/CarouselCard'
import { CarouselData } from '@/types/carousel'
import { sampleLinkedInPosts } from '@/data/samplePosts'
import { 
  TagIcon, 
  ChartBarIcon, 
  BuildingOfficeIcon,
  LightBulbIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedIndustry, setSelectedIndustry] = useState('all')

  const categories = [
    {
      id: 'marketing',
      name: '营销策略',
      description: '数字营销、品牌营销、内容营销等策略和方法',
      icon: ChartBarIcon,
      color: 'bg-blue-500',
      count: 45,
      featured: true
    },
    {
      id: 'design',
      name: '设计灵感',
      description: 'UI/UX设计、平面设计、产品设计等创意灵感',
      icon: PaintBrushIcon,
      color: 'bg-purple-500',
      count: 32,
      featured: true
    },
    {
      id: 'branding',
      name: '品牌建设',
      description: '品牌定位、品牌故事、品牌管理等核心内容',
      icon: LightBulbIcon,
      color: 'bg-yellow-500',
      count: 28,
      featured: false
    },
    {
      id: 'content',
      name: '内容创作',
      description: '内容策略、文案写作、视觉内容等创作技巧',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-green-500',
      count: 36,
      featured: false
    },
    {
      id: 'social-media',
      name: '社交媒体',
      description: '社交媒体营销、平台运营、社区管理等',
      icon: GlobeAltIcon,
      color: 'bg-pink-500',
      count: 41,
      featured: false
    },
    {
      id: 'business',
      name: '商业洞察',
      description: '商业分析、市场趋势、商业模式等商业智慧',
      icon: BuildingOfficeIcon,
      color: 'bg-indigo-500',
      count: 23,
      featured: false
    },
    {
      id: 'technology',
      name: '科技趋势',
      description: '新兴技术、数字化转型、技术应用等前沿内容',
      icon: CpuChipIcon,
      color: 'bg-gray-500',
      count: 19,
      featured: false
    }
  ]

  const industries = [
    { id: 'tech', name: '科技', count: 38, color: 'bg-blue-100 text-blue-800' },
    { id: 'finance', name: '金融', count: 25, color: 'bg-green-100 text-green-800' },
    { id: 'healthcare', name: '医疗健康', count: 18, color: 'bg-red-100 text-red-800' },
    { id: 'education', name: '教育', count: 22, color: 'bg-purple-100 text-purple-800' },
    { id: 'retail', name: '零售', count: 31, color: 'bg-yellow-100 text-yellow-800' },
    { id: 'manufacturing', name: '制造业', count: 15, color: 'bg-gray-100 text-gray-800' },
    { id: 'consulting', name: '咨询', count: 29, color: 'bg-indigo-100 text-indigo-800' }
  ]

  // 使用多样化的示例LinkedIn帖子数据
  const mockCarousels: CarouselData[] = sampleLinkedInPosts.concat([
    {
      id: 'cat-1',
      title: 'Why Wide Research? - 技术趋势分析',
      description: '深度分析Wide Research在AI研究领域的关键趋势和机遇',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'technology',
      industry: 'tech',
      tags: ['AI研究', '技术趋势', 'Wide Research'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-15',
      featured: true,
    },
    {
      id: 'cat-2',
      title: 'Why Wide Research? - 设计原则探索',
      description: '探讨Wide Research在AI研究设计中的核心原则和方法论',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'design',
      industry: 'tech',
      tags: ['AI设计', '设计原则', '研究工具'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-14',
      featured: false,
    },
    {
      id: 'cat-3',
      title: 'Why Wide Research? - 品牌价值策略',
      description: '如何通过Wide Research建立强大的AI研究品牌连接',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'branding',
      industry: 'tech',
      tags: ['AI品牌', '技术价值', '研究连接'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-13',
      featured: true,
    },
    {
      id: 'cat-4',
      title: 'Why Wide Research? - 内容优化策略',
      description: '如何通过Wide Research优化AI研究内容，提升研究价值',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'content',
      industry: 'tech',
      tags: ['内容优化', 'AI研究', '价值提升'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-12',
      featured: false,
    },
    {
      id: 'cat-5',
      title: 'Why Wide Research? - 社交媒体应用',
      description: '基于Wide Research的社交媒体AI研究策略和技巧',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'social-media',
      industry: 'tech',
      tags: ['社交媒体', 'AI研究', '技术策略'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-11',
      featured: false,
    },
    {
      id: 'cat-6',
      title: 'Why Wide Research? - 商业决策支持',
      description: '如何利用Wide Research支持AI研究商业决策，提升竞争力',
      author: 'Manus AI',
      authorCompany: 'AI研究公司',
      authorAvatar: '/api/placeholder/40/40',
      category: 'business',
      industry: 'tech',
      tags: ['商业决策', 'AI研究', '竞争力提升'],
      linkedinUrl: 'https://www.linkedin.com/posts/manus-im_why-wide-research-activity-7357078925262376961-N-FD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbuZc0B01DmgKgx7tFxcRpiTe4IvLkYxHQ',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7357078924469702656?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      likes: 134,
      comments: 6,
      shares: 12,
      createdAt: '2024-01-10',
      featured: false,
    }
  ])

  // 过滤内容
  const filteredCarousels = mockCarousels.filter((carousel) => {
    const matchesCategory = selectedCategory === 'all' || carousel.category === selectedCategory
    const matchesIndustry = selectedIndustry === 'all' || carousel.industry === selectedIndustry
    return matchesCategory && matchesIndustry
  })

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory)

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TagIcon className="h-12 w-12 text-linkedin-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              分类浏览
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            按主题和行业探索LinkedIn Carousel内容，找到您需要的灵感和知识
          </p>
        </div>

        {/* 分类和行业筛选 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <TagIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">筛选</span>
            </div>
            
            {/* 分类筛选 */}
            <div className="relative">
              <button
                onClick={() => setSelectedCategory(selectedCategory === 'all' ? 'marketing' : selectedCategory === 'marketing' ? 'design' : selectedCategory === 'design' ? 'branding' : selectedCategory === 'branding' ? 'content' : selectedCategory === 'content' ? 'social-media' : selectedCategory === 'social-media' ? 'business' : selectedCategory === 'business' ? 'technology' : 'all')}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors duration-200"
              >
                <span>{categories.find(cat => cat.id === selectedCategory)?.name || '全部分类'}</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>

            {/* 行业筛选 */}
            <div className="relative">
              <button
                onClick={() => setSelectedIndustry(selectedIndustry === 'all' ? 'tech' : selectedIndustry === 'tech' ? 'finance' : selectedIndustry === 'finance' ? 'healthcare' : selectedIndustry === 'healthcare' ? 'education' : selectedIndustry === 'education' ? 'retail' : selectedIndustry === 'retail' ? 'manufacturing' : selectedIndustry === 'manufacturing' ? 'consulting' : 'all')}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors duration-200"
              >
                <span>{industries.find(ind => ind.id === selectedIndustry)?.name || '全行业'}</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 内容展示 */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategoryData ? selectedCategoryData.name : '全部'} 内容
              </h2>
              <p className="text-gray-600">
                找到 {filteredCarousels.length} 个相关内容
                {selectedCategory !== 'all' && selectedCategoryData && (
                  <span className="ml-2">• {selectedCategoryData.description}</span>
                )}
              </p>
            </div>
            
            <div className="text-sm text-gray-500">
              更新时间: {new Date().toLocaleString('zh-CN')}
            </div>
          </div>

          {filteredCarousels.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-200">
              <TagIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">暂无相关内容</h3>
              <p className="text-gray-600">尝试调整分类或行业筛选条件</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCarousels.map((carousel) => (
                <CarouselCard key={carousel.id} carousel={carousel} />
              ))}
            </div>
          )}
        </div>

        {/* 分类统计 */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">分类统计概览</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.id} className="text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{category.name}</div>
                  <div className="text-xs text-gray-500">{category.count} 个内容</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
} 