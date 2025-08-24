'use client'

import { useMemo, useState, useEffect, useCallback } from 'react'
import CarouselCard from './CarouselCard'
import { CarouselData } from '@/types/carousel'
import { sampleLinkedInPosts } from '@/data/samplePosts'

interface CarouselGridProps {
  selectedCategory: 'enterprise' | 'personal'
}

const BATCH_SIZE = 6;           // 每批加载6个帖子
const LOAD_THRESHOLD = 0.7;     // 滚动到70%位置时触发
const INITIAL_LOAD = 6;         // 初始显示6个帖子

export default function CarouselGrid({ selectedCategory }: CarouselGridProps) {
  const [visiblePosts, setVisiblePosts] = useState(INITIAL_LOAD);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // 根据选择的分类筛选帖子
  const filteredCarousels = useMemo(() => {
    return sampleLinkedInPosts.filter(carousel => carousel.category === selectedCategory)
  }, [selectedCategory])

  // 当前显示的帖子
  const currentPosts = useMemo(() => {
    return filteredCarousels.slice(0, visiblePosts);
  }, [filteredCarousels, visiblePosts]);

  // 计算滚动百分比
  const getScrollPercentage = useCallback(() => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    
    return scrollTop / (documentHeight - windowHeight);
  }, []);

  // 检查是否需要加载更多
  const shouldLoadMore = useCallback(() => {
    return getScrollPercentage() >= LOAD_THRESHOLD && !isLoading && hasMore;
  }, [getScrollPercentage, isLoading, hasMore]);

  // 加载下一批帖子
  const loadNextBatch = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    try {
      // 模拟异步加载过程 - 减少加载时间提升体验
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const newVisiblePosts = visiblePosts + BATCH_SIZE;
      setVisiblePosts(newVisiblePosts);
      
      // 检查是否还有更多内容
      if (newVisiblePosts >= filteredCarousels.length) {
        setHasMore(false);
      }
    } catch (error) {
      // 静默重试，用户无感知
      console.error('加载失败，2秒后重试:', error);
      setTimeout(() => loadNextBatch(), 2000);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, visiblePosts, filteredCarousels.length]);

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      if (shouldLoadMore()) {
        loadNextBatch();
      }
    };

    // 使用节流优化滚动性能
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [shouldLoadMore, loadNextBatch]);

  // 当分类改变时重置状态
  useEffect(() => {
    setVisiblePosts(INITIAL_LOAD);
    setHasMore(true);
    setIsLoading(false);
  }, [selectedCategory]);

  if (filteredCarousels.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-muted-foreground mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">No {selectedCategory === 'enterprise' ? 'enterprise' : 'personal'} content available</h3>
        <p className="text-muted-foreground">Please switch to another category to view content</p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((carousel) => (
          <CarouselCard key={carousel.id} carousel={carousel} />
        ))}
      </div>
      
      {/* 完全透明的加载状态 - 用户无感知 */}
      {isLoading && (
        <div className="mt-6 opacity-0">
          {/* 这里可以放置加载指示器，但设置为透明 */}
        </div>
      )}
      
      {/* 完全隐藏调试信息，保持界面干净 */}
    </div>
  )
}