
import { Box, VStack } from "@chakra-ui/react";
import { fetchUsers } from "./lib/data";
import HomePage from "@/components/navbar/landingPage/homePage/homePage";
const Home = () => {

  return (
    <>
    <VStack h="100vh" px={["100px", "100px", "100px", "100px", "100px", "100px"]}>

    <HomePage/>
    </VStack>


      
    </>
  );
};

export default Home;

