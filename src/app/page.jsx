'use client'
import { useState, useEffect } from 'react';


export default function Home() {
  const [stats, setStats] = useState({
    colleges: 0,
    events: 0,
    students: 0,
    workshops: 0
  });

 
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        colleges: prev.colleges < 120 ? prev.colleges + 3 : 120,
        events: prev.events < 450 ? prev.events + 8 : 450,
        students: prev.students < 10000 ? prev.students + 200 : 10000,
        workshops: prev.workshops < 85 ? prev.workshops + 2 : 85
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-4">
            Welcome to <span className="text-orange-500">Univent</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            One Platform, All College Events
          </p>
          <p className="max-w-2xl mx-auto text-gray-700 mb-12">
            Univent connects students with all university events, workshops, and activities 
            across campuses in one simple platform. Never miss out on what's happening around you!
          </p>
          
          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition">
              Explore Events
            </button>
            <button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition">
              Register College
            </button>
          </div>
        </section>

       
        <section className="bg-blue-800 text-white py-16">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">{stats.colleges}+</div>
              <div className="text-blue-200">Colleges</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">{stats.events}+</div>
              <div className="text-blue-200">Events</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">{stats.students}+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">{stats.workshops}+</div>
              <div className="text-blue-200">Workshops</div>
            </div>
          </div>
        </section>

       
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to explore campus events?
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 mb-8">
            Join thousands of students discovering and participating in events across universities.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition">
            Sign Up Now - It's Free!
          </button>
        </section>
      </main>
    </>
  );
}