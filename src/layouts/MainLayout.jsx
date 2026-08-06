import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
      <ScrollToTopButton />

      <Footer />
    </>
  );
}

export default MainLayout;