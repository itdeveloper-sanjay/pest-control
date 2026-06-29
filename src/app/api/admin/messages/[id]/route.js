import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import Contact from '@/models/Contact';

export async function PATCH(request, props) {
  try {
    const params = await props.params;
    const { id } = params;
    const body = await request.json();
    const { status } = body;

    if (!['pending', 'addressed'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    await connectToDatabase();

    const updatedMessage = await Contact.findByIdAndUpdate(
      id,
      { status },
      { returnDocument: 'after' }
    );

    if (!updatedMessage) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Status updated successfully', data: updatedMessage });
  } catch (error) {
    console.error("Error updating message status:", error);
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}

export async function DELETE(request, props) {
  try {
    const params = await props.params;
    const { id } = params;

    await connectToDatabase();

    const deletedMessage = await Contact.findByIdAndDelete(id);

    if (!deletedMessage) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
