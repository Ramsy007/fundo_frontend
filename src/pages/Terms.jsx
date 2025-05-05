import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/Navbar";
import Logo from "../assets/Logo.png";

export default function Terms() {
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
              Terms and Conditions
            </h1>

            <div className="space-y-8">
              {/* Disclaimer */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
                <p className="text-gray-700">
                  PLEASE READ THESE TERMS AND CONDITIONS ("TERMS") CAREFULLY.
                  THESE TERMS CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN YOU
                  AND FUNDOBABA, A BRAND LEGALLY REGISTERED UNDER U.Y. FINCORP
                  LIMITED ("THE COMPANY") IN JOINT VENTURE WITH FINTECH CLOUD
                  PRIVATE LIMITED. BY CLICKING "I ACCEPT" OR "I AGREE," OR BY
                  DOWNLOADING, INSTALLING, OR USING THE SERVICES IN ANY MANNER,
                  YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO
                  BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS,
                  YOU MUST NOT USE, INSTALL, OR ACCESS THE SERVICES.
                </p>
              </div>

              {/* Definitions */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  DEFINITIONS
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    "Web Platform","Application" or "App" refers to "Fundobaba,"
                    the web platform/ mobile software application developed and
                    maintained by the Company to facilitate access to its
                    Services.
                  </li>
                  <li>
                    "LENDER" denotes the financial institutions, including banks
                    and non-banking financial companies, that partner with the
                    Company to sanction, process, and disburse loans via the
                    Platform.
                  </li>
                  <li>
                    "Company" or "we" means Fundobaba, a platform managed by
                    U.Y. Fincorp Private Limited, incorporated under the
                    Companies Act, 2013, and administered by its appointed
                    representatives.
                  </li>
                  <li>
                    "Customer(s)," "you," or "End-Users" refers to any person
                    who visits, downloads, accesses, or uses the Platform or
                    Services.
                  </li>
                  <li>
                    "Loan" means the credit facility that a Customer may apply
                    for through the Platform, which is subsequently sanctioned
                    by the LENDER under mutually agreed terms.
                  </li>
                  <li>
                    "Loan Agreement" refers to the agreement executed between
                    the Customer and the LENDER for the provision of the Loan,
                    in physical or electronic form.
                  </li>
                  <li>
                    "Outstanding Amount(s)" includes the total of the principal
                    loan, interest, fees, penalties, and other charges due to
                    the LENDER.
                  </li>
                  <li>
                    "Platform" collectively refers to both the mobile
                    Application and the official Website.
                  </li>
                  <li>
                    "Services" means the facilitation of short-term lending
                    solutions offered by the LENDER through the Platform.
                  </li>
                  <li>
                    "Third Party Platforms" refers to external websites or
                    applications such as Facebook, LinkedIn, or other social
                    media or data services.
                  </li>
                  <li>
                    "User Data" includes all personal or financial information,
                    documents, or materials submitted or uploaded by the
                    Customer during or prior to availing the Services.
                  </li>
                  <li>
                    "Website" refers to www.fundobaba.com, the official web
                    portal managed by the Company for rendering its Services.
                  </li>
                </ul>
              </section>

              {/* Description of Services */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  DESCRIPTION OF SERVICES
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The Platform enables eligible Customers to apply for credit
                    facilities subject to verification and validation of
                    requisite criteria. The Company, acting on behalf of the
                    LENDER, may collect, verify, and assess User Data and
                    related documents to process such applications. All personal
                    and financial information, including but not limited to
                    identity proof, contact details, salary slips, bank
                    statements, PAN card, and other Know Your Customer (KYC)
                    documentation, may be collected via the Application or
                    Website.
                  </p>
                  <p>
                    By using the Services, you consent to the Company accessing,
                    importing, and processing your data, including information
                    sourced from Third Party Platforms, for the purpose of
                    validating your credentials. You also acknowledge and agree
                    that updates to your information may be periodically fetched
                    from such sources to ensure continued compliance with
                    applicable laws and regulations.
                  </p>
                </div>
              </section>

              {/* Regulations */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  REGULATIONS
                </h2>
                <p className="text-gray-600 mb-4">
                  By using the Platform and Services, you agree not to:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>
                    Engage in any fraudulent activities, embezzlement, money
                    laundering, or unlawful conduct of any nature.
                  </li>
                  <li>
                    Reproduce, duplicate, copy, sell, resell, or otherwise
                    exploit any portion of the Platform without proper
                    authorization.
                  </li>
                  <li>
                    Upload, post, email, transmit, or make available any content
                    that is unlawful, harmful, threatening, abusive, harassing,
                    defamatory, vulgar, obscene, libelous, invasive of another's
                    privacy, hateful, or otherwise objectionable based on race,
                    ethnicity, or other discriminatory grounds.
                  </li>
                  <li>
                    Use the Platform to cause harm or injury to any third party.
                  </li>
                  <li>
                    Impersonate any individual or entity while using the
                    Platform.
                  </li>
                  <li>
                    Forge headers or manipulate identifiers to obscure the
                    origin of any content transmitted through the Platform.
                  </li>
                  <li>
                    Upload, post, email, transmit, or otherwise make available
                    any content that you do not have the legal right to
                    disseminate under applicable laws or contractual or
                    fiduciary obligations.
                  </li>
                  <li>
                    Upload, post, email, transmit, or otherwise make available
                    any content that infringes upon the intellectual property
                    rights of any party.
                  </li>
                  <li>
                    Upload, post, email, transmit, or otherwise make available
                    any unsolicited or unauthorized advertising, promotional
                    materials, "junk mail," "spam," "chain letters," "pyramid
                    schemes," or any other form of solicitation.
                  </li>
                  <li>
                    Upload, post, email, transmit, or otherwise make available
                    any material containing software viruses or any other
                    computer code, files, or programs designed to disrupt,
                    damage, or limit the functionality of any computer software,
                    hardware, or telecommunications equipment.
                  </li>
                  <li>
                    Disrupt the normal flow of communication or otherwise act in
                    a manner that negatively affects other users' ability to
                    engage in real-time interactions.
                  </li>
                  <li>
                    Interfere with or disrupt the operation of the Platform or
                    servers or networks connected to the Platform.
                  </li>
                  <li>
                    Intentionally or unintentionally violate any applicable
                    local, state, national, or international laws, regulations,
                    or ordinances with the force of law.
                  </li>
                </ol>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  CONTACT INFORMATION
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 mb-2">
                    Please report any concern to below address:
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
