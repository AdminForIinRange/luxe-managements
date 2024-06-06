import WhoWeAre from "@/components/whoWeAre/whoWeAre";
import { Box } from "@chakra-ui/react";
import { fetchUsers } from "./lib/data";
const Home = () => {
  return (
    <>
      <Box px={["2", "2", "5", "5", "5"]} pl={["2", "2", "5", "12", "12"]}>
     <WhoWeAre />
     {fetchUsers}
      </Box>
    </>
  );
};

export default Home;
