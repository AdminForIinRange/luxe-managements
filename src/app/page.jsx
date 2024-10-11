"use client";

import { HStack, Box, useMediaQuery, Text, Center } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "./loading";

const Home = () => {
  const router = useRouter();
  router.push("/airbnb");

  return (
    <>
      <Center mt={["50px", "50px", "50px", "50px", "50px", "50px"]}>
        {" "}
        <Text
          mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
          w={["80%", "80%", "80%", "80%", "80%", "80%"]}
          fontSize={["42px", "42px", "42px", "42px", "42px", "42px"]}
          fontWeight={300}
          textAlign={"center"}
          fontFamily={"Poppins"}
          bgClip="text" // Clip the background to the text
          color={"black"} // Adding white outline effect
          bgGradient="linear(to-r, green, red)"
        >
          🛠️ Under Development 🛠️ , 🪲 Currently Fixing Bugs 🪲 , ⚙️ Adding
          Functions ⚙️ , 🚅 Improving Performance 🚅
        </Text>
        <Loading />
      </Center>
    </>
  );
};

export default Home;
