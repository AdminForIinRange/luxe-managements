"use client";
import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Select,
  useMediaQuery,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { FaSearch, FaFilter } from "react-icons/fa";
import skyRise2 from "../../../assets/img/skyRise2.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import AboutPage from "../aboutPage/aboutPage";
import QuickNavBox from "../quickNavBox/quickNavBox";

const HomePage = () => {
  const [isTablet] = useMediaQuery("(max-width: 1024px)");
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isPhone] = useMediaQuery("(max-width: 480px)");
  const [isVerySmall] = useMediaQuery("(max-width: 360px)");

  const [fliter, setFliter] = useState(true);

  useEffect(() => {
    isMobile ? setFliter(false) : setFliter(true);
  }, [isMobile]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
    }); // Initialize AOS with desired options
  }, []);

  const frontFliter = [
    {
      title: "Property Type",
      value: "House",
    },
    {
      title: "  Post Code",
      value: "5000",
    },
    {
      title: "Service",
      value: " Linen/Amenity",
    },
    {
      title: "  Currently listed",
      value: "      Not Listed",
    },
  ];

  return (
    // add some functional content at the end of the banner
    <>
      <HStack
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        fontFamily={"Poppins"}
      >
        <HStack
          w={"100%"}
          h={"100%"}
          justify={"center"}
          align={"center"}
          pl={"5px"}
          pr={"5px"}
        >
          <Box
            className="animate__animated animate__fadeIn"
            rounded={"10px"}
            borderBottomRadius={"100px"}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            h={["375px", "410px", "450px", "525px", "600px", "600px"]}
            bgPos={"center 60%"}
            bgSize={"cover"}
            style={{ backgroundImage: `url(${skyRise2.src})` }}
            loading="lazy"
          >
            <VStack
              w={"100%"}
              h={"100%"}
              align={"center"}
              justify={"top"}
              mt={["100px", "100px", "100px", "120px", "120px", "120px"]}
            >
              <Text
                w={["90%", "95%", "100%", "100%", "100%", "100%"]}
                fontSize={["42px", "60px", "65px", "75px", "85px", "85px"]}
                fontWeight={500}
                textAlign={"center"}
                fontFamily={"Poppins"}
                bgClip="text" // Clip the background to the text
                className="animate__animated animate__fadeInDown"
                color={"white"} // Adding white outline effect
                bgGradient="linear(to-r, green, red)"
                textShadow={"0px 0px 5px gray"}
              >
                Under Development{" "}
              </Text>
              <Text
                fontSize={["20px", "24px", "28px", "35px", "35px", "35px"]}
                textAlign={"center"}
                fontFamily={"Poppins"}
                color={"white"}
                fontWeight={300}
                mt={["0px", "0px", "15px", "15px", "15px", "15px"]}
                w={["80%", "80%", "50%", "50%", "50%", "30%"]}
                h={"20%"}
                className="animate__animated animate__fadeInDown"
                textShadow={"0px 0px 5px gray"}
              >
                Under Development Under Development
              </Text>
            </VStack>
          </Box>
        </HStack>
      </HStack>

      <VStack
        gap={"0px"}
        fontFamily={"Poppins"}
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        mt={["-105px", "-105px", "-105px", "-100px", "-100px", "-100px"]}
      >
        <HStack
          display={["none", "none", "flex", "flex", "flex", "flex"]}
          h={"100%"}
          zIndex={2}
          mt={"-100px"}
          w={"100%"}
          justify={"center"}
          align={"end"}
        >
          <Box
          
            borderBottomRadius={"0px"}
            transition={"all 0.3s ease"}
            cursor={"pointer"}
            onClick={() => setFliter(false)}
            _hover={{ height: "40px" }}
            h={!fliter ? "40px" : "30px"}
            p={!fliter ? "5px" : "2.5px"}
            bgColor={"white"}
            borderTopRadius={"10px"}
            w={["125px", "125px", "125px", "125px", "125px", "125px"]}
            mt={"100px"}
            fontSize={["14px", "16px", "16px", "18px", "18px", "18px"]}
            bg={!fliter ? "white" : "gray.200"}
          >
            {" "}
            <Text textAlign={"center"}>Search</Text>
          </Box>
          <Box 
          
            cursor={"pointer"}
            onClick={() => setFliter(true)}
            transition={"all 0.3s ease"}
            p={fliter ? "5px" : "2.5px"}
            bgColor={"white"}
            borderBottomRadius={"0px"}
            borderTopRadius={"10px"}
            w={"125px"}
            _hover={{ height: "40px" }}
            h={fliter ? "40px" : "30px"}
            mt={"100px"}
            bg={fliter ? "white" : "gray.200"}
            fontSize={["14px", "16px", "16px", "18px", "18px", "18px"]}
          >
            {" "}
            <Text textAlign={"center"}>fliter</Text>
          </Box>
        </HStack>{" "}
        <Box
          w={["92%", "92%", "94%", "85%", "85%", "85%"]}
          h={["85px", "95px", "110px", "125px", "125px", "125px"]}
          bgColor={"white"}
          boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
          
       border={"1px solid rgb(0, 0,0,0.25)"}
          rounded={["10px", "20px", "20px", "10px", "10px", "10px"]}
          zIndex={"1"}
        >
          {fliter ? (
            <HStack 
              w={"100%"}
              h={"100%"}
              justify={"space-between"}
              align={"center"}
              gap={"10px"}
              p={"10px"}
            >
              {frontFliter.map(({ title, value }, index) => (
                <>
                  <VStack
                    key={index}
                    transition={"all 0.3s ease"}
                    w={"100%"}
                    h={"100%"}
                    _hover={{ bg: "gray.100" }}
                    align={"center"}
                    justify={"center"}
                    cursor={"pointer"}
                    rounded={"18px"}
                    gap={"0px"}
                    px={["6px", "6px", "6px", "10px", "10px", "20px"]}
                  >
                    <HStack>
                      <Text
                        fontSize={[
                          "10px",
                          "10px",
                          "12px",
                          "14px",
                          "14px",
                          "14px",
                        ]}
                        textAlign={"center"}
                        fontWeight={400}
                        color={"gray.700"}
                      >
                        {title}
                      </Text>
                      <Text
                        fontSize={[
                          "20px",
                          "20px",
                          "20px",
                          "25px",
                          "25px",
                          "25px",
                        ]}
                      >
                        <RiArrowDropDownLine />
                      </Text>
                    </HStack>

                    <Box>
                      <Text
                        fontWeight={700}
                        fontSize={[
                          "18px",
                          "18px",
                          "20px",
                          "24px",
                          "28px",
                          "28px",
                        ]}
                        color={"gray.600"}
                      >
                        {value}
                      </Text>
                    </Box>
                  </VStack>

                  <Divider
                    orientation="vertical"
                    borderColor="gray.400"
                    h="100%"
                  />
                </>
              ))}

              <VStack
                transition={"all 0.3s ease"}
                w={["30%", "30%", "30%", "30%", "30%", "30%"]}
                h={"100%"}
                _hover={{ bg: "teal.300", color: "white" }}
                color={"teal.300"}
                bg={"white"}
                align={"center"}
                justify={"center"}
                cursor={"pointer"}
                rounded={"18px"}
                px={["5px", "5px", "5px", "10px", "10px", "10px"]}
              >
                <Box>
                  <Text
                    fontSize={["20px", "24px", "24px", "32px", "32px", "32px"]}
                    cursor={"pointer"}
                  >
                    <FaSearch />
                  </Text>
                </Box>
              </VStack>
            </HStack>
          ) : (
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"end"}
              align={"center"}
              p={"10px"}
              px={"10px"}
            >
              <Input
                pl={"20px"}
                w={"100%"}
                border={"none"}
                variant="unstyled"
                fontSize={["16px", "20px", "24px", "28px", "28px", "28px"]}
                placeholder="Search a service you need..."
              />

              <HStack
                transition={"all 0.3s ease"}
                w={["15%", "15%", "15%", "10%", "8%", "8%"]}
                h={"100%"}
                _hover={{ bg: "teal.300", color: "white" }}
                color={"teal.300"}
                bg={"white"}
                align={"center"}
                justify={"center"}
                cursor={"pointer"}
                rounded={"18px"}
              >
                <Box>
                  <Text
                    fontSize={["16px", "24px", "24px", "32px", "32px", "32px"]}
                    cursor={"pointer"}
                  >
                    <FaSearch />
                  </Text>
                </Box>
              </HStack>

              <HStack
                transition={"all 0.3s ease"}
                w={["15%", "15%", "15%", "10%", "8%", "8%"]}
                h={"100%"}
                _hover={{ bg: "gray.300", color: "white" }}
                color={"gray.300"}
                bg={"white"}
                align={"center"}
                justify={"center"}
                cursor={"pointer"}
                rounded={"18px"}
              >
                <Box>
                  <Text
                    fontSize={["16px", "24px", "24px", "32px", "32px", "32px"]}
                    cursor={"pointer"}
                  >
                    <FaFilter />
                  </Text>
                </Box>
              </HStack>
            </HStack>
          )}
        </Box>
      </VStack>

      <QuickNavBox />
    </>
  );
};

export default HomePage;
