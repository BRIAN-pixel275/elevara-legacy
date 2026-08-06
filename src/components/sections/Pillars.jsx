import {
  FaSeedling,
  FaBriefcase,
  FaCoins,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

function Pillars() {
  const pillars = [
    {
      icon: <FaSeedling />,
      title: "Personal Growth",
      text: "Develop confidence, purpose, resilience and leadership skills that empower women to thrive."
    },
    {
      icon: <FaBriefcase />,
      title: "Career & Entrepreneurship",
      text: "Learn business, branding, digital skills and entrepreneurship to unlock new opportunities."
    },
    {
      icon: <FaCoins />,
      title: "Financial Empowerment",
      text: "Master budgeting, saving, investing, wealth creation and financial independence."
    },
    {
      icon: <FaUsers />,
      title: "Leadership & Mentorship",
      text: "Connect with mentors, build leadership skills and grow within a supportive community."
    },
    {
      icon: <FaHeart />,
      title: "Legacy & Impact",
      text: "Create lasting change through family wealth, estate planning and generational impact."
    }
  ];

  return (
    <section className="pillars">

      <div className="pillars-container">

        <div className="section-header">

          <span className="section-tag">
            What We Do
          </span>

          <h2>Our Five Pillars</h2>

          <p>
            Every program at Elevara Legacy is built around
            five powerful pillars designed to help women
            grow personally, professionally and financially.
          </p>

        </div>

        <div className="pillar-grid">

          {pillars.map((pillar, index) => (
            <div className="pillar-card" key={index}>

              <div className="pillar-icon">
                {pillar.icon}
              </div>

              <h3>{pillar.title}</h3>

              <p>{pillar.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Pillars;