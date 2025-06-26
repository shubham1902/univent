"use client";
import { useState } from "react";
import Link from "next/link";

// export const metadata = {
//   title: "Events | Univent - Discover Campus Events",
//   description: "Browse upcoming university events, workshops, and activities",
// };
 
const eventsData = [
  {
    id: 1,
    title: "Tech Symposium 2023",
    college: "State University",
    date: "2023-11-15",
    time: "10:00 AM",
    type: "workshop",
    category: "Technology",
    location: "Campus Tech Center",
    description:
      "Annual technology conference featuring industry leaders and hands-on workshops",
    image: "/tech-event.jpg", 
  },
  {
    id: 2,
    title: "Cultural Fest",
    college: "City College",
    date: "2023-11-20",
    time: "2:00 PM",
    type: "festival",
    category: "Cultural",
    location: "Main Quadrangle",
    description:
      "Celebrate diversity with food, music and performances from around the world",
    image: "/cultural-event.jpg",
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    college: "Business Institute",
    date: "2023-12-05",
    time: "9:30 AM",
    type: "competition",
    category: "Business",
    location: "Innovation Hub",
    description: "Student entrepreneurs pitch their ideas to investors",
    image: "/startup-event.jpg",
  },
  {
    id: 4,
    title: "Science Fair",
    college: "Polytechnic University",
    date: "2023-12-10",
    time: "11:00 AM",
    type: "exhibition",
    category: "Science",
    location: "Science Building",
    description: "Showcase of student research projects and innovations",
    image: "/science-event.jpg",
  },
];

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const eventTypes = [
    { id: "all", name: "All Events" },
    { id: "workshop", name: "Workshops" },
    { id: "festival", name: "Festivals" },
    { id: "competition", name: "Competitions" },
    { id: "exhibition", name: "Exhibitions" },
  ];

  const filteredEvents = eventsData.filter((event) => {
    const matchesFilter = activeFilter === "all" || event.type === activeFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.college.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search events or colleges..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                  <div className="h-48 bg-gray-200"></div>{" "}
                  {/* Replace with Image component */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {event.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.college}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <span className="mr-4">⏱️ {event.time}</span>
                      <span>📍 {event.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {event.description}
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
                No events found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
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
