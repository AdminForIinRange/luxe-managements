import { Box, VStack } from "@chakra-ui/react";
// import { fetchUsers } from "./lib/data";

import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/landingPage/homePage/homePage";
import AboutPage from "@/components/landingPage/aboutPage/aboutPage";
import Packages from "@/components/landingPage/packages/Packages";
import GettingStarted from "@/components/landingPage/gettingStarted/gettingStarted";
import Testimonials from "@/components/landingPage/testimonials/testimonials";
const Home = () => {
  return (
    <>
      <Navbar />

      <HomePage />
      <AboutPage />
      <Packages />
      <GettingStarted />
      <Testimonials />
    </>
  );
};

export default Home;
