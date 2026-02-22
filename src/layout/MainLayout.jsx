import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBanner from "../sections/TopBanner";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <div className="relative">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout