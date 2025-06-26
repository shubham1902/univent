import Link from "next/link";

// export const metadata = {
//   title: "About Univent - The Unified College Events Platform",
//   description: "Learn about Univent's mission to connect students with campus events across universities",
// };

export default function About() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
        <section className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            About <span className="text-orange-500">Univent</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Connecting students with campus life, one event at a time
          </p>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Univent was born from a simple idea: college students should
                never miss out on amazing campus events just because they didn't
                hear about them. We're creating a unified platform where all
                university events can be discovered in one place.
              </p>
              <p>
                Our goal is to help students make the most of their college
                experience by connecting them with workshops, social events,
                career fairs, and cultural activities happening across campuses.
              </p>
              <p className="font-medium text-blue-800">
                One platform. All events. Endless possibilities.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                    The Beginning
                  </h3>
                  <p className="text-gray-700">
                    Founded in 2023 by university students frustrated with the
                    fragmented event discovery process. We noticed students were
                    missing events simply because information was scattered
                    across different platforms.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                    The Growth
                  </h3>
                  <p className="text-gray-700">
                    What started as a campus project quickly expanded to
                    multiple universities. Today, Univent serves over 120
                    colleges and has helped organize thousands of successful
                    events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              The Team Behind Univent
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Shubham Joshi",
                  role: "Co-Founder",
                  bio: "Computer Science graduate who saw the need for centralized event management",
                },
                {
                  name: "Divyanshu Naugai",
                  role: "Co-Founder",
                  bio: "Communication and Signal Processing specialist fond of event organization",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 text-center"
                >
                  <div className="h-24 w-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
                  <h3 className="text-xl font-bold text-blue-800">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12 text-center">
          <div className="bg-blue-800 rounded-xl text-white p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to transform campus events?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're a student looking for events or a college wanting
              to promote yours, Univent has you covered.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition"
              >
                Join as Student
              </Link>
              <Link
                href="/colleges"
                className="bg-white hover:bg-gray-100 text-blue-800 px-6 py-3 rounded-full font-medium transition"
              >
                College Partnership
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
