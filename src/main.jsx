import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import AOS from "aos";
import "aos/dist/aos.css";

import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import "./styles/navbar.css";  
import "./styles/hero.css"; 
import "./styles/about.css";
import "./styles/pillars.css";
import "./styles/programspage.css";
import "./styles/why.css";
import "./styles/events.css";
import "./styles/testimonials.css";
import "./styles/cta.css";
import "./styles/footer.css";
import "./styles/faq.css";
import "./styles/homeprograms.css";
import "./styles/community.css";
import "./styles/events-page.css";
import "./styles/contact.css";
import "./styles/scrollTop.css";
import "./styles/notfound.css";



AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<React.StrictMode>
    <HelmetProvider>
        <App />
    </HelmetProvider>
</React.StrictMode>
