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
  Icon,
  Stack,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
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
      desc: "We provide premium linen and amenity services tailored to your property's needs.",
      html: (
        <>
          <UnorderedList>
            <ListItem>High-quality bed linen for a comfortable stay</ListItem>
            <ListItem>Bathroom service available per booking</ListItem>
            <ListItem>
              Additional amenities can be arranged, including:
              <UnorderedList>
                <ListItem>Luxury toiletries for an extra touch</ListItem>
                <ListItem>Extra towels and linens for added comfort</ListItem>
                <ListItem>Comprehensive kitchen cleaning services</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </>
      ),
    },
    {
      title: "Cleaning",
      desc: "Keep your property spotless with our flexible cleaning options, ensuring a welcoming environment for every guest.",
      html: (
        <>
          <UnorderedList>
            <ListItem>
              Standard cleaning to maintain a clean and inviting space
            </ListItem>
            <ListItem>Deep cleaning for a more thorough service</ListItem>
            <ListItem>Post-stay inspection and final cleaning</ListItem>
            <ListItem>
              Additional services available upon request:
              <UnorderedList>
                <ListItem>Carpet cleaning to refresh every room</ListItem>
                <ListItem>Window cleaning for spotless views</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </>
      ),
    },
  ];

  const tabsTwo = [
    {
      title: "Listing",
      desc: "Boost your property’s visibility with our expert AirBnB listing services.",
      html: (
        <>
          <UnorderedList>
            <ListItem>Professional listing creation and optimization</ListItem>
            <ListItem>High-quality photography for your property</ListItem>
            <ListItem>Ongoing listing management to enhance bookings</ListItem>
            <ListItem>Dynamic pricing setup to maximize revenue</ListItem>
          </UnorderedList>
        </>
      ),
    },
    {
      title: "Management",
      desc: "Enjoy hassle-free property management with our all-inclusive services.",
      html: (
        <>
          <UnorderedList>
            <ListItem>
              Complete property management to handle all aspects
            </ListItem>
            <ListItem>
              Guest communication and support throughout the stay
            </ListItem>
            <ListItem>Maintenance coordination for any issues</ListItem>
            <ListItem>Monthly performance reporting to track success</ListItem>
            <ListItem>
              Optional services include:
              <UnorderedList>
                <ListItem>
                  Interior design consultation for a fresh look
                </ListItem>
                <ListItem>24/7 emergency support for urgent needs</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
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
        mt={["155px", "155px", "155px", "155px", "155px", "155px"]}
      >
        <HStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "95%", "95%", "95%", "95%"]}>
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
                    Our Specialities
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
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={"center"}
              fontFamily={"Poppins"}
              color={"black"}
              w={"100%"}
              fontWeight={300}
            >
              We offer a range of curated services designed to enhance and
              maximize the potential of your rental property,
            </Text>
            <VStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
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
                      onClick={() => setCurrentTab(title)}
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
                      p={"10px"}
                      boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 5px"}
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
                w={"100%"}
                justify={"center"}
                align={"center"}
                gap={"25px"}
              >
                {tabsTwo.map(({ title, desc, html }, index) => (
                  <>
                    <Box
                      onClick={() => setCurrentTab(title)}
                      key={index}
                      cursor={"pointer"}
                      mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
                      w={"100%"}
                      transition={"transform 0.3s ease"}
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                      borderRadius={"10px"}
                      py={"5px"}
                      p={"10px"}
                      boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 5px"}
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
                wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                gap={["20px", "20px", "15px", "15px", "15px", "15px"]}
                mt={"25px"}
                w={"100%"}
                h={"100%"}
                justify={"center"}
                align={"start"}
              >
                <Box
                  borderRadius={"15px"}
                  w={"100%"}
                  h={["400px", "400px", "480px", "480px", "480px", "480px"]}
                  boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 5px"}
                  p={"30px"}
                >
                  <VStack
                    w={"100%"}
                    h={"100%"}
                    justify={"start"}
                    align={"start"}
                  >
                    <Text
                      fontSize={[
                        "20px",
                        "20px",
                        "24px",
                        "24px",
                        "28px",
                        "28px",
                      ]}
                      fontWeight={"500"}
                    >
                      {currentTab === "Linen/Amenity"
                        ? tabs[0].title
                        : currentTab === "Cleaning"
                          ? tabs[1].title
                          : currentTab === "Listing"
                            ? tabsTwo[0].title
                            : currentTab === "Management"
                              ? tabsTwo[1].title
                              : null}
                    </Text>

                    <Text
                      fontSize={[
                        "14px",
                        "14px",
                        "16px",
                        "16px",
                        "18px",
                        "18px",
                      ]}
                      fontWeight={"400"}
                      color={"gray"}
                    >
                      {currentTab === "Linen/Amenity"
                        ? tabs[0].desc
                        : currentTab === "Cleaning"
                          ? tabs[1].desc
                          : currentTab === "Listing"
                            ? tabsTwo[0].desc
                            : currentTab === "Management"
                              ? tabsTwo[1].desc
                              : null}
                    </Text>

                    <Box
                      mt={"15px"}
                      fontSize={[
                        "14px",
                        "14px",
                        "16px",
                        "16px",
                        "18px",
                        "18px",
                      ]}
                    >
                      {currentTab === "Linen/Amenity"
                        ? tabs[0].html
                        : currentTab === "Cleaning"
                          ? tabs[1].html
                          : currentTab === "Listing"
                            ? tabsTwo[0].html
                            : currentTab === "Management"
                              ? tabsTwo[1].html
                              : null}
                    </Box>

                    {/* <HStack
                      mt={"25px"}
                      w={["100%", "100%", "60%", "50%", "40%", "30%"]}
                      h={"100%"}
                      justify={"end"}
                      align={"end"}
                      gap={"15px"}
                    >
                      <Box
                        borderRadius={"15px"}
                        //   boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
                        w={"100%"}
                        h={"50px"}
                        bg={"white"}
                        border={"1.5px solid rgb(0, 0, 0,0.25)"}
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

                      <Box
                        borderRadius={"15px"}
                        w={"100%"}
                        h={"50px"}
                        bg={"white"}
                        // _hover={}
                        border={"1.5px solid rgb(0, 0, 0,0.25)"}
                      >
                        <HStack
                          justify={"center"}
                          align={"center"}
                          w={"100%"}
                          h={"100%"}
                        >
                          <Text textAlign={"center"}>View More</Text>
                        </HStack>
                      </Box>
                    </HStack> */}
                  </VStack>
                </Box>
                {/* <Box
                  h={["100%", "100%", "100%", "400px", "400px", "400px"]}
                  p={"30px"}
                  borderRadius={"15px"}
                  w={["100%", "100%", "100%", "50%", "40%", "40%"]}
                  boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
                  fontSize={["14px", "14px", "16px", "16px", "18px", "18px"]}
                >
                  <Stack
                    flexDir={[
                      "row",
                      "row",
                      "row",
                      "column",
                      "column",
                      "column",
                    ]}
                    flexWrap={"wrap"}
                    gap={"15px"}
                    justify={"start"}
                    align={"start"}
                  >
                    <Text fontWeight={"500"}>
                      <Icon as={TiTick} /> High-quality bed linen
                    </Text>
                    <Text fontWeight={"500"}>
                      <Icon as={TiTick} /> General bedding
                    </Text>
                    <Text fontWeight={"500"}>
                      <Icon as={TiTick} /> Towels and hand towels
                    </Text>
                    <Text fontWeight={"500"}>
                      <Icon as={TiTick} /> One-time use toiletries
                    </Text>
                    <Text fontWeight={"500"}>
                      <Icon as={TiTick} /> Seasonal linen rotation
                    </Text>
                    <Text fontWeight={"500"}>
                      <Icon as={TiTick} /> Eco-friendly options
                    </Text>
                    <Text fontWeight={"500"}>
                      <Icon as={TiTick} /> Linen inventory management
                    </Text>
                  </Stack>
                </Box> */}
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
