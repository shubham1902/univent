export default function TermsAndConditions() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Terms & <span className="text-orange-500">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="prose max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing or using Univent's platform, you agree to be bound by these Terms. If you disagree, you may not use our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">As a user, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide accurate registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the platform only for lawful purposes</li>
                  <li>Not engage in fraudulent activities or misrepresentation</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Event Participation</h2>
                <p className="text-gray-700">
                  Univent is not responsible for the content or conduct of third-party events listed on our platform. Event attendance is at your own risk.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All platform content, including logos and software, is our property or licensed to us. You may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Reproduce, modify, or distribute our content without permission</li>
                  <li>Use our branding without express written consent</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Termination</h2>
                <p className="text-gray-700">
                  We may suspend or terminate your account for violations of these Terms. You may terminate your account at any time through your settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700">
                  Univent shall not be liable for any indirect, incidental, or consequential damages arising from platform use. Our total liability is limited to fees paid to us in the past 6 months.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}