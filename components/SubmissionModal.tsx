'use client'

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CarouselData } from '@/types/carousel'
import { usePosts } from '@/contexts/PostContext'

interface SubmissionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SubmissionModal({ isOpen, onClose }: SubmissionModalProps) {
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [embedCode, setEmbedCode] = useState('')
  const [category, setCategory] = useState<'enterprise' | 'personal'>('enterprise')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const { addPost, checkDuplicate, getNextId } = usePosts()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!linkedinUrl.trim()) {
      setSubmitMessage('请输入LinkedIn帖子链接')
      return
    }

    if (!embedCode.trim()) {
      setSubmitMessage('请输入嵌入代码')
      return
    }

    if (!linkedinUrl.includes('linkedin.com/posts/')) {
      setSubmitMessage('请输入有效的LinkedIn帖子链接')
      return
    }

    if (!embedCode.includes('<iframe') || !embedCode.includes('linkedin.com/embed')) {
      setSubmitMessage('请输入有效的LinkedIn嵌入代码')
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    // 检查是否已经存在相同的帖子
    const isDuplicate = checkDuplicate(linkedinUrl.trim(), embedCode.trim())

    if (isDuplicate) {
      setIsSubmitting(false)
      setSubmitMessage('该帖子已经存在，请勿重复提交')
      return
    }

    // 生成新的ID
    const newId = getNextId(category)

    // 创建新的帖子数据
    const newPost: CarouselData = {
      id: newId,
      linkedinUrl: linkedinUrl.trim(),
      embedCode: embedCode.trim(),
      category: category
    }

    // 添加新帖子
    addPost(newPost)

    // 模拟提交延迟
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('提交成功！新帖子已添加到' + (category === 'enterprise' ? '企业' : '个人') + '分类')
      
      // 清空表单
      setLinkedinUrl('')
      setEmbedCode('')
      setCategory('enterprise')
      
      // 自动关闭弹框
      setTimeout(() => {
        onClose()
        setSubmitMessage('')
      }, 2000)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Modal content */}
        <div className="pr-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            提交内容
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="linkedin-url" className="block text-sm font-medium text-foreground mb-2">
                LinkedIn帖子链接 *
              </label>
              <input
                type="url"
                id="linkedin-url"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://www.linkedin.com/posts/..."
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="embed-code" className="block text-sm font-medium text-foreground mb-2">
                嵌入代码 *
              </label>
              <textarea
                id="embed-code"
                value={embedCode}
                onChange={(e) => setEmbedCode(e.target.value)}
                placeholder="<iframe src='https://www.linkedin.com/embed/feed/update/...' ...></iframe>"
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-24 resize-none"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                内容分类 *
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as 'enterprise' | 'personal')}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSubmitting}
                required
              >
                <option value="enterprise">企业 (Enterprise)</option>
                <option value="personal">个人 (Personal)</option>
              </select>
            </div>

            {submitMessage && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                submitMessage.includes('成功') 
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {submitMessage}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary flex-1"
                disabled={isSubmitting}
              >
                取消
              </button>
              <button
                type="submit"
                className="btn-primary flex-1 disabled:opacity-50"
                disabled={isSubmitting || !linkedinUrl.trim() || !embedCode.trim()}
              >
                {isSubmitting ? '提交中...' : '提交'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}