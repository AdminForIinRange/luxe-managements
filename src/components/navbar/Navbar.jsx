import { Box, HStack, Text } from "@chakra-ui/react";

import React from "react";

const Navbar = () => {
  return (
    <>
      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={"20px"}
      >
        <HStack justify={"center"} align={"center"} w={"95%"} h={"100%"}>
          <Box w={"100%"} h={"100px"} bg={"gray"} borderRadius={"25px"}>
            <HStack
              justify={"space-between"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              px={"100px"}
            >
              <Text>
               Lux
              </Text>
            </HStack>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
