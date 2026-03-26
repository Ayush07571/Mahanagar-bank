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
    if (!autoPlay || isPaused || !items.length) return

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

  if (!items.length) return null

  return (
    <div 
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-between px-4">
        {/* Previous Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full bg-white/20 hover:bg-white/40 text-white z-10 hidden sm:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Carousel Content */}
        <div className="flex-1 overflow-hidden relative mx-2">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0"
              >
                <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-[21/9]">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                  )}
                  
                  <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12 text-white">
                    <h3 className="text-2xl sm:text-4xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg sm:text-xl font-medium mb-4 text-blue-200">
                      {item.subtitle}
                    </p>
                    <p className="text-base sm:text-lg max-w-2xl mb-6 text-gray-200 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {item.cta && (
                      <div className="flex gap-4">
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => window.open(item.cta?.link, '_self')}
                        >
                          {item.cta?.text}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="rounded-full bg-white/20 hover:bg-white/40 text-white z-10 hidden sm:flex"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50'
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
      link: '/personal-loan'
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
      link: '/compliance/policy-centre'
    }
  }
]
