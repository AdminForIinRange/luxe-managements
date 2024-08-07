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
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { FaSearch } from "react-icons/fa";
import skyRise2 from "../../../assets/img/skyRise2.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import AboutPage from "../aboutPage/aboutPage";
import QuickNavBox from "../quickNavBox/quickNavBox";

const HomePage = () => {
  const [fliter, setFliter] = React.useState(true);
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
            h={["525px", "525px", "525px", "525px", "600px", "600px"]}
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
              mt={"70px"}
            >
              <Text
                fontSize={["65px", "65px", "65px", "75px", "85px", "85px"]}
                fontWeight={500}
                textAlign={"center"}
                fontFamily={"Poppins"}
                bgClip="text" // Clip the background to the text
                className="animate__animated animate__fadeInDown"
                color={["red", "blue", "white", "green", "yellow", "white"]} // Adding white outline effect
                bgGradient="linear(to-r, green, red)"
                textShadow={"0px 0px 5px gray"}
              >
                Luxe Managements{" "}
              </Text>
              <Text
                fontSize={["24px", "28px", "28px", "35px", "35px", "35px"]}
                textAlign={"center"}
                fontFamily={"Poppins"}
                color={"white"}
                fontWeight={300}
                mt={["0px", "0px", "15px", "15px", "15px", "15px"]}
                w={["80%", "60%", "50%", "50%", "50%", "30%"]}
                h={"20%"}
                className="animate__animated animate__fadeInDown"
                textShadow={"0px 0px 5px gray"}
              >
                Top Airbnb Management Company in Adelaide.
              </Text>

              <HStack
                mt={[
                  "-200px",
                  "-200px",
                  "-200px",
                  "-200px",
                  "-100px",
                  "-100px",
                ]}
                w={"100%"}
                h={"100%"}
                justify={"center"}
                align={"center"}
              >
                <Box
                  transition={"all 0.3s ease"}
                  cursor={"pointer"}
                  onClick={() => setFliter(false)}
                  _hover={{ height: "70px" }}
                  h={!fliter ? "70px" : "50px"}
                  p={!fliter ? "5px" : "2.5px"}
                  bgColor={"white"}
                  rounded={"10px"}
                  shadow={"lg"}
                  w={["125px", "125px", "125px", "125px", "125px", "125px"]}
                  mt={"100px"}
                  fontSize={"18px"}
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
                  rounded={"10px"}
                  shadow={"lg"}
                  w={"125px"}
                  _hover={{ height: "70px" }}
                  h={fliter ? "70px" : "50px"}
                  mt={"100px"}
                  bg={fliter ? "white" : "gray.200"}
                  fontSize={"18px"}
                >
                  {" "}
                  <Text textAlign={"center"}>fliter</Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </HStack>

      <HStack
        fontFamily={"Poppins"}
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        mt={["-115px", "-115px", "-115px", "-100px", "-100px", "-100px"]}
      >
        {" "}
        <Box
          w={["90%", "90%", "90%", "85%", "80%", "80%"]}
          h={"125px"}
          bgColor={"white"}
          shadow={"lg"}
          rounded={"10px"}
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
                    px={"10px"}
                  >
                    <HStack>
                      <Text
                        fontSize={[
                          "10px",
                          "10px",
                          "14px",
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
                      <Text fontSize={"25px"}>
                        <RiArrowDropDownLine />
                      </Text>
                    </HStack>

                    <Box>
                      <Text
                        fontWeight={700}
                        fontSize={[
                          "20px",
                          "20px",
                          "24px",
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
                w={"30%"}
                h={"100%"}
                _hover={{ bg: "teal.300", color: "white" }}
                color={"teal.300"}
                bg={"white"}
                align={"center"}
                justify={"center"}
                cursor={"pointer"}
                rounded={"18px"}
                px={"10px"}
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
            <HStack w={"100%"} h={"100%"} justify={"end"} px={"36px"}>
              <Input
                w={"100%"}
                border={"none"}
                variant="unstyled"
                fontSize={["18px", "24px", "24px", "28px", "28px", "28px"]}
                placeholder="Search a service you need..."
              />

              <Text
                rounded={"15px"}
                transition={"all 0.3s ease"}
                p={"25px"}
                _hover={{ bg: "teal.300", color: "white" }}
                color={"teal.300"}
                bg={"white"}
                fontSize={["20px", "24px", "24px", "32px", "32px", "32px"]}
                cursor={"pointer"}
              >
                <FaSearch />
              </Text>
            </HStack>
          )}
        </Box>
      </HStack>

      <QuickNavBox />
      <AboutPage />
    </>
  );
};

export default HomePage;
