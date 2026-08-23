import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../../assets/logos/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-grid">

          {/* Column 1 */}

          <div>

            <img
              src={logo}
              alt="Elevara Legacy"
              className="footer-logo"
            />

            <p>
              Empowering women with the knowledge,
              confidence, skills and opportunities to
              build lasting legacies for generations.
            </p>

          </div>

          {/* Column 2 */}

          <div>

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>

          </div>

          {/* Column 3 */}

          <div>

            <h3>Programs</h3>

            <p>Financial Literacy</p>
            <p>Leadership</p>
            <p>Entrepreneurship</p>
            <p>Personal Development</p>

          </div>

          {/* Column 4 */}

          <div>

            <h3>Contact</h3>

            <p>Nairobi, Kenya</p>
            <p>elevaralegacy@gmail.com</p>
            <p>+254 717 532 313</p>

            <div className="socials">

              <a href="https://www.facebook.com/profile.php?id=61593393921680">
                <FaFacebookF />
              </a>

              <a href="https://www.instagram.com/elevara.legacy/">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/in/elevara-legacy-05565b429/">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        <div className="copyright">

          © 2026 Elevara Legacy. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;