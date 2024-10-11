import { AbsoluteCenter, Box, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <VStack
      justify={"center"}
      align={"center"}
      w={"100vw"}
      h={"100vh"} // Full height of the viewport
      position={"absolute"} // Absolute positioning
      top={"0"} // Top of the viewport
      left={"0"} // Left of the viewport
    >
      <HStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
        <div className="loader" style={{ transform: "scale(3)" }}></div>
      </HStack>
    </VStack>
  );
};

export default Loading;
