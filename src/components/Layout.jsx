import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterCTA from "./FooterCTA";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterCTA />
      <Footer />
    </>
  );
};

export default Layout;
