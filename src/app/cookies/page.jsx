export default function CookiesPolicy() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Cookies <span className="text-orange-500">Policy</span>
            </h1>
            <p className="text-xl text-gray-600">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="prose max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-700">
                  Cookies are small text files stored on your device when you visit websites. They help sites remember information about your visit.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">Univent uses cookies to:</p>
                <table className="w-full border-collapse text-gray-700 mb-4">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-4">Cookie Type</th>
                      <th className="text-left py-2 px-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-4 font-medium">Essential</td>
                      <td className="py-2 px-4">Enable core functionality like user authentication</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-4 font-medium">Performance</td>
                      <td className="py-2 px-4">Analyze site usage to improve services</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-4 font-medium">Functional</td>
                      <td className="py-2 px-4">Remember preferences and settings</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Marketing</td>
                      <td className="py-2 px-4">Deliver relevant advertisements</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We partner with third parties that may set cookies, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Google Analytics for usage statistics</li>
                  <li>Advertising networks for relevant promotions</li>
                  <li>Social media platforms for sharing functionality</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control cookies through your browser settings. However, disabling essential cookies may affect platform functionality.
                </p>
                <p className="text-gray-700">
                  Our cookie consent banner allows you to customize preferences when you first visit our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this policy as our cookie practices evolve. Significant changes will be communicated through our platform.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}