"use client";
import React, { useState } from "react";
import Head from "next/head";
import SectionTitle from "../common/sectionTitle";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      show: true,
      question: "How can I download the free coding templates?",
      answer:
        "To download the free coding templates, simply visit our website and browse through the available templates. Click on the template you're interested in, and you'll find a download link provided. No account registration is required for accessing free templates.",
    },
    {
      id: 2,
      show: false,
      question: "How do I register to sell my templates?",
      answer:
        "If you wish to sell your coding templates on our website, you need to create an account. Click on the 'Register' button on the website's homepage, fill in the required details, and complete the registration process. Once registered, you can upload and list your templates for sale.",
    },
    {
      id: 3,
      show: false,
      question: "What is the fee structure for selling templates?",
      answer:
        "For each template sale, we charge a 20% commission fee (This price may vary in future). The remaining 80% of the sale amount is provided to the site owner. This fee helps us maintain and enhance the platform, ensuring a seamless experience for both buyers and sellers.",
    },
    {
      id: 4,
      show: false,
      question: "How are the templates reviewed before publishing?",
      answer:
        "To ensure the quality and integrity of the templates available on our platform, we review each template before publishing it for sale. Our team of experts examines the code to ensure it meets our standards and is free from any vulnerabilities or malicious code.",
    },
    {
      id: 5,
      show: false,
      question: "Do I need to provide a live preview of my template?",
      answer:
        "While providing a live preview of your template is not mandatory, it can greatly enhance the buying experience for potential customers. A live preview allows buyers to see how the template looks and functions in a real-time environment. We encourage sellers to provide live previews whenever possible.",
    },
    {
      id: 6,
      show: false,
      question: "What happens after I upload my template for sale?",
      answer:
        "Once you upload your template for sale, our team will review it to ensure its quality and compliance with our guidelines. If any issues or improvements are identified, we may provide feedback for you to address. Once approved, your template will be listed on our website, and potential buyers can purchase it.",
    },
    {
      id: 7,
      show: false,
      question: "Can I sell templates that I have obtained from other sources?",
      answer:
        "To maintain the integrity of our platform and respect intellectual property rights, we only allow the sale of templates that you have created yourself or have the necessary rights to sell. Selling templates obtained from other sources without proper authorization is strictly prohibited.",
    },
    {
      id: 8,
      show: false,
      question:
        "Are there any restrictions on the type of coding templates I can sell?",
      answer:
        "While we aim to provide a wide range of coding templates, we have certain guidelines in place. We do not allow the sale of templates containing malicious code, copyrighted content without proper authorization, or templates that promote unethical or illegal activities. Please refer to our terms and conditions for more detailed information.",
    },
  ]);

  const toggleFaq = (id) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, show: !faq.show } : faq))
    );
  };

  return (
    <>
      <Head>
        <title>SnipByte FAQ - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about SnipByte, coding templates, and our services. Get the information you need to enhance your coding experience."
        />
        <meta
          name="keywords"
          content="SnipByte, FAQ, frequently asked questions, coding templates, coding services, coding experience"
        />
        {/* Add more meta tags as needed */}
      </Head>
      <div className="bg-bgSlate">
        <div className="p-5 text-center mx-auto dark:text-white text-gray-950">
          <div className="py-10">
            <SectionTitle title="Frequently Asked Questions" />
          </div>

          <div
            id="accordion-collapse"
            className="md:text-left text-center border border-gray-200 rounded dark:border-gray-700 "
            data-accordion="collapse"
          >
            {faqs.map((faq) => (
              <div key={faq.id}>
                <h2 id={"accordion-collapse-body-" + faq.id}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200
                            focus:outline-none dark:border-gray-700 dark:text-gray-400 hover:bg-lightCard dark:hover:bg-darkCard"
                    data-accordion-target={"#accordion-collapse-body-" + faq.id}
                    aria-expanded={faq.show ? "true" : "false"}
                    aria-controls={"accordion-collapse-body-" + faq.id}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      data-accordion-icon
                      className={`w-6 h-6 ${
                        faq.show ? "rotate-180" : ""
                      } shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id={"accordion-collapse-body-" + faq.id}
                  className={faq.show ? "" : "hidden"}
                  aria-labelledby={`accordion-collapse-heading-${faq.id}`}
                >
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-darkCard bg-lightCard">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
