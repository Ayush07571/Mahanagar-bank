'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselItem {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  cta?: {
    text: string
    link: string
  }
}

interface CarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export default function Carousel({ 
  items, 
  autoPlay = true, 
  interval = 5000, 
  className = '' 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!autoPlay || isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, isPaused, interval, items.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentItem = items[currentIndex]

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          className="rounded-full p-2 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex-1 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0"
              >
                <div className="relative">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  
                  <div className="p-6 bg-white bg-opacity-90 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {item.description}
                    </p>
                    
                    {item.cta && (
                      <Button
                        className="mt-4"
                        onClick={() => window.open(item.cta?.link, '_blank')}
                      >
                        {item.cta?.text}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          className="rounded-full p-2 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 text-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Default carousel data
export const defaultCarouselItems: CarouselItem[] = [
  {
    id: '1',
    title: 'Welcome to MNS Bank',
    subtitle: 'Your Trusted Banking Partner',
    description: 'Experience seamless digital banking with our comprehensive range of products and services designed to meet all your financial needs.',
    image: '/images/hero-banking.jpg',
    cta: {
      text: 'Explore Products',
      link: '/personal-banking'
    }
  },
  {
    id: '2',
    title: 'Digital Banking Solutions',
    subtitle: 'Bank Anytime, Anywhere',
    description: 'Access your accounts, transfer funds, pay bills, and manage your finances with our secure and user-friendly digital banking platform.',
    image: '/images/hero-digital.jpg',
    cta: {
      text: 'Get Started',
      link: '/digital-services'
    }
  },
  {
    id: '3',
    title: 'Personal Loans Made Easy',
    subtitle: 'Quick Approvals, Flexible Terms',
    description: 'Get the funds you need with our competitive personal loan options featuring quick approvals and flexible repayment terms.',
    image: '/images/hero-loans.jpg',
    cta: {
      text: 'Apply Now',
      link: '/personal-banking/personal-loan'
    }
  },
  {
    id: '4',
    title: 'Secure & Compliant Banking',
    subtitle: 'RBI Compliant, Customer First',
    description: 'Bank with confidence knowing we adhere to all RBI regulations and prioritize your security and privacy.',
    image: '/images/hero-security.jpg',
    cta: {
      text: 'Learn More',
      link: '/compliance'
    }
  }
]
