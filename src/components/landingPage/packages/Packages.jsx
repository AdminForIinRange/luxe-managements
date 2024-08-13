"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Select,
  Input,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";

import Aos from "aos";
import "aos/dist/aos.css";

const Packages = () => {
  const [currentTab, setCurrentTab] = useState("Linen/Amenity");

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
      mirror: true,
    }); // Initialize AOS with desired options
  }, []);

  const tabs = [
    {
      title: "Linen/Amenity",
      desc: "For non-management clients, we offer cleaning services priced based on the number of rooms",
      html: (
        <>
          <Text>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Text>
        </>
      ),
    },
    {
      title: "Cleaning",
      desc: "Teest Cleaning",
      html: (
        <>
          <Text>Test</Text>
        </>
      ),
    },
    {
      title: "Listing",
      desc: "Teest AirBnB Listing",
      html: (
        <>
          <Text>Test</Text>
        </>
      ),
    },
    {
      title: "Management",
      desc: "Teest AirBnB Management",
      html: (
        <>
          <Text>Test</Text>
        </>
      ),
    },
  ];

  return (
    <>
      <HStack
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["105px", "105px", "105px", "105px", "155px", "155px"]}
      >
        <HStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "70%", "60%", "50%", "50%"]}>
            <HStack w={"100%"} justify={"center"} align={"center"} h={"100%"}>
              <HStack
                // data-aos="fade-in"
                rounded={"100px"}
                justify={"center"}
                align={"center"}
                h={"100%"}
                border={"1px solid rgb(255, 255, 255,0.25)"}
                py={[1, 1, 2, 2, 2, 2]}
              >
                <Box>
                  <GoDotFill color="black" fontSize={"20px"} />
                </Box>
                <Box>
                  <Text
                    w={"100%"}
                    h={"100%"}
                    textAlign={"center"}
                    color={"black"}
                    fontSize={["14px", "14px", "18px", "18px", "20px", "20px"]}
                    fontWeight={500}
                  >
                    Maximize Earnings
                  </Text>
                </Box>
              </HStack>
            </HStack>
            <Text
              w={"100%"}
              // data-aos="fade-in"
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
              fontWeight={300}
              fontFamily={"Poppins"}
              bgClip="text"
              textAlign={"center"}
              color={"black"}
              bgGradient="linear(to-r, green, red)"
            >
              View our collective Packagess
            </Text>
            <Text
              // data-aos="fade-in"

              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              mt={["40px", "40px", "40px", "60px", "60px", "60px"]}
              textAlign={"center"}
              fontFamily={"Poppins"}
              color={"black"}
              w={"100%"}
              fontWeight={300}
            >
              We offer a range of curated services designed to enhance and
              maximize the potential of your rental property,
            </Text>
            <VStack w={"100%"} justify={"center"} align={"center"}>
              <HStack
                mt={["25px", "25px", "25px", "25px", "25px", "25px"]}
                w={"100%"}
                justify={"center"}
                align={"center"}
                gap={"25px"}
              >
                {tabs.map(({ title, desc, html }, index) => (
                  <>
                    <Box
                      key={index}
                      cursor={"pointer"}
                      mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                      w={"100%"}
                      transition={"transform 0.3s ease"}
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                      borderRadius={"10px"}
                      py={"5px"}
                      boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
                      bgColor={"white"}
                    >
                      <Text
                        textAlign={"center"}
                        fontSize={[
                          "14px",
                          "14px",
                          "18px",
                          "18px",
                          "20px",
                          "20px",
                        ]}
                        color={"black"}
                      >
                        {title}
                      </Text>{" "}
                    </Box>
                  </>
                ))}
              </HStack>

              <HStack
                gap={"15px"}
                mt={"25px"}
                w={"100%"}
                h={"100%"}
                justify={"center"}
                align={"start"}
              >
                <Box
                  borderRadius={"15px"}
                  w={"100%"}
                  h={"400px"}
                  boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
                  p={"15px"}
                >
                  <Text fontSize={"24px"} fontWeight={"500"}>
                    {currentTab === "Linen/Amenity" ? tabs[0].title : null}
                    {currentTab === "Cleaning" ? tabs[1].title : null}
                    {currentTab === "Listing" ? tabs[2].title : null}
                    {currentTab === "Management" ? tabs[3].title : null}
                  </Text>

                  <Text fontSize={"18px"} fontWeight={"400"} mt={"15px"}>
                    {currentTab === "Linen/Amenity" ? tabs[0].desc : null}
                    {currentTab === "Cleaning" ? tabs[1].desc : null}
                    {currentTab === "Listing" ? tabs[2].desc : null}
                    {currentTab === "Management" ? tabs[3].desc : null}
                  </Text>

                  <Box mt={"15px"}>
                    {currentTab === "Linen/Amenity" ? tabs[0].html : null}
                    {currentTab === "Cleaning" ? tabs[1].html : null}
                    {currentTab === "Listing" ? tabs[2].html : null}
                    {currentTab === "Management" ? tabs[3].html : null}
                  </Box>
                </Box>
                <Box
                  p={"15px"}
                  borderRadius={"15px"}
                  w={"50%"}
                  h={"400px"}
                  boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
                >
                  <Text fontSize={"24px"} fontWeight={"500"}>
                    Test
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
          {/* <Image src={collage} width={500} /> */}
        </HStack>
      </HStack>
    </>
  );
};

export default Packages;
