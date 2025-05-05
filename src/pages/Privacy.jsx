import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/Navbar";
import Logo from "../assets/Logo.png";

export default function Privacy() {
  return (
    <div className="bg-black pl-10 pr-10 pb-10 max-[1320px]:pl-5 max-[1320px]:pr-5 max-[425px]:pl-2 max-[425px]:pr-2">
      <div className="min-h-screen bg-gray-50 rounded-b-[50px]">
        <div className="flex justify-between items-center gap-4 mr-10 pt-5 pl-5">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <Navbar />
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <p className="text-gray-600 mb-4">
                  This Privacy Policy governs the use of the website accessible
                  at www.fundobaba.com ("Website" or "Site") operated by U.Y.
                  Fincorp Limited. We are committed to upholding the privacy and
                  confidentiality of our users ("User" or "you") and ensure that
                  your personal data is handled in accordance with applicable
                  legal standards.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing or using this Website and any of its sub-links,
                  you acknowledge and agree to the terms of this Privacy Policy.
                  Continued use of the Website constitutes your express consent
                  to the collection, use, disclosure, and processing of personal
                  information by us in accordance with this Policy.
                </p>
              </section>

              {/* Collection of Personal Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. Collection of Personal Information
                </h2>
                <p className="text-gray-600">
                  We do not collect personal data unless voluntarily submitted
                  by you. Any such data voluntarily provided shall not be sold,
                  rented, or otherwise transferred to unrelated third parties,
                  except where expressly stated or with your prior consent.
                </p>
              </section>

              {/* Use and Disclosure of Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. Use and Disclosure of Information
                </h2>
                <p className="text-gray-600 mb-4">
                  Personal information collected shall be treated as private and
                  confidential. We shall not disclose such information to third
                  parties except under the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Compliance with applicable laws, regulations, legal
                    proceedings, or government requests;
                  </li>
                  <li>
                    Protection and defense of our rights or property or those of
                    other users;
                  </li>
                  <li>Enforcement of the Website's terms of use;</li>
                  <li>
                    In connection with any merger, acquisition, restructuring,
                    or sale of business or assets, where the successor entity
                    will be bound by this Privacy Policy.
                  </li>
                </ul>
              </section>

              {/* Communications and Marketing */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. Communications and Marketing
                </h2>
                <p className="text-gray-600">
                  Unless expressly opted out by you, we may use your email
                  address to disseminate promotional or service-related
                  communications. You retain the right to unsubscribe from such
                  communications through provided mechanisms.
                </p>
              </section>

              {/* Data Analytics and Aggregation */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  5. Data Analytics and Aggregation
                </h2>
                <p className="text-gray-600">
                  We may collect PAN, Aadhaar, bank details, credit history, and
                  transactional information may be collected during the loan
                  process. These are protected under applicable data privacy
                  laws. Such information may be used to assess Website
                  performance and user engagement. Only aggregated data may be
                  shared with advertisers or third parties, ensuring no
                  individual identification.
                </p>
              </section>

              {/* Security of Communications */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  6. Security of Communications
                </h2>
                <p className="text-gray-600">
                  We endeavor to safeguard all communications; however, we do
                  not warrant that emails or data transmissions via the internet
                  are completely secure. You are advised to exercise discretion
                  when sharing sensitive information online.
                </p>
              </section>

              {/* Intellectual Property and Use Restrictions */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  7. Intellectual Property and Use Restrictions
                </h2>
                <p className="text-gray-600">
                  All content on this Website, including but not limited to
                  text, graphics, logos, and trademarks, is our intellectual
                  property. Any reproduction, modification, distribution,
                  republication, or commercial exploitation of content without
                  our express written permission is strictly prohibited and
                  constitutes an infringement of intellectual property rights.
                </p>
              </section>

              {/* Use by Minors */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  8. Use by Minors
                </h2>
                <p className="text-gray-600">
                  Use of the Website is restricted to individuals who are
                  legally competent to enter into binding contracts under Indian
                  law. Persons deemed "incompetent to contract" under the Indian
                  Contract Act, 1872—including minors and un-discharged
                  insolvents—are prohibited from using this Website.
                </p>
              </section>

              {/* Disclaimer and Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  9. Disclaimer and Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  The Website and its content are provided on an "as is" and "as
                  available" basis. We make no representations or warranties,
                  express or implied, regarding the accuracy, adequacy, or
                  completeness of the content. We disclaim all liabilities for
                  damages arising from the use of or inability to use the
                  Website, including but not limited to direct, indirect,
                  incidental, or consequential losses.
                </p>
              </section>

              {/* Third-Party APIs and Data Protection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  10. Third-Party APIs and Data Protection
                </h2>
                <p className="text-gray-600">
                  Our services may integrate with third-party Application
                  Programming Interfaces (APIs), including those provided by
                  RBI-regulated entities, to enhance functionality and access
                  real-time information. While we rely on the availability and
                  accuracy of data from these external sources, we do not
                  guarantee their uninterrupted operation or completeness.
                </p>
                <p className="text-gray-600 mt-4">
                  We are committed to protecting your personal and financial
                  information. All data accessed or shared via third-party APIs
                  is handled securely and in compliance with applicable data
                  protection laws. Your data remains protected and is shared
                  only with trusted, regulated entities under appropriate
                  safeguards.
                </p>
              </section>

              {/* Data Retention & Preservation */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  11. Data Retention & Preservation
                </h2>
                <p className="text-gray-600">
                  We retain personal and financial data for the duration
                  necessary to fulfill regulatory, legal, and operational
                  requirements. In particular, data is stored in accordance with
                  the retention norms prescribed by the Reserve Bank of India
                  (RBI), which may include specific minimum and maximum
                  retention periods. After the applicable retention period, data
                  is securely deleted, anonymized, or archived, unless required
                  otherwise by law.
                </p>
              </section>

              {/* Submission of Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  12. Submission of Information
                </h2>
                <p className="text-gray-600">
                  All information submitted to us through the Website shall be
                  deemed our property. You should exercise caution when
                  inputting personal data to ensure it is not visible to
                  unauthorized third parties.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  13. Changes to Privacy Policy
                </h2>
                <p className="text-gray-600">
                  We reserve the right to amend or modify this Privacy Policy at
                  any time without prior notice. You are advised to review the
                  policy periodically to remain informed of any changes.
                  Continued use of the Website constitutes your acceptance of
                  the modified policy.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  14. Cookies
                </h2>
                <p className="text-gray-600">
                  We may employ "cookies" to enhance your experience. Cookies
                  are session-specific and do not access any data from your
                  device. Third-party cookies may be encountered, and we
                  disclaim any liability for such third-party practices.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  15. Contact Us
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 mb-2">
                    For questions or concerns about our privacy practices,
                    please contact:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>For General Queries: info@fundobaba.com</li>
                    <li>For Existing Customers: support@fundobaba.com</li>
                    <li>Phone: 8882400700</li>
                    <li>
                      Customer Support Hours: 09:00 AM to 05:30 PM (Monday to
                      Saturday)
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
