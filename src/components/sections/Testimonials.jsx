import { FaStar } from "react-icons/fa";

function Testimonials() {

    const testimonials = [

        {
            name: "Sarah Wanjiku",
            role: "Entrepreneur",
            message:
                "Elevara Legacy has completely transformed how I approach business, leadership and financial planning. The knowledge I gained has given me confidence to pursue bigger opportunities."
        },

        {
            name: "Mary Atieno",
            role: "Small Business Owner",
            message:
                "The mentorship and supportive community have inspired me to believe in myself and grow my business with confidence."
        },

        {
            name: "Grace Njeri",
            role: "Young Professional",
            message:
                "Every workshop leaves me feeling inspired and equipped with practical skills that I can immediately apply in my career and personal life."
        }

    ];

    return (

        <section className="testimonials">

            <div className="testimonials-container">

                <div className="section-header">

                    <span className="section-tag">
                        Success Stories
                    </span>

                    <h2>
                        Voices of Transformation
                    </h2>

                    <p>
                        Every journey begins with one step.
                        These stories represent the impact that
                        learning, mentorship and community can create.
                    </p>

                </div>

                <div className="testimonial-grid">

                    {testimonials.map((item, index) => (

                        <div className="testimonial-card" key={index}>

                            <div className="stars">

                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>

                            <p className="quote">
                                "{item.message}"
                            </p>

                            <div className="profile">

                                <div className="avatar">
                                    {item.name.charAt(0)}
                                </div>

                                <div>

                                    <h4>{item.name}</h4>

                                    <span>{item.role}</span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Testimonials;