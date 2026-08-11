import { Helmet } from "react-helmet-async";
import "../styles/contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Elevara Legacy</title>

        <meta
          name="description"
          content="Get in touch with Elevara Legacy. Have questions, want to partner with us, or need more information? We're here to help."
        />
      </Helmet>

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">
        <div className="contact-container">
          <span className="section-tag">
            Contact Us
          </span>

          <h1>
            We'd Love to Hear From You
          </h1>

          <p>
            Whether you have a question, want to partner with us,
            become a volunteer or join our community, our team is
            here to help.
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-grid">

            {/* CONTACT INFO */}

            <div className="contact-info">

              <span className="section-tag">
                Get In Touch
              </span>

              <h2>
                Let's Start a Conversation
              </h2>

              <p>
                We'd love to hear from you. Whether you're interested
                in our programs, partnerships, volunteering or have
                general inquiries, feel free to reach out.
              </p>

              {/* Location */}

              <div className="contact-item">

                <FaMapMarkerAlt className="contact-icon" />

                <div>
                  <h3>Location</h3>
                  <p>Nairobi, Kenya</p>
                </div>

              </div>

              {/* Phone */}

              <div className="contact-item">

                <FaPhoneAlt className="contact-icon" />

                <div>
                  <h3>Phone</h3>
                  <p>+254 717 532 313</p>
                </div>

              </div>

              {/* Email */}

              <div className="contact-item">

                <FaEnvelope className="contact-icon" />

                <div>
                  <h3>Email</h3>
                  <p>elevaralegacy@gmail.com</p>
                </div>

              </div>

              {/* Office Hours */}

              <div className="contact-item">

                <FaClock className="contact-icon" />

                <div>
                  <h3>Office Hours</h3>
                  <p>
                    Monday – Friday | 8:00 AM – 5:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* =========================
                CONTACT FORM
            ========================= */}

            <div className="contact-form">

              <form
                action="https://formspree.io/f/mzeprkqv"
                method="POST"
              >

                {/* Name */}

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />

                {/* Email */}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />

                {/* Subject */}

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />

                {/* Message */}

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>

                {/* Optional Formspree settings */}

                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Message - Elevara Legacy"
                />

                <button type="submit">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          SOCIAL MEDIA
      ========================= */}

      <section className="social-connect">

        <div className="contact-container">

          <span className="section-tag">
            Stay Connected
          </span>

          <h2>
            Follow Our Journey
          </h2>

          <p>
            Stay inspired by following Elevara Legacy on social
            media. Discover upcoming events, empowering stories,
            leadership insights and opportunities to connect with
            our growing community.
          </p>

          <div className="social-grid">

            {/* Facebook */}

            <a
              href="https://facebook.com/your-page"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />

              <h3>Facebook</h3>

              <span>
                Join our community
              </span>
            </a>

            {/* Instagram */}

            <a
              href="https://instagram.com/your-profile"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />

              <h3>Instagram</h3>

              <span>
                Daily inspiration
              </span>
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/company/your-company"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />

              <h3>LinkedIn</h3>

              <span>
                Professional network
              </span>
            </a>

            {/* WhatsApp */}

            <a
              href="YOUR_WHATSAPP_CHANNEL_LINK"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />

              <h3>
                WhatsApp
              </h3>

              <span>
                Join our channel
              </span>
            </a>

            {/* YouTube */}

            <a
              href="https://youtube.com/@your-channel"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />

              <h3>
                YouTube
              </h3>

              <span>
                Watch our stories
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="contact-cta">

        <div className="contact-container">

          <span className="section-tag">
            Join the Movement
          </span>

          <h2>
            Together, We Can Build a Legacy of Empowered Women
          </h2>

          <p>
            Every conversation begins with a single step. Whether
            you're looking to join our community, partner with us,
            volunteer, or support our mission, we'd love to connect
            and make a lasting impact together.
          </p>

          <div className="contact-cta-buttons">

            <a
              href="/community"
              className="primary-btn"
            >
              Become a Member
            </a>

            <a
              href="/programs"
              className="secondary-btn"
            >
              Explore Our Programs
            </a>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;