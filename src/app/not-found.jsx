import Link from 'next/link';

export const metadata = {
  title: "404 - Page Not Found | Univent",
  description: "Discover and promote university events in one place",
};

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-2xl mx-auto">
         
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-blue-800 opacity-10">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 mx-auto text-orange-500 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h1 className="text-3xl font-bold text-gray-800 mt-4">Page Not Found</h1>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="space-y-4">
            <p className="text-gray-700">
              Here are some helpful links instead:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition-colors"
              >
                Homepage
              </Link>
              <Link
                href="/events"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                Browse Events
              </Link>
              <Link
                href="/colleges"
                className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-800 border border-gray-300 rounded-full font-medium transition-colors"
              >
                Partner Colleges
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}