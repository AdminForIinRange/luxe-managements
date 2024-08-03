
import { Box, VStack } from "@chakra-ui/react";
import { fetchUsers } from "./lib/data";

import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/landingPage/homePage/homePage";
const Home = () => {

  return (
    <>
    <Navbar />
    <VStack  px={["100px", "100px", "0px", "0px", "0px", "0px"]}>

    <HomePage/>
    </VStack>


      
    </>
  );
};

export default Home;

