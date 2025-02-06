import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactUs } from "./componant/ContactUs";
import CustomerReviews from "./componant/CustomerReviews";
import Footer from "./componant/Footer";
import Hero from "./componant/Hero";
import Navbar from "./componant/Navbar";
import PopularProducts from "./componant/PopularProducts";
import { Servi } from "./componant/Servi";
import Services from "./componant/Services";
import SpecialOffer from "./componant/SpecialOffer";
import Subscribe from "./componant/Subscribe";
import SuperQyality from "./componant/SuperQyality";
import "./index.css";
import Home from "./componant/Home";
import Contact from "./componant/Contact";
import NotFound from "./componant/NotFound";
import Teacher from "./componant/Teacher";
import Material from "./componant/Material";

export default function App() {
  return (
    <BrowserRouter>
      <main className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/material" element={<Material />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for 404 */}
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
