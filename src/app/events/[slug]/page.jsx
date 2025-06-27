import Head from 'next/head';
import Link from 'next/link';
import { notFound } from 'next/navigation';


async function getEvent(slug) {
  // Mock data 
  const mockEvents = [
    {
      id: 'r537e6t',
      title: "Tech Symposium 2023",
      college: "State University",
      date: "2025-11-15",
      time: "10:00 AM - 4:00 PM",
      type: "workshop",
      category: "Technology",
      location: "Campus Tech Center, Room 101",
      description: "Annual technology conference featuring industry leaders and hands-on workshops",
      longDescription: `
        <p>Join us for the 8th annual Tech Symposium, bringing together students, faculty, and industry professionals for a day of learning and networking.</p>
        <h3>Featured Sessions:</h3>
        <ul>
          <li>Keynote: Future of AI in Education (11:00 AM)</li>
          <li>Web Development Workshop (1:30 PM)</li>
          <li>Cybersecurity Panel Discussion (3:00 PM)</li>
        </ul>
        <p>Lunch and refreshments will be provided for all attendees.</p>
      `,
      image: "/tech-event.jpg",
      registrationLink: "https://stateuniv.edu/techsymposium",
      organizer: "Computer Science Department",
      contactEmail: "techsymposium@stateuniv.edu",
      capacity: 200,
      registered: 147,
      isFree: true,
      price: 0
    },
    
  ];

  const event = mockEvents.find(event => event.id === slug);
  
  if (!event) {
    return null;
  }

 
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return event;
}

export default async function EventPage({ params }) {
  const { slug } = params;
  const event = await getEvent(slug);

  if (!event) {
    return notFound();
  }

  const eventDate = new Date(event.date);
  const isPastEvent = eventDate < new Date();

  return (
    <>
      <Head>
        <title>{event.title} | Univent</title>
        <meta name="description" content={event.description} />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="mb-6">
            <Link 
              href="/events" 
              className="flex items-center text-blue-600 hover:text-orange-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Events
            </Link>
          </div>

         
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {event.category}
                </span>
                <span className="text-sm text-gray-500">
                  {event.college}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {eventDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
                <div className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: event.longDescription }}
                />
              </div>
            </div>
            
           
            <div className="md:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
                <div className="h-48 bg-gray-200 rounded-lg mb-6"></div> {/* Event image placeholder */}
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Organizer</h3>
                    <p className="text-gray-600">{event.organizer}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">Contact</h3>
                    <a 
                      href={`mailto:${event.contactEmail}`} 
                      className="text-orange-500 hover:underline"
                    >
                      {event.contactEmail}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">Attendance</h3>
                    <p className="text-gray-600">
                      {event.registered} of {event.capacity} spots filled
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div 
                        className="bg-orange-500 h-2.5 rounded-full" 
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    {isPastEvent ? (
                      <div className="text-center py-3 bg-gray-100 text-gray-600 rounded-lg">
                        This event has ended
                      </div>
                    ) : event.registrationLink ? (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                      >
                        {event.isFree ? 'Register for Free' : `Register ($${event.price})`}
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full py-3 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed"
                      >
                        Registration Closed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">More Events You Might Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Web Dev Workshop</h3>
                  <p className="text-sm text-gray-600 mb-2">State University</p>
                  <p className="text-xs text-gray-500">Nov 18, 2023 • 2:00 PM</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">AI Seminar Series</h3>
                  <p className="text-sm text-gray-600 mb-2">Tech Institute</p>
                  <p className="text-xs text-gray-500">Nov 20, 2023 • 3:30 PM</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Hackathon 2023</h3>
                  <p className="text-sm text-gray-600 mb-2">City College</p>
                  <p className="text-xs text-gray-500">Nov 25, 2023 • All Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}