import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import Contact from '@/models/Contact';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;
    const status = searchParams.get('status');

    await connectToDatabase();

    const query = {};
    if (status === 'pending') {
      query.$or = [
        { status: 'pending' },
        { status: { $exists: false } },
        { status: null }
      ];
    } else if (status === 'addressed') {
      query.status = 'addressed';
    }

    const messages = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Contact.countDocuments(query);

    return NextResponse.json({
      messages,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}
