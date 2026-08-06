function ProgramsSection() {

    const programs = [

        {
            title: "Financial Literacy",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900",
            description:
                "Learn budgeting, saving, investing and wealth creation strategies that lead to financial independence."
        },

        {
            title: "Entrepreneurship",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900",
            description:
                "Turn your ideas into successful businesses through mentorship, branding and practical business skills."
        },

        {
            title: "Digital Skills",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
            description:
                "Master modern digital tools, online marketing and technology to unlock new opportunities."
        },

        {
            title: "Personal Development",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
            description:
                "Develop confidence, leadership, communication and personal growth through transformative learning."
        }

    ];

    return (

        <section className="home-programs">

            <div className="home-programs-container">

                <div className="section-header">

                    <span className="section-tag">
                        Our Programs
                    </span>

                    <h2>Learn. Grow. Lead.</h2>

                    <p>
                        Practical programs designed to help every woman
                        discover her potential and create lasting impact.
                    </p>

                </div>

                <div className="home-program-grid">

                    {programs.map((program, index) => (

                        <div className="home-program-card" key={index}>

                            <img
                                src={program.image}
                                alt={program.title}
                            />

                            <div className="home-program-content">

                                <h3>{program.title}</h3>

                                <p>{program.description}</p>

                                <button>
                                    Learn More →
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default ProgramsSection;