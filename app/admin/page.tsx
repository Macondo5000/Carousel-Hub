'use client'

import { useState, useEffect } from 'react'
import { TrashIcon, PlusIcon } from '@heroicons/react/24/outline'

interface LinkedInPost {
  id: string
  embedCode: string
  linkedinUrl: string
}

export default function AdminPage() {
  const [posts, setPosts] = useState<LinkedInPost[]>([
    {
      id: '1',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7354165331696783360?collapsed=1" height="450" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      linkedinUrl: 'https://www.linkedin.com/posts/activity-7354165331696783360'
    },
    {
      id: '2',
      embedCode: '',
      linkedinUrl: ''
    },
    {
      id: '3',
      embedCode: '',
      linkedinUrl: ''
    },
    {
      id: '4',
      embedCode: '',
      linkedinUrl: ''
    },
    {
      id: '5',
      embedCode: '',
      linkedinUrl: ''
    },
    {
      id: '6',
      embedCode: '',
      linkedinUrl: ''
    }
  ])

  const updatePost = (id: string, field: 'embedCode' | 'linkedinUrl', value: string) => {
    setPosts(prev => prev.map(post => 
      post.id === id ? { ...post, [field]: value } : post
    ))
  }

  const addPost = () => {
    const newId = (posts.length + 1).toString()
    setPosts(prev => [...prev, { id: newId, embedCode: '', linkedinUrl: '' }])
  }

  const removePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id))
  }

  const generateCode = () => {
    // 生成所有帖子，包括空的帖子
    const codeTemplate = `import { CarouselData } from '@/types/carousel'

export const sampleLinkedInPosts: CarouselData[] = [
${posts.map((post, index) => `  {
    id: '${post.id}',
    title: 'LinkedIn精彩内容分享 ${index + 1}',
    description: '查看这个真实的LinkedIn帖子内容',
    author: 'LinkedIn User',
    authorCompany: 'Professional Network',
    authorAvatar: '/api/placeholder/40/40',
    category: 'technology',
    industry: 'tech',
    tags: ['LinkedIn', '内容分享'],
    linkedinUrl: '${post.linkedinUrl || 'https://www.linkedin.com/posts/example'}',
    embedCode: '${(post.embedCode || '').replace(/'/g, "\\'")}',
    likes: ${Math.floor(Math.random() * 500) + 50},
    comments: ${Math.floor(Math.random() * 50) + 5},
    shares: ${Math.floor(Math.random() * 100) + 10},
    createdAt: '2024-01-${String(15 - index).padStart(2, '0')}',
    featured: ${index === 0 ? 'true' : 'false'},
  }`).join(',\n')}
]`

    return codeTemplate
  }

  const resetPosts = () => {
    if (confirm('确定要重置为6个空帖子吗？这将清除当前所有数据。')) {
      setPosts([
        {
          id: '1',
          embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7354165331696783360?collapsed=1" height="450" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
          linkedinUrl: 'https://www.linkedin.com/posts/activity-7354165331696783360'
        },
        ...Array.from({ length: 5 }, (_, i) => ({
          id: (i + 2).toString(),
          embedCode: '',
          linkedinUrl: ''
        }))
      ])
    }
  }

  const loadCurrentPosts = async () => {
    try {
      const response = await fetch('/api/get-posts')
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts || posts)
      }
    } catch (error) {
      console.error('Failed to load current posts:', error)
    }
  }

  useEffect(() => {
    loadCurrentPosts()
  }, [])

  const updateFile = async () => {
    const code = generateCode()
    
    try {
      const response = await fetch('/api/update-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      })
      
      if (response.ok) {
        alert('✅ 数据已更新！页面将自动刷新。')
        window.location.reload()
      } else {
        alert('❌ 更新失败，请检查数据格式')
      }
    } catch (error) {
      console.error('Update error:', error)
      alert('❌ 更新失败，请检查网络连接')
    }
  }

  const copyCode = () => {
    const code = generateCode()
    navigator.clipboard.writeText(code)
    alert('📋 代码已复制到剪贴板！')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            LinkedIn帖子管理工具
          </h1>
          <p className="text-gray-600 mb-4">
            填写LinkedIn帖子的嵌入代码和链接，自动更新到首页
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={updateFile}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              🚀 更新到首页
            </button>
            <button
              onClick={copyCode}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              📋 复制代码
            </button>
            <button
              onClick={addPost}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center"
            >
              <PlusIcon className="w-4 h-4 mr-1" />
              添加帖子
            </button>
            <button
              onClick={loadCurrentPosts}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              📥 加载当前数据
            </button>
            <button
              onClick={resetPosts}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              🔄 重置为6个帖子
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  帖子 #{index + 1}
                </h3>
                {posts.length > 1 && (
                  <button
                    onClick={() => removePost(post.id)}
                    className="text-red-600 hover:text-red-700 p-1"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn嵌入代码 (iframe)
                  </label>
                  <textarea
                    value={post.embedCode}
                    onChange={(e) => updatePost(post.id, 'embedCode', e.target.value)}
                    placeholder="<iframe src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:...' height='450' width='100%' frameborder='0' allowfullscreen='' title='Embedded post'></iframe>"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn帖子链接
                  </label>
                  <input
                    type="url"
                    value={post.linkedinUrl}
                    onChange={(e) => updatePost(post.id, 'linkedinUrl', e.target.value)}
                    placeholder="https://www.linkedin.com/posts/username_activity-123456789"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  
                  {post.linkedinUrl && (
                    <div className="mt-2">
                      <a
                        href={post.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm"
                      >
                        🔗 测试链接
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {post.embedCode && post.linkedinUrl && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700">
                    ✅ 帖子 #{index + 1} 数据完整
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 预览生成的代码 */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            📄 生成的代码预览
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <code>{generateCode()}</code>
          </pre>
        </div>

        {/* 使用说明 */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            📖 使用说明
          </h3>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>在LinkedIn帖子右上角点击"..."，选择"嵌入此帖子"</li>
            <li>复制生成的iframe代码，粘贴到"嵌入代码"框中</li>
            <li>复制LinkedIn帖子的URL，粘贴到"帖子链接"框中</li>
            <li>填写完所有帖子后，点击"🚀 更新到首页"按钮</li>
            <li>页面会自动刷新，您可以在首页看到更新的内容</li>
          </ol>
        </div>
      </div>
    </div>
  )
}