'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Shield, 
  Briefcase, 
  Award,
  FileText,
  Phone,
  Mail,
  Calendar,
  ChevronRight
} from 'lucide-react'

interface CommitteeMember {
  id: string
  name: string
  position: string
  department: string
  email: string
  phone: string
  experience: string
  image: string
}

interface Committee {
  id: string
  name: string
  type: 'board' | 'management' | 'advisory' | 'risk' | 'audit'
  description: string
  mandate: string
  chairman: string
  members: CommitteeMember[]
  meetingFrequency: string
  nextMeeting: string
}

export default function CommitteesPage() {
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null)

  const committees: Committee[] = [
    {
      id: '1',
      name: 'Audit Committee',
      type: 'audit',
      description: 'The Audit Committee is responsible for overseeing the integrity of financial reporting, internal controls, and audit processes. It ensures compliance with regulatory requirements and best practices in financial governance.',
      mandate: 'Review and monitor the integrity of financial statements, internal controls, and compliance with laws and regulations.',
      chairman: 'Mrs. Priya Nair',
      meetingFrequency: 'Quarterly',
      nextMeeting: 'March 31, 2024',
      members: [
        {
          id: '1',
          name: 'Mrs. Priya Nair',
          position: 'Chairperson',
          department: 'Independent Director',
          email: 'priya.nair@mnsbank.com',
          phone: '+91-22-1234-5678',
          experience: '28+ years in audit and finance',
          image: '/images/committee-members/priya-nair.jpg'
        },
        {
          id: '2',
          name: 'Mr. Amit Patel',
          position: 'Member',
          department: 'Independent Director',
          email: 'amit.patel@mnsbank.com',
          phone: '+91-22-1234-5679',
          experience: '32+ years in technology and risk',
          image: '/images/committee-members/amit-patel.jpg'
        },
        {
          id: '3',
          name: 'Ms. Anjali Gupta',
          position: 'Member',
          department: 'Independent Director',
          email: 'anjali.gupta@mnsbank.com',
          phone: '+91-22-1234-5677',
          experience: '22+ years in governance and sustainability',
          image: '/images/committee-members/anjali-gupta.jpg'
        }
      ]
    },
    {
      id: '2',
      name: 'Risk Management Committee',
      type: 'risk',
      description: 'The Risk Management Committee identifies, assesses, and monitors various risks faced by the bank including credit risk, market risk, operational risk, and liquidity risk.',
      mandate: 'Formulate and implement risk management policies, monitor risk exposure, and ensure adequate risk mitigation measures.',
      chairman: 'Mr. Vikram Singh',
      meetingFrequency: 'Monthly',
      nextMeeting: 'March 15, 2024',
      members: [
        {
          id: '4',
          name: 'Mr. Vikram Singh',
          position: 'Chairperson',
          department: 'Independent Director',
          email: 'vikram.singh@mnsbank.com',
          phone: '+91-22-1234-5676',
          experience: '30+ years in risk management',
          image: '/images/committee-members/vikram-singh.jpg'
        },
        {
          id: '5',
          name: 'Mr. Rajesh Kumar Sharma',
          position: 'Member',
          department: 'Managing Director',
          email: 'rajesh.sharma@mnsbank.com',
          phone: '+91-22-1234-5671',
          experience: '35+ years in banking leadership',
          image: '/images/committee-members/rajesh-sharma.jpg'
        },
        {
          id: '6',
          name: 'Mrs. Sneha Reddy',
          position: 'Member',
          department: 'Independent Director',
          email: 'sneha.reddy@mnsbank.com',
          phone: '+91-22-1234-5675',
          experience: '25+ years in finance and risk',
          image: '/images/committee-members/sneha-reddy.jpg'
        }
      ]
    },
    {
      id: '3',
      name: 'Nomination & Remuneration Committee',
      type: 'board',
      description: 'The Nomination & Remuneration Committee oversees the appointment of directors, their compensation, and succession planning. It ensures fairness and transparency in director appointments.',
      mandate: 'Identify and recommend suitable candidates for board positions, determine remuneration policies, and oversee director evaluation.',
      chairman: 'Mrs. Sneha Reddy',
      meetingFrequency: 'Bi-annual',
      nextMeeting: 'April 10, 2024',
      members: [
        {
          id: '7',
          name: 'Mrs. Sneha Reddy',
          position: 'Chairperson',
          department: 'Independent Director',
          email: 'sneha.reddy@mnsbank.com',
          phone: '+91-22-1234-5675',
          experience: '25+ years in finance and governance',
          image: '/images/committee-members/sneha-reddy.jpg'
        },
        {
          id: '8',
          name: 'Ms. Anjali Gupta',
          position: 'Member',
          department: 'Independent Director',
          email: 'anjali.gupta@mnsbank.com',
          phone: '+91-22-1234-5677',
          experience: '22+ years in governance and sustainability',
          image: '/images/committee-members/anjali-gupta.jpg'
        }
      ]
    },
    {
      id: '4',
      name: 'Stakeholder Relationship Committee',
      type: 'advisory',
      description: 'The Stakeholder Relationship Committee addresses customer grievances, ensures fair treatment of customers, and oversees customer service initiatives across the bank.',
      mandate: 'Review customer complaints, monitor customer service standards, and recommend improvements in customer service and grievance redressal.',
      chairman: 'Mr. Rajesh Kumar Sharma',
      meetingFrequency: 'Monthly',
      nextMeeting: 'March 20, 2024',
      members: [
        {
          id: '9',
          name: 'Mr. Rajesh Kumar Sharma',
          position: 'Chairperson',
          department: 'Managing Director',
          email: 'rajesh.sharma@mnsbank.com',
          phone: '+91-22-1234-5671',
          experience: '35+ years in banking leadership',
          image: '/images/committee-members/rajesh-sharma.jpg'
        },
        {
          id: '10',
          name: 'Mrs. Priya Nair',
          position: 'Member',
          department: 'Independent Director',
          email: 'priya.nair@mnsbank.com',
          phone: '+91-22-1234-5678',
          experience: '28+ years in audit and finance',
          image: '/images/committee-members/priya-nair.jpg'
        }
      ]
    },
    {
      id: '5',
      name: 'Technology & Digital Banking Committee',
      type: 'management',
      description: 'The Technology & Digital Banking Committee drives digital transformation initiatives, oversees technology investments, and ensures robust digital banking infrastructure.',
      mandate: 'Oversee digital transformation strategy, evaluate technology investments, and ensure secure and efficient digital banking platforms.',
      chairman: 'Mr. Amit Patel',
      meetingFrequency: 'Monthly',
      nextMeeting: 'March 25, 2024',
      members: [
        {
          id: '11',
          name: 'Mr. Amit Patel',
          position: 'Chairperson',
          department: 'Independent Director',
          email: 'amit.patel@mnsbank.com',
          phone: '+91-22-1234-5679',
          experience: '32+ years in technology and digital banking',
          image: '/images/committee-members/amit-patel.jpg'
        },
        {
          id: '12',
          name: 'Mr. Rajesh Kumar Sharma',
          position: 'Member',
          department: 'Managing Director',
          email: 'rajesh.sharma@mnsbank.com',
          phone: '+91-22-1234-5671',
          experience: '35+ years in banking leadership',
          image: '/images/committee-members/rajesh-sharma.jpg'
        }
      ]
    },
    {
      id: '6',
      name: 'ESG & Sustainability Committee',
      type: 'advisory',
      description: 'The ESG & Sustainability Committee develops and monitors environmental, social, and governance initiatives. It ensures the bank\'s commitment to sustainable and responsible banking practices.',
      mandate: 'Develop ESG policies, monitor sustainability metrics, and ensure compliance with environmental and social standards.',
      chairman: 'Ms. Anjali Gupta',
      meetingFrequency: 'Quarterly',
      nextMeeting: 'April 5, 2024',
      members: [
        {
          id: '13',
          name: 'Ms. Anjali Gupta',
          position: 'Chairperson',
          department: 'Independent Director',
          email: 'anjali.gupta@mnsbank.com',
          phone: '+91-22-1234-5677',
          experience: '22+ years in governance and sustainability',
          image: '/images/committee-members/anjali-gupta.jpg'
        },
        {
          id: '14',
          name: 'Mrs. Sneha Reddy',
          position: 'Member',
          department: 'Independent Director',
          email: 'sneha.reddy@mnsbank.com',
          phone: '+91-22-1234-5675',
          experience: '25+ years in finance and governance',
          image: '/images/committee-members/sneha-reddy.jpg'
        }
      ]
    }
  ]

  const getCommitteeTypeColor = (type: string) => {
    switch (type) {
      case 'board':
        return 'bg-blue-100 text-blue-800'
      case 'management':
        return 'bg-green-100 text-green-800'
      case 'advisory':
        return 'bg-purple-100 text-purple-800'
      case 'risk':
        return 'bg-red-100 text-red-800'
      case 'audit':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCommitteeIcon = (type: string) => {
    switch (type) {
      case 'board':
        return <Users className="w-5 h-5" />
      case 'management':
        return <Briefcase className="w-5 h-5" />
      case 'advisory':
        return <Award className="w-5 h-5" />
      case 'risk':
        return <Shield className="w-5 h-5" />
      case 'audit':
        return <FileText className="w-5 h-5" />
      default:
        return <Users className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Board Committees</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Governance structures ensuring transparency, accountability, and stakeholder protection
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Committees Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Committee Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <p className="text-gray-600">Total Committees</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                <p className="text-gray-600">Board Level</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <p className="text-gray-600">Management Level</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24</div>
                <p className="text-gray-600">Total Members</p>
              </div>
            </div>
          </div>
        </section>

        {/* Committees Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Committees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committees.map((committee) => (
              <div
                key={committee.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedCommittee(committee)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getCommitteeTypeColor(committee.type)}`}>
                      {getCommitteeIcon(committee.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{committee.name}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCommitteeTypeColor(committee.type)}`}>
                        {committee.type.charAt(0).toUpperCase() + committee.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <p className="text-gray-600 mb-4">{committee.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Chairman:</p>
                    <p className="text-blue-600">{committee.chairman}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Meeting Frequency:</p>
                    <p className="text-gray-600">{committee.meetingFrequency}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-gray-900 mb-1">Next Meeting:</p>
                  <p className="text-gray-600">{committee.nextMeeting}</p>
                </div>

                <div>
                  <p className="font-medium text-gray-900 mb-2">Mandate:</p>
                  <p className="text-gray-600">{committee.mandate}</p>
                </div>

                <div>
                  <p className="font-medium text-gray-900 mb-2">Members ({committee.members.length}):</p>
                  <div className="space-y-2">
                    {committee.members.map((member) => (
                      <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div className="flex items-center space-x-3">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-blue-600">{member.position}</p>
                            <p className="text-xs text-gray-500">{member.department}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(`tel:${member.phone}`, '_blank')}
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Committee Secretariat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Email:</p>
                      <p className="text-blue-600">committees@mnsbank.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Phone:</p>
                      <p className="text-blue-600">+91-22-1234-5670</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Monday - Friday:</p>
                      <p className="text-gray-600">9:30 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
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

      {/* Committee Modal */}
      {selectedCommittee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${getCommitteeTypeColor(selectedCommittee.type)}`}>
                    {getCommitteeIcon(selectedCommittee.type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedCommittee.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCommitteeTypeColor(selectedCommittee.type)}`}>
                      {selectedCommittee.type.charAt(0).toUpperCase() + selectedCommittee.type.slice(1)}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCommittee(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">{selectedCommittee.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Chairman:</p>
                    <p className="text-blue-600">{selectedCommittee.chairman}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Meeting Frequency:</p>
                    <p className="text-gray-600">{selectedCommittee.meetingFrequency}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Next Meeting:</p>
                    <p className="text-gray-600">{selectedCommittee.nextMeeting}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Mandate:</p>
                    <p className="text-gray-600">{selectedCommittee.mandate}</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-gray-900 mb-2">Committee Members ({selectedCommittee.members.length}):</p>
                  <div className="space-y-3">
                    {selectedCommittee.members.map((member) => (
                      <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-blue-600">{member.position}</p>
                            <p className="text-xs text-gray-500">{member.department}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(`tel:${member.phone}`, '_blank')}
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </Button>
                        </div>
                      </div>
                    ))}
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
