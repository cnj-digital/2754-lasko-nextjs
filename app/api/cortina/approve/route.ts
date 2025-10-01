import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Cortina approve API is working',
    method: 'GET',
    url: request.url 
  });
}

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const submission = searchParams.get('submission');
    const signature = searchParams.get('signature');
    const expires = searchParams.get('expires');

    if (!submission || !signature || !expires) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Call the Laravel backend approval endpoint
    const backendUrl = process.env.API_URL?.replace('/graphql', '') || 'https://2754-lasko-statamic.test';
    const approveUrl = `${backendUrl}/api/form-cortina/${submission}/approve?signature=${signature}&expires=${expires}`;
    
    console.log('Calling approval URL:', approveUrl);

    const response = await fetch(approveUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    console.log('Backend response status:', response.status);
    
    const data = await response.json();
    console.log('Backend response data:', data);

    if (!response.ok) {
      console.error('Backend approval failed:', data);
      return NextResponse.json(
        { error: data.message || 'Approval failed' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Cortina approval error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
