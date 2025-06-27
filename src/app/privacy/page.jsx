import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Privacy <span className="text-orange-500">Policy</span>
            </h1>
            <p className="text-xl text-gray-600">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="prose max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  Univent collects information to provide better services to our users. This includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email, university affiliation when you register</li>
                  <li><strong>Event Data:</strong> Events you attend, express interest in, or organize</li>
                  <li><strong>Usage Data:</strong> How you interact with our platform and services</li>
                  <li><strong>Device Information:</strong> Browser type, IP address, and operating system</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Personalize your experience and recommend relevant events</li>
                  <li>Communicate with you about events and platform updates</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Universities:</strong> For event verification and attendance tracking</li>
                  <li><strong>Service Providers:</strong> Third parties who help operate our platform</li>
                  <li><strong>Legal Compliance:</strong> When required by law or to protect rights</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us at <Link href="mailto:privacy@Univent.com" className="text-orange-500 hover:underline">privacy@Univent.com</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this policy periodically. We'll notify you of significant changes through our platform or email.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}