import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
        <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
          <Box
            rounded={"10px"}
            mt={"90px"}
            w={["90%", "90%", "90%", "90%", "90%", "90%"]}
            h={"500px"}
            bg={"gray"}
          >
            <VStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
              <Text
                fontSize={["30px", "30px", "35px", "45px", "85px", "85px"]}
                fontWeight={500}
                textAlign={"center"}
                fontFamily={"Poppins"}
                bgClip="text" // Clip the background to the text
                className="animate__animated animate__fadeInDown"
                color={"white"} // Adding white outline effect
                bgGradient="linear(to-r, green, red)"
                // textShadow={"0px 0px 5px white"}
              >
                Luxe Managements{" "}
              </Text>
              <Text
                fontSize={["12px", "12px", "16px", "16px", "18px", "35px"]}
                textAlign={"center"}
                fontFamily={"Poppins"}
                color={"white"}
                fontWeight={300}
                mt={["0px", "0px", "15px", "15px", "15px", "15px"]}
                w={["80%", "60%", "50%", "50%", "50%", "30%"]}
                className="animate__animated animate__fadeInDown"
              >
                Top Airbnb Management Company in Adelaide.
              </Text>
            </VStack>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default HomePage;
