"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AllEvents } from "../api/actions/events";

export default function Events() {
  // Proper state management
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const eventTypes = [
    { id: "all", name: "All Events" },
    { id: "workshop", name: "Workshops" },
    { id: "festival", name: "Festivals" },
    { id: "competition", name: "Competitions" },
    { id: "exhibition", name: "Exhibitions" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        
        const data = await AllEvents();
        
        if (data) {
          setEventsData(data);
        } else {
          throw new Error('No data received from API');
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message || 'Failed to fetch events');
        setEventsData([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []); // Empty dependency array is correct here

  // Filter events based on search and filter criteria
  const filteredEvents = eventsData.filter((event) => {
    // Use consistent property names - check both type and category
    const eventType = event.type || event.category || '';
    const matchesFilter = activeFilter === "all" || eventType.toLowerCase() === activeFilter.toLowerCase();
    
    const matchesSearch =
      (event.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (event.college?.toLowerCase() || '').includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
        <section className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Upcoming <span className="text-orange-500">Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover workshops, fests, and activities across partner colleges
          </p>
        </section>
        
        <section className="container mx-auto px-6">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading events...</p>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
        
        <section className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Upcoming <span className="text-orange-500">Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover workshops, fests, and activities across partner colleges
          </p>
        </section>

        
        <section className="container mx-auto px-6">
          <div className="px-12 max-w-2xl mx-auto text-center">
            
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  ></path>
                </svg>
              </div>
            </div>

            
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-gray-600 mb-2">
              We couldn't load the events right now
            </p>
            <p className="text-sm text-red-600 mb-6 bg-red-50 p-3 rounded">
              {error}
            </p>

            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                🔄 Try Again
              </button>
              <Link
                href="/events"
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Browse Colleges Instead
              </Link>
            </div>

           
            <p className="text-xs text-gray-500 mt-6">
              If the problem persists, please contact our support team
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
        <section className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Upcoming <span className="text-orange-500">Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover workshops, fests, and activities across partner colleges
          </p>
        </section>

        <section className="container mx-auto px-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ">
              <div className="w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search events or colleges..."
                  className="w-full md:w-60 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveFilter(type.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === type.id
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {event.image ? (
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {event.category || event.type || 'Event'}
                      </span>
                      <span className="text-sm text-gray-500">
                        {event.date ? new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        }) : 'TBD'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {event.title || 'Untitled Event'}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.college || 'College TBD'}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <span className="mr-4">⏱️ {event.time || 'Time TBD'}</span>
                      <span>📍 {event.location || 'Location TBD'}</span>
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {event.description || 'No description available.'}
                    </p>
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                {eventsData.length === 0 ? 'No events available' : 'No events found'}
              </h3>
              <p className="text-gray-500">
                {eventsData.length === 0 
                  ? 'Check back later for upcoming events' 
                  : 'Try adjusting your search or filters'
                }
              </p>
            </div>
          )}
        </section>

        <section className="container mx-auto px-6 mt-16">
          <div className="bg-blue-800 rounded-xl text-white p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Hosting an event at your college?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              List your event on Univent and reach thousands of students across
              multiple campuses
            </p>
            <Link
              href="/colleges"
              className="inline-block bg-white hover:bg-gray-100 text-blue-800 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}