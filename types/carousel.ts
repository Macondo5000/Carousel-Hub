export interface CarouselData {
  id: string
  title: string
  description: string
  author: string
  authorCompany: string
  authorAvatar: string
  category: string
  industry: string
  tags: string[]
  linkedinUrl: string
  embedCode: string
  likes: number
  comments: number
  shares: number
  createdAt: string
  featured: boolean
}

export interface Category {
  id: string
  name: string
  count: number
}

export interface Industry {
  id: string
  name: string
  count: number
}

export interface SearchFilters {
  category: string
  industry: string
  tags: string[]
  dateRange: string
} 