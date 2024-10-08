"use client";

import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Select,
  Input,
} from "@chakra-ui/react";

import React from "react";
import womenCalling from "../../../assets/img/womenCalling.jpg";
import interior3 from "../../../assets/img/interior3.jpg";
import interior5 from "../../../assets/img/interior5.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const QuickNavBox = () => {
  const box = [
    {
      name: "Contact Us",
      desc: "Have questions? Reach out to us for all your Airbnb management needs.",

      link: "#",

      speicals: "",
      img: womenCalling.src,
    },
    {
      name: "View our Services",
      desc: "Maximize your rental income with our expert Airbnb management in Adelaide.",

      link: "#",

      speicals: "",
      img: interior5.src,
    },
    {
      name: "View our Portfolio",
      desc: "See how we manage properties in Adelaide for hassle-free short-term rentals.",
      link: "#",
      speicals: "",
      img: interior3.src,
    },
  ];
  return (
    <>
      <HStack
        fontFamily={"poppins"}
        bg={"white"}
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
      >
        <HStack
          flexWrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
          w={["98%", "90%", "95%", "88%", "80%", "80%"]}
          h={"100%"}
          justify={"center"}
          align={"start"}
          gap={["5px", "0px", "15px", "25px", "50px", "50px"]}
        >
          {box.map(({ name, desc, img }, index) => (
            <VStack
       
                      border={"1px solid rgb(0, 0,0,0.05)"}
                boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
              textAlign={"left"}
              p={["2", "2", "5", "5", "5", "5"]}
              rounded={"18px"}
              bg={"white"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              h={"100%"}
              key={index}
              color={"black"} // white
            >
              <Text
                zIndex={3}
                w={"100%"}
                fontSize={["20px", "22px", "22px", "22px", "28px", "28px"]}
                fontWeight={"700"}
                textAlign={"left"}
              >
                {name}
              </Text>
              <Text
                fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                fontWeight={"400"}
                textAlign={"left"}
                h={"60px"}
              >
                {desc}
              </Text>

              <Box
                backgroundImage={`url(${img})`}
                bgPos={"center"}
                bgSize={"cover"}
                align={"left"}
                w={"100%"}
                h={"250px"}
                color={"white"} // white
                rounded={"18px"}
                zIndex={3}
              ></Box>
              <HStack
                mt={"5px"}
                w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                justify={"end"}
                align={"end"}
                gap={"15px"}
              >
                <Box
                  transition={"all 0.3s ease"}
                  _hover={{
                    bg: "black",
                    color: "white",
                  }}
                  cursor={"pointer"}
                  borderRadius={"15px"}
                  //   boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
                  w={"100%"}
                  h={"50px"}
                  bg={"white"}
                        border={"1px solid rgb(0, 0,0,0.05)"}
                >
                  {" "}
                  <HStack
                    justify={"center"}
                    align={"center"}
                    w={"100%"}
                    h={"100%"}
                  >
                    <Text textAlign={"center"}>View More</Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>
          ))}
        </HStack>
      </HStack>
    </>
  );
};

export default QuickNavBox;

{
  /* <>
<HStack
  fontFamily={"poppins"}
  bg={"white"}
  w={"100%"}
  h={"100%"}
  justify={"center"}
  align={"center"}
  mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
>
  <HStack
    w={["90%", "90%", "90%", "85%", "80%", "80%"]}
    h={"100%"}
    justify={"center"}
    align={"start"}
    gap={["25px", "25px", "25px", "25px", "80px", "80px"]}
  >
    {box.map(({ name, desc, img }, index) => (
      <Box
        key={index}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        h={["200px", "200px", "250px", "250px", "300px", "250px"]}
        borderLeft={"1px solid #A0AEC0"}
        borderRight={"1px solid #A0AEC0"}
        p={["2", "2", "2", "3", "4"]}
        // textShadow={"0px 0px 50px black"}
      >
        <VStack
          p={["2", "2", "2", "3", "4"]}
          // backgroundImage={`url(${img})`}
          bgPos={"center"}
          bgSize={"cover"}
          align={"left"}
          w={"100%"}
          h={"100%"}
          color={"gray.700"} // white
          rounded={"18px"}
          zIndex={3}
        >
          <HStack zIndex={3}>
            <Text
              zIndex={3}
              w={"70%"}
              fontSize={["22px", "22px", "22px", "22px", "28px", "28px"]}
              fontWeight={"700"}
              textAlign={"left"}
            >
              {name}
            </Text>
          </HStack>

          <HStack>
            <Text
              fontSize={["12px", "12px", "14px", "14px", "16px", "16px"]}
              fontWeight={"400"}
              textAlign={"left"}
            >
              {desc}
            </Text>
          </HStack>
          <HStack
            transition={"transform 0.3s ease"}
            _hover={{
              transform: "translateX(10px)",
            }}
            cursor={"pointer"}
            h={"100%"}
            justify={"left"}
            align={"end"}
            fontWeight={"500"}
          >
            <HStack
              align={"center"}
              borderRadius={"10px"}
              px={"8px"}
              mr={"5px"}
              bg={"white"}
              color={"black"}
            >
              <Text fontSize={"12px"} color={"black"}>
                Learn more
              </Text>{" "}
              <Text fontSize={"30px"}>
                <HiArrowLongRight color="black" />
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    ))}
  </HStack>
</HStack>
</> */
}
