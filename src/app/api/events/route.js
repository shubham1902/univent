import { NextResponse } from 'next/server';
import dbConnect from '../db';
import Event from '../models/EventModel';

export async function GET() {
  await dbConnect();
  try {
    const events = await Event.find();
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch events', error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const event = new Event(body);
    const savedEvent = await event.save();
    return NextResponse.json(savedEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create event', error: error.message },
      { status: 500 }
    );
  }
}
