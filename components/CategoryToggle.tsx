'use client'

interface CategoryToggleProps {
  selectedCategory: 'enterprise' | 'personal'
  onCategoryChange: (category: 'enterprise' | 'personal') => void
}

export default function CategoryToggle({
  selectedCategory,
  onCategoryChange,
}: CategoryToggleProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="rounded-lg inline-flex border border-border p-1 gap-1">
        <button
          onClick={() => onCategoryChange('enterprise')}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            selectedCategory === 'enterprise'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground bg-transparent'
          }`}
        >
          Enterprise
        </button>
        <button
          onClick={() => onCategoryChange('personal')}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            selectedCategory === 'personal'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground bg-transparent'
          }`}
        >
          Personal
        </button>
      </div>
    </div>
  )
}