'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Award, 
  Briefcase, 
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Shield,
  X,
  ChevronRight
} from 'lucide-react'

interface Director {
  id: string
  name: string
  position: string
  experience: string
  qualifications: string[]
  expertise: string[]
  biography: string
  image: string
  joinDate: string
  otherPositions?: string[]
  email?: string
  phone?: string
}

interface Committee {
  name: string
  chairman: string
  members: string[]
  mandate: string
}

export default function BoardOfDirectorsPage() {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null)

  const boardOfDirectors: Director[] = [
    {
      id: '1',
      name: 'Mr. Rajesh Kumar Sharma',
      position: 'Managing Director & Chairman',
      experience: '35+ years in banking and finance',
      qualifications: ['CA', 'ICWA', 'MBA - IIM Ahmedabad'],
      expertise: ['Strategic Planning', 'Risk Management', 'Digital Transformation', 'Corporate Governance'],
      biography: 'Mr. Rajesh Kumar Sharma is the visionary leader behind MNS Bank\'s transformation into a digital-first banking institution. With over 35 years of experience in banking and finance, he has spearheaded numerous initiatives that have positioned MNS Bank as a leader in innovation and customer service. His expertise in strategic planning and risk management has been instrumental in navigating the bank through various economic cycles while maintaining steady growth and profitability.',
      image: '/images/directors/chairman.jpg',
      joinDate: '2010',
      otherPositions: ['Chairman - RBI Banking Committee', 'Director - Indian Banks Association']
    },
    {
      id: '2',
      name: 'Mrs. Priya Nair',
      position: 'Independent Director',
      experience: '28+ years in banking operations',
      qualifications: ['CA', 'CS', 'PhD in Finance'],
      expertise: ['Banking Operations', 'Risk Management', 'Compliance', 'Financial Analysis'],
      biography: 'Mrs. Priya Nair brings extensive experience in banking operations and risk management to the board. As a seasoned professional with over 28 years in the industry, she has held senior positions in various banking institutions and has been recognized for her expertise in implementing robust risk management frameworks and ensuring regulatory compliance. Her academic background in finance and research contributes valuable insights to the board\'s strategic decisions.',
      image: '/images/directors/independent-director-1.jpg',
      joinDate: '2015'
    },
    {
      id: '3',
      name: 'Mr. Amit Patel',
      position: 'Independent Director',
      experience: '32+ years in technology and digital banking',
      qualifications: ['B.Tech', 'MBA', 'PMP'],
      expertise: ['Digital Banking', 'FinTech', 'Cybersecurity', 'Technology Strategy'],
      biography: 'Mr. Amit Patel is a technology visionary with deep expertise in digital banking and financial technology. With over 32 years of experience at the intersection of banking and technology, he has been instrumental in guiding MNS Bank\'s digital transformation initiatives. His understanding of emerging technologies and their application in banking has helped MNS Bank stay ahead of industry trends and deliver innovative solutions to customers.',
      image: '/images/directors/independent-director-2.jpg',
      joinDate: '2018'
    },
    {
      id: '4',
      name: 'Mrs. Sneha Reddy',
      position: 'Independent Director',
      experience: '25+ years in finance and accounting',
      qualifications: ['CA', 'CFA', 'LLB'],
      expertise: ['Financial Management', 'Corporate Law', 'Audit', 'Treasury Operations'],
      biography: 'Mrs. Sneha Reddy is a distinguished finance professional with expertise in financial management and corporate law. With over 25 years of experience in finance and accounting, she brings valuable perspectives on financial governance and regulatory compliance to the board. Her background as a Chartered Accountant and CFA charterholder provides her with deep insights into financial reporting and audit practices.',
      image: '/images/directors/independent-director-3.jpg',
      joinDate: '2020'
    },
    {
      id: '5',
      name: 'Mr. Vikram Singh',
      position: 'Independent Director',
      experience: '30+ years in banking and risk management',
      qualifications: ['CA', 'FRM', 'PhD in Economics'],
      expertise: ['Credit Risk Management', 'Market Risk', 'Regulatory Compliance', 'International Banking'],
      biography: 'Mr. Vikram Singh is a seasoned banking professional with extensive experience in risk management and international banking. With over 30 years in the industry, he has held senior positions in various multinational banks and has deep expertise in credit and market risk management. His academic background in economics and professional certifications in financial risk management make him a valuable asset to the board\'s risk oversight responsibilities.',
      image: '/images/directors/independent-director-4.jpg',
      joinDate: '2021'
    },
    {
      id: '6',
      name: 'Ms. Anjali Gupta',
      position: 'Independent Director',
      experience: '22+ years in corporate governance and sustainability',
      qualifications: ['CA', 'CS', 'Masters in Environmental Science'],
      expertise: ['Corporate Governance', 'Sustainability', 'ESG Compliance', 'Stakeholder Management'],
      biography: 'Ms. Anjali Gupta brings expertise in corporate governance and sustainability to the board. With over 22 years of experience in corporate governance and environmental sustainability, she has been instrumental in developing MNS Bank\'s ESG framework and sustainability initiatives. Her unique combination of financial expertise and environmental science background enables her to guide the bank in balancing profitability with social and environmental responsibility.',
      image: '/images/directors/independent-director-5.jpg',
      joinDate: '2022'
    }
  ]

  const committees: Committee[] = [
    {
      name: 'Audit Committee',
      chairman: 'Mrs. Priya Nair',
      members: ['Mrs. Priya Nair', 'Mr. Amit Patel', 'Ms. Anjali Gupta'],
      mandate: 'Oversight of financial reporting and internal controls'
    },
    {
      name: 'Risk Management Committee',
      chairman: 'Mr. Vikram Singh',
      members: ['Mr. Vikram Singh', 'Mr. Rajesh Kumar Sharma', 'Mrs. Sneha Reddy'],
      mandate: 'Identification and mitigation of banking risks'
    },
    {
      name: 'Nomination & Remuneration Committee',
      chairman: 'Mrs. Sneha Reddy',
      members: ['Mrs. Sneha Reddy', 'Ms. Anjali Gupta'],
      mandate: 'Director appointments and compensation policies'
    },
    {
      name: 'Stakeholder Relationship Committee',
      chairman: 'Mr. Rajesh Kumar Sharma',
      members: ['Mr. Rajesh Kumar Sharma', 'Mrs. Priya Nair'],
      mandate: 'Grievance redressal and customer service'
    }
  ]

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Board of Directors</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the distinguished leaders guiding MNS Bank's strategic vision and governance
            </p>
          </div>
        </div>
      </div>

      {/* Board Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Board Composition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                <p className="text-gray-600">Total Directors</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1</div>
                <p className="text-gray-600">Managing Director</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <p className="text-gray-600">Independent Directors</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <p className="text-gray-600">Board Committees</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">48</div>
                <p className="text-gray-600">Years of Service</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Board Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Corporate Governance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Banking Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Risk Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Digital Transformation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directors Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardOfDirectors.map((director) => (
              <div 
                key={director.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedDirector(director)}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    {director.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3 text-center">
                    {director.position}
                  </p>
                  
                  <div className="text-sm text-gray-600 mb-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-gray-400" />
                      <span>{director.experience}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Qualifications:</p>
                      <div className="flex flex-wrap gap-2">
                        {director.qualifications.map((qual, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                          >
                            {qual}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 mb-2">Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {director.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {director.otherPositions && director.otherPositions.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="font-medium text-gray-900 mb-2">Other Positions:</p>
                      <div className="space-y-1">
                        {director.otherPositions.map((position, index) => (
                          <p key={index} className="text-sm text-gray-600">• {position}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Committees */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Board Committees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committees.map((committee, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{committee.name}</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900">Chairman:</p>
                    <p className="text-blue-600">{committee.chairman}</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Members:</p>
                    <div className="flex flex-wrap gap-2">
                      {committee.members.map((member, memberIndex) => (
                        <span
                          key={memberIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">Mandate:</p>
                    <p className="text-gray-600">{committee.mandate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Board Secretariat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email:</p>
                      <p className="text-blue-600">board@mnsbank.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone:</p>
                      <p className="text-blue-600">+91-22-1234-5670</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Address:</p>
                      <p className="text-gray-600">MNS Bank Headquarters, Bhopal, Madhya Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">Monday - Friday:</p>
                      <p className="text-gray-600">9:30 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">Saturday:</p>
                      <p className="text-gray-600">9:30 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Director Modal */}
      {selectedDirector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedDirector.name}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedDirector(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={selectedDirector.image}
                  alt={selectedDirector.name}
                  className="w-32 h-32 rounded-full object-cover flex-shrink-0"
                />

                <div className="flex-1 space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Position:</p>
                    <p className="text-blue-600">{selectedDirector.position}</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Experience:</p>
                    <p className="text-gray-600">{selectedDirector.experience}</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Join Date:</p>
                    <p className="text-gray-600">{selectedDirector.joinDate}</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Biography:</p>
                    <p className="text-gray-600 leading-relaxed">{selectedDirector.biography}</p>
                  </div>

                  {selectedDirector.otherPositions && selectedDirector.otherPositions.length > 0 && (
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Other Positions:</p>
                      <div className="space-y-1">
                        {selectedDirector.otherPositions.map((position, index) => (
                          <p key={index} className="text-gray-600">• {position}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => window.open(`mailto:${selectedDirector.email}`, '_blank')}
                      className="flex items-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      Email Director
                    </Button>
                    
                    <Button
                      onClick={() => window.open(`tel:${selectedDirector.phone}`, '_blank')}
                      className="flex items-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Director
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
