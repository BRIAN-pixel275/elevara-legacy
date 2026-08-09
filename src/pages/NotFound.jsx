import { Link } from "react-router-dom";
import "../styles/notfound.css";

function NotFound() {
  return (
    <main className="not-found">

      <div className="not-found-content">

        <span className="not-found-code">
          404
        </span>

        <h1>
          Page Not Found
        </h1>

        <p>
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="not-found-btn"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}

export default NotFound;