import { Box, VStack } from "@chakra-ui/react";
// import { fetchUsers } from "./lib/data";

import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/landingPage/homePage/homePage";
import AboutPage from "@/components/landingPage/aboutPage/aboutPage";
import Packages from "@/components/landingPage/packages/Packages";
import GettingStarted from "@/components/landingPage/gettingStarted/gettingStarted";
import Testimonials from "@/components/landingPage/testimonials/testimonials";
import Faq from "@/components/landingPage/faq/faq";
import Footer from "@/components/landingPage/footer/footer";
const Home = () => {
  return (
    <>
      <Navbar />

      <HomePage />
      <AboutPage />
      <Packages />
      <GettingStarted />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
