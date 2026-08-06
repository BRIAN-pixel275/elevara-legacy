import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {

  const faqs = [
    {
      question: "Who can join Elevara Legacy?",
      answer:
        "Elevara Legacy welcomes women from all backgrounds who are passionate about personal growth, leadership, financial empowerment, and creating a lasting impact.",
    },
    {
      question: "Are the programs free?",
      answer:
        "Some programs are free while others may require a registration fee. Details are provided for each program or event.",
    },
    {
      question: "How do I become a member?",
      answer:
        "You can join our community by completing the membership or contact form available on our website.",
    },
    {
      question: "Where are events held?",
      answer:
        "Events are hosted both physically and virtually depending on the program. Event details are shared in advance.",
    },
    {
      question: "How can I partner with Elevara Legacy?",
      answer:
        "We welcome partnerships with organizations, businesses, and individuals who share our mission of empowering women.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="faq-container">

        <div className="section-header">

          <span className="section-tag">
            FAQs
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Find answers to some of the most common questions
            about Elevara Legacy and our programs.
          </p>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{faq.question}</span>

                {activeIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;