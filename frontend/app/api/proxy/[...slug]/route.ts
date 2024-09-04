import { NextRequest, NextResponse } from 'next/server';
import apiClient from '@/lib/apiClient';
import axios from 'axios';

// Function to handle GET requests
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  return handleRequest(req, params.slug);
}

// Function to handle POST requests
export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  return handleRequest(req, params.slug);
}

// Function to handle other methods like PUT, DELETE if needed
export async function PUT(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  return handleRequest(req, params.slug);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  return handleRequest(req, params.slug);
}

// Shared handler function for all methods
async function handleRequest(req: NextRequest, slug: string[]) {
  const endpoint = slug.join('/');

  console.log('Endpoint:', endpoint);

  try {
    const response = await apiClient({
      method: req.method, // Use the method from the request
      url: `/${endpoint}`,
      headers: req.headers as any, // Cast to any to avoid type issues
      data: req.method !== 'GET' ? await req.json() : undefined // Only parse body for non-GET requests
    });

    console.log('Response from proxy api:', response);

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data || { message: 'Something went wrong' },
        { status: error.response?.status || 500 }
      );
    } else {
      return NextResponse.json(
        {
          message:
            'Something went wrong in proxy api when requesting ' + endpoint
        },
        { status: 500 }
      );
    }
  }
}
