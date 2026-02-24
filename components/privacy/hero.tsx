"use client";

export default function PrivacyPolicy() {
  const policyData = [
    {
      title: "What This Privacy Policy Covers",
      content: [
        "This Privacy Policy outlines our use of personally identifiable information that is shared by you on our site. It also covers the treatment of personally identifiable information shared with us.This policy applies to personally identifiable information collected through any app owned and operated by Mangalya Group.It does not apply to organizations not owned or controlled by us, nor to people who are not employed or managed by us. Additionally, it does not cover information required to be shared with public or private authorities as per applicable laws, court orders, or directions.",
      ],
    },
    {
      title: "Information Collection and Use",
      content: [
        "We use your personal information solely to provide and improve our services. By using the site, you consent to the collection and use of information as described in this Privacy Policy. We collect personally identifiable information when you submit an inquiry form on our website or interact with our apps. While using our website, we may ask for certain personally identifiable details that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name. By providing this information, you consent to being contacted, overriding the DNC/NDNC. When submitting a form, we may request your name, email address, and phone number, along with any other details you provide in your comments. Once submitted, this information is stored securely in our database and is not shared with third parties. We use this information to respond to your queries, maintain records for future reference, and communicate with you about our products and services. Like many website operators, we collect log data, which may include information such as your IP address, browser type, browser version, pages visited, time and date of visit, duration of visit, and other statistics. We may collect technical details, including device information, location data, and network carrier details when you use our mobile apps.",
      ],
    },
    {
      title: "The Information We Collect",
      bulletPoints: [
        {
          title: "Personal Information",
          content:
            " Name, gender, age, images, contact details (postal address, telephone number, email ID), nationality, and other content.",
        },
        {
          title: "Interactions with Us",
          content:
            "Records of any interactions with our team or any references to us on social media",
        },
        {
          title: "Survey Responses",
          content:
            "Information collected from customer surveys conducted by us or on our behalf.",
        },
        {
          title: "Website, App, and Social Media Usage",
          content:
            "Details of your visits to our website, interactions with our social media pages, and mobile app usage. This includes tracking technology such as cookies.",
        },
        {
          title: "Online Identifiers",
          content:
            "Mobile device advertising identifiers and geo-location data when using any Mangalya Group mobile application.",
        },
        {
          title: "Geo-Location Data",
          content:
            "Collected during the registration process on our apps to provide location-specific services.",
        },
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      bulletPoints: [
        {
          title:
            "We do not sell, rent, or share personally identifiable information with third parties except in the following circumstances:",
          content: "",
        },
        {
          title: "When we have your explicit consent.",
          content: "",
        },
        {
          title:
            "If required by law or in good faith belief that such disclosure is necessary to",
          content:
            "respond to legal processes, court orders, or law enforcement requests.",
        },
        {
          title: "To enforce our Privacy Policy or Terms of Service.",
          content: "",
        },
        {
          title:
            "To respond to claims that content on our website violates the rights of third parties.",
          content: "",
        },
        {
          title:
            "To protect the rights, property, or personal safety of our users or the general public.",
          content: "",
        },
      ],
    },
    {
      title: "Intellectual Property and Restrictions on Use",
      bulletPoints: [
        {
          title:
            "The content and design of this website are the exclusive property of Mangalya Group.",
          content:
            "No person may use, reproduce, or allow others to use or reproduce any content, logos, or images without prior written consent from Mangalya Group.",
        },
        {
          title:
            "The retrieval and display of website content for personal, commercial, or non-commercial purposes, as well as any modification or commercial use of content, are strictly prohibited.",
          content:
            "Unauthorized use of website content is prohibited and may result in legal action.",
        },
      ],
    },
    {
      title: "Policy Updates",
      bulletPoints: [
        {
          title:
            "This Privacy Policy is subject to change, and any modifications will be communicated on this page",
          content: "",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="bg-white py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-poppins text-[25px] md:text-[40px] font-medium text-gray-900 mb-2 text-center">
            Privacy Policy
          </h1>

          {/* Introduction */}
          <div className="p-2 md:p-6 mb-2">
            <p className="font-poppins font-light text-gray-700 text-[13px] leading-relaxed text-center">
              Mangalya Group is committed to maintaining the privacy and
              accuracy of the information provided on this site. All information
              is shared with the complete knowledge of the owner, and
              appropriate measures have been taken to ensure that users’
              credentials are not misused, accidentally destroyed, or lost
              within the environment of Mangalya Group. While care has been
              taken in the production of information on this website, Mangalya
              Group does not accept any liability for any loss incurred by
              anyone relying on the information contained herein.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-white px-6 md:px-12 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {policyData.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            >
              {/* Section Title */}
              <div className="md:col-span-1">
                <h2 className="font-poppins text-[18px] md:text-[25px] font-medium text-gray-900 sticky top-20">
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div className="md:col-span-2">
                {section.bulletPoints ? (
                  // Bullet points format
                  <ul className="space-y-4">
                    {section.bulletPoints.map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="text-[#16a34a] font-bold text-lg flex-shrink-0 mt-0.5">
                          •
                        </span>
                        <div>
                          <p className="font-poppins font-light text-gray-900 font-semibold text-[13px]">
                            {item.title}
                          </p>
                          {item.content && (
                            <p className="font-poppins font-light text-gray-700 text-[13px] leading-relaxed mt-1">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-4">
                    {section.content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="font-poppins font-light text-gray-700 text-[13px] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
