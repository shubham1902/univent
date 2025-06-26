"use client";
import { useState } from "react";
import Link from "next/link";

// export const metadata = {
//   title: "Colleges | Univent - University Event Platform",
//   description: "Discover colleges using Univent to promote their campus events",
// };

const collegesData = [
  {
    id: 1,
    name: "State University",
    location: "Springfield, CA",
    eventsCount: 142,
    studentsCount: 24000,
    image: "/state-univ.jpg",
    description:
      "Leading public university with diverse academic programs and vibrant campus life",
    joinedDate: "2022-03-15",
  },
  {
    id: 2,
    name: "City College",
    location: "Metropolis, NY",
    eventsCount: 89,
    studentsCount: 18000,
    image: "/city-college.jpg",
    description: "Urban campus known for its business and arts programs",
    joinedDate: "2022-05-22",
  },
  {
    id: 3,
    name: "Polytechnic Institute",
    location: "Techville, TX",
    eventsCount: 76,
    studentsCount: 12500,
    image: "/polytech.jpg",
    description:
      "STEM-focused institution with cutting-edge research facilities",
    joinedDate: "2022-08-10",
  },
  {
    id: 4,
    name: "Liberal Arts College",
    location: "Greenfield, MA",
    eventsCount: 53,
    studentsCount: 8500,
    image: "/liberal-arts.jpg",
    description:
      "Small college with strong humanities and social sciences programs",
    joinedDate: "2023-01-05",
  },
];

export default function Colleges() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredColleges = collegesData.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Partner <span className="text-orange-500">Colleges</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Universities using Univent to connect with students through events
          </p>
        </section>

   
        <section className="container mx-auto px-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Search colleges by name or location..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          {filteredColleges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredColleges.map((college) => (
                <div
                  key={college.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gray-200"></div>{" "}
                  {/* Replace with Image component */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {college.name}
                    </h3>
                    <p className="text-gray-600 mb-4">📍 {college.location}</p>

                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>🎉 {college.eventsCount} events</span>
                      <span>
                        👥 {college.studentsCount.toLocaleString()} students
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {college.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Joined{" "}
                        {new Date(college.joinedDate).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long" }
                        )}
                      </span>
                      <Link
                        href={`/colleges/${college.id}`}
                        className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors"
                      >
                        View Events →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No colleges found
              </h3>
              <p className="text-gray-500">Try adjusting your search query</p>
            </div>
          )}
        </section>

       
        <section className="container mx-auto px-6 mt-16">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl text-white p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="md:flex justify-between items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Want your college on Univent?
                  </h2>
                  <p className="text-blue-100">
                    Join our network of partner institutions and reach more
                    students with your events
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white hover:bg-gray-100 text-blue-800 px-6 py-3 rounded-full font-medium text-center transition-colors"
                  >
                    Contact Our Team
                  </Link>
                  <Link
                    href="/colleges/signup"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium text-center transition-colors"
                  >
                    Register Your College
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="container mx-auto px-6 mt-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Why Colleges Choose Univent
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Increased Visibility",
                  description:
                    "Your events reach students across multiple campuses",
                  icon: "👁️",
                },
                {
                  title: "Easy Management",
                  description:
                    "Simple dashboard to create and track all your events",
                  icon: "📊",
                },
                {
                  title: "Student Engagement",
                  description:
                    "Higher participation rates for your campus activities",
                  icon: "🎯",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 text-center"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
