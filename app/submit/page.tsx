'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { PlusIcon, LinkIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    authorCompany: '',
    category: '',
    industry: '',
    tags: '',
    linkedinUrl: '',
    embedCode: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('内容提交成功！我们的团队会尽快审核并发布。')
    setIsSubmitting(false)
    
    // 重置表单
    setFormData({
      title: '',
      description: '',
      author: '',
      authorCompany: '',
      category: '',
      industry: '',
      tags: '',
      linkedinUrl: '',
      embedCode: '',
    })
  }

  const categories = [
    { id: 'marketing', name: '营销策略' },
    { id: 'design', name: '设计灵感' },
    { id: 'branding', name: '品牌建设' },
    { id: 'content', name: '内容创作' },
    { id: 'social-media', name: '社交媒体' },
    { id: 'business', name: '商业洞察' },
    { id: 'technology', name: '科技趋势' },
  ]

  const industries = [
    { id: 'tech', name: '科技' },
    { id: 'finance', name: '金融' },
    { id: 'healthcare', name: '医疗健康' },
    { id: 'education', name: '教育' },
    { id: 'retail', name: '零售' },
    { id: 'manufacturing', name: '制造业' },
    { id: 'consulting', name: '咨询' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            提交LinkedIn Carousel内容
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            分享您发现的优秀LinkedIn Carousel内容，帮助更多人获得灵感
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 基本信息 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <DocumentTextIcon className="h-5 w-5 mr-2 text-linkedin-500" />
                基本信息
              </h3>
              
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  标题 *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500"
                  placeholder="请输入Carousel的标题"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  描述 *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500"
                  placeholder="请简要描述这个Carousel的内容和价值"
                />
              </div>
            </div>

            {/* 作者信息 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">作者信息</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    作者姓名
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500"
                    placeholder="作者姓名"
                  />
                </div>

                <div>
                  <label htmlFor="authorCompany" className="block text-sm font-medium text-gray-700 mb-2">
                    公司/职位
                  </label>
                  <input
                    type="text"
                    id="authorCompany"
                    name="authorCompany"
                    value={formData.authorCompany}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500"
                    placeholder="公司名称或职位"
                  />
                </div>
              </div>
            </div>

            {/* 分类信息 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">分类信息</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    内容分类 *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500"
                  >
                    <option value="">请选择分类</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    行业领域
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500"
                  >
                    <option value="">请选择行业</option>
                    {industries.map((industry) => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  标签
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500"
                  placeholder="用逗号分隔多个标签，如：营销策略, 品牌建设, 内容创作"
                />
              </div>
            </div>

            {/* LinkedIn链接 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <LinkIcon className="h-5 w-5 mr-2 text-linkedin-500" />
                LinkedIn链接
              </h3>
              
              <div>
                <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn帖子链接 *
                </label>
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500"
                  placeholder="https://www.linkedin.com/posts/..."
                />
              </div>

              <div>
                <label htmlFor="embedCode" className="block text-sm font-medium text-gray-700 mb-2">
                  嵌入式代码 *
                </label>
                <textarea
                  id="embedCode"
                  name="embedCode"
                  value={formData.embedCode}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-linkedin-500 font-mono text-sm"
                  placeholder="<iframe src='https://www.linkedin.com/embed/feed/update/...' ...></iframe>"
                />
                <p className="mt-2 text-sm text-gray-500">
                  如何获取嵌入式代码？在LinkedIn帖子右上角点击下拉菜单，选择"嵌入此帖子"，然后复制生成的代码。
                </p>
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linkedin-500 hover:bg-linkedin-600 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    提交中...
                  </>
                ) : (
                  <>
                    <PlusIcon className="h-5 w-5 mr-2" />
                    提交内容
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* 提交指南 */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">提交指南</h3>
          <div className="space-y-3 text-sm text-blue-800">
            <p>• 确保LinkedIn帖子是公开的，可以被所有人访问</p>
            <p>• 内容应该对市场营销人员或设计师有启发价值</p>
            <p>• 标题和描述应该准确反映内容</p>
            <p>• 标签应该有助于内容被发现和分类</p>
            <p>• 我们会在24小时内审核并发布符合条件的内容</p>
          </div>
        </div>
      </div>
    </main>
  )
} 