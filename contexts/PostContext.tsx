'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { CarouselData } from '@/types/carousel'
import { sampleLinkedInPosts as initialPosts } from '@/data/samplePosts'

interface PostContextType {
  posts: CarouselData[]
  addPost: (post: CarouselData) => void
  checkDuplicate: (linkedinUrl: string, embedCode: string) => boolean
  getNextId: (category: 'enterprise' | 'personal') => string
}

const PostContext = createContext<PostContextType | undefined>(undefined)

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<CarouselData[]>(initialPosts)

  const addPost = (newPost: CarouselData) => {
    setPosts(prevPosts => [newPost, ...prevPosts])
  }

  const checkDuplicate = (linkedinUrl: string, embedCode: string): boolean => {
    return posts.some(post => 
      post.linkedinUrl === linkedinUrl || 
      post.embedCode === embedCode
    )
  }

  const getNextId = (category: 'enterprise' | 'personal'): string => {
    const existingIds = posts
      .filter(post => post.category === category)
      .map(post => {
        const num = parseInt(post.id.split('-')[1])
        return isNaN(num) ? 0 : num
      })
    
    const nextId = Math.max(...existingIds, 0) + 1
    return `${category}-${nextId}`
  }

  return (
    <PostContext.Provider value={{ posts, addPost, checkDuplicate, getNextId }}>
      {children}
    </PostContext.Provider>
  )
}

export function usePosts() {
  const context = useContext(PostContext)
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostProvider')
  }
  return context
}
