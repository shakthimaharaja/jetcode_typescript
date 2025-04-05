import { Routes, Route } from "react-router-dom";
import Careers from "../Pages/Careers";
import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import WhatWeDo from "../Pages/WhatWeDo";
import WhoWeAre from "../Pages/WhoWeAre";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/WhatWeDo" element={<WhatWeDo />} />
      <Route path="/WhoWeAre" element={<WhoWeAre />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Careers" element={<Careers />} />
    </Routes>
  );
};
