import { NextRequest, NextResponse } from 'next/server'
import { validateInquiryForm } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...formData } = body

    // Validate form data
    const errors = validateInquiryForm(formData, type)
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      )
    }

    // Generate reference number if not provided
    const referenceNumber = body.referenceNumber || generateReferenceNumber(type)

    // Save inquiry to database (in a real implementation)
    const inquiry = {
      id: Date.now().toString(),
      type,
      referenceNumber,
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Simulate database save
    console.log('Inquiry saved:', inquiry)

    // Send confirmation email (in a real implementation)
    await sendConfirmationEmail(formData.email, referenceNumber, type)

    // Send confirmation SMS (in a real implementation)
    await sendConfirmationSMS(formData.phone, referenceNumber, type)

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: 'Inquiry submitted successfully'
    })

  } catch (error) {
    console.error('Error submitting inquiry:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

function generateReferenceNumber(type: string): string {
  const prefix = type.toUpperCase().slice(0, 3)
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000)
  return `${prefix}${timestamp}${random}`
}

async function sendConfirmationEmail(email: string, referenceNumber: string, type: string) {
  // Simulate email sending
  console.log(`Email sent to ${email}: Reference ${referenceNumber} for ${type}`)
  // In a real implementation, use a service like SendGrid, Nodemailer, etc.
}

async function sendConfirmationSMS(phone: string, referenceNumber: string, type: string) {
  // Simulate SMS sending
  console.log(`SMS sent to ${phone}: Reference ${referenceNumber} for ${type}`)
  // In a real implementation, use a service like Twilio, MSG91, etc.
}
