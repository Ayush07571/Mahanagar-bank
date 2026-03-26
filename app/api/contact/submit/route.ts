import { NextRequest, NextResponse } from 'next/server'
import { validateInquiryForm } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { ...formData } = body

    // Validate form data
    const errors = validateInquiryForm(formData, 'contact')
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      )
    }

    // Generate reference number
    const referenceNumber = generateReferenceNumber()

    // Save contact request to database (in a real implementation)
    const contactRequest = {
      id: Date.now().toString(),
      type: 'contact',
      referenceNumber,
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Simulate database save
    console.log('Contact request saved:', contactRequest)

    // Send confirmation email
    await sendConfirmationEmail(formData.email, referenceNumber)

    // Send confirmation SMS
    await sendConfirmationSMS(formData.phone, referenceNumber)

    // Notify support team
    await notifySupportTeam(contactRequest)

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: 'Contact request submitted successfully'
    })

  } catch (error) {
    console.error('Error submitting contact request:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

function generateReferenceNumber(): string {
  const prefix = 'CNT'
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000)
  return `${prefix}${timestamp}${random}`
}

async function sendConfirmationEmail(email: string, referenceNumber: string) {
  // Simulate email sending
  console.log(`Contact confirmation email sent to ${email}: Reference ${referenceNumber}`)
  // In a real implementation, use a service like SendGrid, Nodemailer, etc.
}

async function sendConfirmationSMS(phone: string, referenceNumber: string) {
  // Simulate SMS sending
  console.log(`Contact confirmation SMS sent to ${phone}: Reference ${referenceNumber}`)
  // In a real implementation, use a service like Twilio, MSG91, etc.
}

async function notifySupportTeam(contactRequest: any) {
  // Simulate notifying support team
  console.log('Support team notified:', contactRequest)
  // In a real implementation, send email to support team
}
