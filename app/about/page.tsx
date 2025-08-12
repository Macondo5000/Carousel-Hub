'use client'

import Header from '@/components/Header'
import { LightBulbIcon, UsersIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            关于LinkedIn Carousel Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们致力于为市场营销人员和设计师创建一个发现灵感的平台
          </p>
        </div>

        {/* 我们的使命 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <LightBulbIcon className="h-16 w-16 text-linkedin-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的使命</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-center leading-relaxed">
              在信息爆炸的时代，找到真正有价值的内容变得越来越困难。LinkedIn Carousel Hub 的使命是
              聚合LinkedIn平台上最优秀的Carousel内容，为市场营销人员、设计师和创意工作者提供一个
              集中发现灵感的平台。
            </p>
            <p className="text-center leading-relaxed mt-4">
              我们相信，优秀的内容应该被更多人看到，好的创意应该被更多人分享。
              通过我们的平台，我们希望连接创作者与寻找灵感的人，促进知识的传播和创意的碰撞。
            </p>
          </div>
        </div>

        {/* 我们的价值观 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <UsersIcon className="h-12 w-12 text-linkedin-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">社区驱动</h3>
            <p className="text-gray-600">
              我们相信社区的力量。每个用户都可以提交内容、分享见解，共同建设这个灵感库。
              通过集体的智慧，我们能够发现更多优秀的内容。
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <GlobeAltIcon className="h-12 w-12 text-linkedin-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">开放共享</h3>
            <p className="text-gray-600">
              我们坚持开放和共享的理念。所有通过LinkedIn官方功能嵌入的内容都保持其原有的
              版权归属，我们只是内容的聚合者和传播者。
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <LightBulbIcon className="h-12 w-12 text-linkedin-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">质量优先</h3>
            <p className="text-gray-600">
              我们严格筛选内容质量，确保平台上展示的都是对用户真正有价值的Carousel。
              通过人工审核和社区反馈，我们持续提升内容质量。
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <HeartIcon className="h-12 w-12 text-linkedin-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">用户至上</h3>
            <p className="text-gray-600">
              用户体验是我们设计的核心。我们不断优化搜索、筛选和展示功能，
              让用户能够快速找到所需的内容和灵感。
            </p>
          </div>
        </div>

        {/* 我们的故事 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">我们的故事</h2>
          <div className="prose prose-lg mx-auto text-gray-600 space-y-4">
            <p>
              LinkedIn Carousel Hub 的诞生源于一个简单的观察：LinkedIn上有大量优秀的Carousel内容，
              但用户很难系统地发现和整理这些内容。作为市场营销和设计领域的从业者，
              我们深知灵感的重要性，也理解寻找灵感的困难。
            </p>
            <p>
              于是，我们决定创建一个平台，将这些分散的优秀内容聚合起来，
              让更多人能够从中获得启发。我们选择了LinkedIn的官方嵌入式功能，
              这样既保证了内容的完整性，也尊重了原创作者的权益。
            </p>
            <p>
              从最初的想法到现在的平台，我们经历了无数次的迭代和优化。
              每一次用户反馈都让我们更加明确方向，每一次功能更新都让我们更接近理想。
              我们相信，这个平台不仅仅是一个工具，更是一个连接创意和灵感的桥梁。
            </p>
          </div>
        </div>

        {/* 技术特色 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">技术特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-linkedin-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-linkedin-600">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">高性能</h3>
              <p className="text-gray-600 text-sm">
                基于Next.js构建，支持服务端渲染，确保快速的加载速度和良好的用户体验
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linkedin-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-linkedin-600">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">响应式设计</h3>
              <p className="text-gray-600 text-sm">
                完美适配各种设备，从桌面端到移动端，为用户提供一致的使用体验
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linkedin-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-linkedin-600">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">安全可靠</h3>
              <p className="text-gray-600 text-sm">
                使用LinkedIn官方API和嵌入式功能，确保内容展示的安全性和合规性
              </p>
            </div>
          </div>
        </div>

        {/* 联系我们 */}
        <div className="bg-gradient-to-r from-linkedin-500 to-linkedin-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">加入我们</h2>
            <p className="text-xl mb-6 opacity-90">
              无论您是内容创作者还是灵感寻求者，我们都欢迎您的加入
            </p>
            <div className="space-y-4">
              <p className="text-lg opacity-90">
                • 提交您发现的优秀LinkedIn Carousel内容
              </p>
              <p className="text-lg opacity-90">
                • 分享您的使用体验和建议
              </p>
              <p className="text-lg opacity-90">
                • 参与社区讨论，与其他创意工作者交流
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/submit"
                className="inline-block bg-white text-linkedin-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                开始提交内容
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 