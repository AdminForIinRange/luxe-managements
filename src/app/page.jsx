import WhoWeAre from "@/components/whoWeAre/whoWeAre";
import { Box } from "@chakra-ui/react";
const Home = () => {
  return (
    <>
      <Box px={["2", "2", "5", "5", "5"]} pl={["2", "2", "5", "12", "12"]}>
     <WhoWeAre />
      </Box>
    </>
  );
};

export default Home;
