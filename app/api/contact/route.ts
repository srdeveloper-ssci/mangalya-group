import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // ✅ Fix: Construct URL from env variables
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://email-sender-174740019883.asia-south2.run.app';
    const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME || 'mangalya';
    const BACKEND_URL = `${baseUrl}/${projectName}/message`;
    
    console.log("Proxying request to:", BACKEND_URL);
    
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}