import { Box, VStack } from "@chakra-ui/react";
// import { fetchUsers } from "./lib/data";

import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/landingPage/homePage/homePage";
import AboutPage from "@/components/landingPage/aboutPage/aboutPage";
import Packages from "@/components/landingPage/packages/Packages";
const Home = () => {
  return (
    <>
      <Navbar />

      <HomePage />
      <AboutPage />
      <Packages />
    </>
  );
};

export default Home;
