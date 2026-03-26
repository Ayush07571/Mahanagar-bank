'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Globe,
  Calendar,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState<string>('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'sustainability', label: 'Sustainability' }
  ]

  const leadershipTeam = [
    {
      name: 'Rajesh Kumar Sharma',
      position: 'Managing Director & CEO',
      experience: '35+ years in banking',
      expertise: 'Strategic Planning, Risk Management, Digital Transformation',
      image: '/images/ceo.jpg'
    },
    {
      name: 'Priya Nair',
      position: 'Chief Operating Officer',
      experience: '28+ years in banking',
      expertise: 'Operations Management, Customer Service, Process Optimization',
      image: '/images/coo.jpg'
    },
    {
      name: 'Amit Patel',
      position: 'Chief Technology Officer',
      experience: '22+ years in banking technology',
      expertise: 'Digital Banking, Fintech, Cybersecurity',
      image: '/images/cto.jpg'
    },
    {
      name: 'Sneha Reddy',
      position: 'Chief Financial Officer',
      experience: '25+ years in banking finance',
      expertise: 'Financial Planning, Risk Assessment, Regulatory Compliance',
      image: '/images/cfo.jpg'
    }
  ]

  const achievements = [
    {
      year: '2023',
      title: 'Best Digital Bank Award',
      description: 'Recognized for excellence in digital banking innovation and customer experience',
      category: 'award'
    },
    {
      year: '2022',
      title: 'RBI Excellence Award',
      description: 'Awarded for maintaining highest standards in banking operations and compliance',
      category: 'regulatory'
    },
    {
      year: '2021',
      title: 'Customer Satisfaction Leader',
      description: 'Achieved 98% customer satisfaction score across all banking services',
      category: 'customer'
    },
    {
      year: '2020',
      title: 'Technology Innovation Award',
      description: 'Pioneered AI-powered fraud detection and predictive banking solutions',
      category: 'technology'
    }
  ]

  const sustainability = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Green Banking Initiative',
      description: 'Committed to sustainable banking practices with digital-first approach reducing paper usage by 75%'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Financial Inclusion',
      description: 'Empowering underserved communities with accessible banking services and financial literacy programs'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Ethical Banking',
      description: 'Following highest standards of corporate governance and transparent banking practices'
    }
  ]

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About MNS Bank</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted banking partner since 1976, serving millions of customers with excellence and innovation
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Our Story */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Founded in 1976</h3>
                  <p className="text-gray-600 mb-4">
                    MNS Bank began its journey in 1976 with a vision to provide accessible and reliable banking services to the people of India. What started as a single branch in Bhopal has grown into a nationwide banking institution.
                  </p>
                  <p className="text-gray-600">
                    Today, we serve over 5 million customers across 500+ branches with a commitment to innovation, customer service, and community development.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-4">
                    To be the most trusted and preferred banking partner by delivering exceptional financial solutions through innovation, integrity, and customer-centric approach.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Core Values</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Integrity</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Innovation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Customer First</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Stats */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">MNS Bank at a Glance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5M+</div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <p className="text-gray-600">Branches Nationwide</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">48</div>
                  <p className="text-gray-600">Years of Service</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹50,000+</div>
                  <p className="text-gray-600">Crore Business</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Leadership Tab */}
        {activeTab === 'leadership' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadershipTeam.map((leader, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                      <p className="text-blue-600 font-medium">{leader.position}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{leader.experience}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Expertise:</p>
                      <p className="text-gray-600">{leader.expertise}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.category === 'award' ? 'bg-yellow-100' :
                        achievement.category === 'regulatory' ? 'bg-blue-100' :
                        achievement.category === 'customer' ? 'bg-green-100' :
                        'bg-purple-100'
                      }`}>
                        {achievement.category === 'award' && <Award className="w-6 h-6 text-yellow-600" />}
                        {achievement.category === 'regulatory' && <Shield className="w-6 h-6 text-blue-600" />}
                        {achievement.category === 'customer' && <Users className="w-6 h-6 text-green-600" />}
                        {achievement.category === 'technology' && <TrendingUp className="w-6 h-6 text-purple-600" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                        <p className="text-gray-600 text-sm">{achievement.year}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sustainability Tab */}
        {activeTab === 'sustainability' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainability & Responsibility</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sustainability.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the MNS Bank Family</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience banking that puts you first with our range of products and services
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              onClick={() => window.open('/personal-banking/savings-account', '_self')}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
            >
              <Users className="w-5 h-5 mr-2" />
              Open Account
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('/about-us/careers', '_self')}
              className="bg-transparent text-white border-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Careers
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('/contact-us', '_self')}
              className="bg-transparent text-white border-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
