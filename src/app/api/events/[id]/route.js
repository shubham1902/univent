import { NextResponse } from 'next/server';
import dbConnect from '../../db';
import Event from '../../models/EventModel';

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const event = await Event.findById(params.id);
    if (!event) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch event', error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  await dbConnect();
  try {
    const body = await req.json();
    const updated = await Event.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to update event', error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  await dbConnect();
  try {
    const deleted = await Event.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Event deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to delete event', error: error.message },
      { status: 500 }
    );
  }
}
