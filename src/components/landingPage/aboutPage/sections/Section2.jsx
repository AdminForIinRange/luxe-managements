"use client";

import React, { useEffect } from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import interior from "../../../../assets/img/interior.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { GoTriangleRight } from "react-icons/go";
import Image from "next/image";
import collage from "../../../../assets/img/collage.png";
import skyRise3 from "../../../../assets/img/skyRise3.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const Section2 = ({ top2BoxIcons, bottom2BoxIcons }) => {
  const [fliter, setFliter] = React.useState(true);
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
      mirror: true,
    }); // Initialize AOS with desired options
  }, []);

  return (
    <>
      <HStack
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
      >
        <Box
          display={["block", "block", "block", "none", "none", "none"]}
          // data-aos="fade-right" // chnage dir
          border={"5px solid rgb(255, 255, 255,0.25)"}
          h={["350px", "350px", "350px", "400px", "400px", "600px"]}
          w={["100%", "100%", "100%", "450px", "550px", "550px"]}
          bg={"rgb(0,0,0,0.05)"}
          backdropFilter="blur(1.5px)"
          borderRadius={"30px"}
          bgPos={"center"}
          bgSize={"cover"}
          p={"10px"}
        >
          <Box
            style={{ backgroundImage: `url(${interior.src})` }}
            // data-aos="fade-right"
            bgPos={"center"}
            bgSize={"cover"}
            w={"100%"}
            h={"100%"}
            p={"10px"}
            borderRadius={"30px"}
          >
            <HStack
              p={"5px"}
              justify={"start"}
              align={"start"}
              w={"100%"}
            ></HStack>
          </Box>
        </Box>
      </HStack>

      <HStack
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["155px", "155px", "155px", "155px", "155px", "155px"]}
      >
        <HStack
          justify={["center", "center", "center", "center", "center", "center"]}
          align={"start"}
          w={"100%"}
          h={"100%"}
          gap={["45px", "45px", "45px", "45px", "45px", "45px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["100%", "100%", "100%", "80%", "70%", "60%"]}>
          <HStack
              //   data-aos="fade-up"
              w={"100%"}
              justify={["center", "center", "center", "start", "start", "start"]}
              align={"center"}
              h={"100%"}
            >
              {" "}
              <HStack
                data-aos="fade-up"
                rounded={"100px"}
                justify={"start"}
                align={"center"}
                h={"100%"}
                bg={"white"}
                border={"1px solid rgb(0, 0, 0,0.25)"}
                boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
                px={[5, 5, 5, 5, 5, 5]}
                py={[1, 1, 2, 2, 2, 2]}
              >
                <Box>
                  <GoTriangleRight color="black" fontSize={"20px"} />
                </Box>
                <Box>
                  <Text
                    textShadow={"0px 0px 100px black"}
                    w={"100%"}
                    h={"100%"}
                    textAlign={"center"}
                    color={"black"}
                    fontSize={["12px", "12px", "12px", "14px", "14px", "14px"]}
                    fontWeight={500}
                  >
                 Professional Management
                  </Text>
                </Box>
              </HStack>
            </HStack>

            <Text
              // data-aos="fade-in"
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
              fontWeight={300}
              fontFamily={"Poppins"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, green, red)"
            >
              Manage your rentals with Professionals
            </Text>

            <HStack
              h={"100%"}
              w={"100%"}
              mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
              justify={"center"}
              align={"start"}
              gap={"50px"}
              flexWrap={[
                "wrap",
                "nowrap",
                "nowrap",
                "nowrap",
                "nowrap",
                "nowrap",
              ]}
            >
              {top2BoxIcons.map(({ title, icon, description }) => (
                <VStack
                  fontFamily={"Poppins"}
                  w={["90%", "90%", "100%", "100%", "100%", "100%"]}
                  h={"100%"}
                  justify={"start"}
                  align={"left"}
                  key={title}
                >
                  <Text
                    // data-aos="fade-up"
                    textAlign={"left"}
                    fontSize={["20px", "20px", "24px", "24px", "30px", "30px"]}
                  >
                    {icon}
                  </Text>

                  <Text
                    // data-aos="fade-up"
                    fontWeight={500}
                    mt={["10px", "10px", "10px", "10px", "10px", "10px"]}
                    fontSize={["14px", "14px", "18px", "18px", "20px", "20px"]}
                  >
                    {title}
                  </Text>
                  <Text
                    fontWeight={300}
                    // data-aos="fade-up"
                    fontSize={["12px", "12px", "12px", "12px", "14px", "15px"]}
                  >
                    {description}
                  </Text>
                </VStack>
              ))}
            </HStack>

            <HStack
              h={"100%"}
              w={"100%"}
              mt={["50px", "50px", "50px", "30px", "30px", "30px"]}
              justify={"center"}
              align={"start"}
              gap={["50px", "50px", "50px", "50px", "50px", "50px"]}
              flexWrap={[
                "wrap",
                "nowrap",
                "nowrap",
                "nowrap",
                "nowrap",
                "nowrap",
              ]}
            >
              {bottom2BoxIcons.map(({ title, icon, description }) => (
                <VStack
                
                  fontFamily={"Poppins"}
                  w={["90%", "90%", "100%", "100%", "100%", "100%"]}
                  h={"100%"}
                  justify={"start"}
                  align={"left"}
                  key={title}
                >
                  <Text
                    // data-aos="fade-up"
                    textAlign={"left"}
                    fontSize={["20px", "20px", "24px", "24px", "30px", "30px"]}
                  >
                    {icon}
                  </Text>

                  <Text
                    mt={["10px", "10px", "10px", "10px", "10px", "10px"]}
                    // data-aos="fade-up"
                    fontWeight={500}
                    fontSize={["14px", "14px", "18px", "18px", "20px", "20px"]}
                  >
                    {title}
                  </Text>
                  <Text
                    // data-aos="fade-up"
                    fontWeight={300}
                    fontSize={["12px", "12px", "12px", "12px", "14px", "15px"]}
                  >
                    {description}
                  </Text>
                </VStack>
              ))}
            </HStack>
          </Box>
          <Box
            display={["none", "none", "none", "block", "block", "block"]}
            // data-aos="fade-right" // chnage dir
            border={"5px solid rgb(255, 255, 255,0.25)"}
            h={["600px", "600px", "600px", "600px", "600px", "600px"]}
            w={["380px", "380px", "350px", "350px", "550px", "550px"]}
            bg={"rgb(0,0,0,0.05)"}
            backdropFilter="blur(1.5px)"
            p={"10px"}
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
          >
            <Box
              style={{ backgroundImage: `url(${interior.src})` }}
              // data-aos="fade-right"
              bgPos={"center"}
              bgSize={"cover"}
              w={"100%"}
              h={"100%"}
              p={"10px"}
              borderRadius={"30px"}
            ></Box>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Section2;
