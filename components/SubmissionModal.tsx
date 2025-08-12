'use client'

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface SubmissionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SubmissionModal({ isOpen, onClose }: SubmissionModalProps) {
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!linkedinUrl.trim()) {
      setSubmitMessage('Please enter a LinkedIn post URL')
      return
    }

    if (!linkedinUrl.includes('linkedin.com/posts/')) {
      setSubmitMessage('Please enter a valid LinkedIn post URL')
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulate submission (you can replace this with actual API call)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you! Your submission has been received.')
      setLinkedinUrl('')
      
      // Auto close modal after success
      setTimeout(() => {
        onClose()
        setSubmitMessage('')
      }, 2000)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg max-w-md w-full p-6 relative">
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
            Submit Content
          </h2>
          <p className="text-muted-foreground mb-6">
            Share a LinkedIn carousel post that inspires you
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="linkedin-url" className="block text-sm font-medium text-foreground mb-2">
                LinkedIn Post URL
              </label>
              <input
                type="url"
                id="linkedin-url"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://www.linkedin.com/posts/..."
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>

            {submitMessage && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                submitMessage.includes('Thank you') 
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
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary flex-1 disabled:opacity-50"
                disabled={isSubmitting || !linkedinUrl.trim()}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}