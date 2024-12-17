import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log('Received contact form submission:', data);
    
    // TODO: Implement email sending logic
    // For now, just return success to fix the unused variable error
    return NextResponse.json({ 
      success: true,
      message: 'Message received successfully'
    });
  } catch (error: unknown) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process message' },
      { status: 500 }
    );
  }
} 