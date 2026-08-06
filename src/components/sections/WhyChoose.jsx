import {
  FaUserGraduate,
  FaHandshake,
  FaChartLine,
  FaGlobeAfrica,
} from "react-icons/fa";

function WhyChoose() {

  const features = [

    {
      icon: <FaUserGraduate />,
      title: "Expert Mentorship",
      description:
        "Learn from experienced mentors and professionals committed to helping women grow personally and professionally."
    },

    {
      icon: <FaChartLine />,
      title: "Practical Learning",
      description:
        "Gain real-world skills in financial literacy, entrepreneurship and leadership through practical training."
    },

    {
      icon: <FaHandshake />,
      title: "Supportive Community",
      description:
        "Connect with like-minded women who encourage collaboration, accountability and shared success."
    },

    {
      icon: <FaGlobeAfrica />,
      title: "Generational Impact",
      description:
        "Create sustainable change by building wealth, confidence and leadership that benefits future generations."
    }

  ];

  return (

    <section className="why">

      <div className="why-container">

        <div className="section-header">

          <span className="section-tag">
            Why Elevara Legacy
          </span>

          <h2>
            Empowering Women Through Purposeful Growth
          </h2>

          <p>
            Everything we do is designed to help women
            become confident leaders, financially empowered
            individuals and positive influences within their
            families and communities.
          </p>

        </div>

        <div className="why-grid">

          {features.map((feature, index) => (

            <div className="why-card" key={index}>

              <div className="why-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default WhyChoose;