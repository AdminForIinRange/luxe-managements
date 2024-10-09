"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Select,
  Center,
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
import { GoTriangleRight } from "react-icons/go";
import Aos from "aos";
import "aos/dist/aos.css";
import lien from "../../../assets/img/Linen.jpg";
import lien2 from "../../../assets/img/Linen2.jpg";
import listing from "../../../assets/img/listing.jpg";
import clean from "../../../assets/img/clean.jpg";

import managment from "../../../assets/img/managment.jpg";

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
      img: lien,
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
      img: clean,
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
      img: listing,
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
      img: managment,
    },
  ];

  return (
    <>
      <Center my={["100px", "100px", "100px", "150px", "200px", "100px"]}>
        <Divider
          ml={["50px", "50px", "50px", "50px", "50px", "50px"]}
          color={"black"}
          bgColor={"black"}
        />

        <HStack
          //   data-aos="fade-up"

          justify={["center", "center", "center", "center", "center", "center"]}
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
            border={"1px solid rgb(0, 0,0,0.25)"}
            boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
            px={[5, 5, 5, 5, 5, 10]}
            py={[1, 1, 2, 2, 2, 2]}
          >
            <Box>
              <Text
                whiteSpace={"nowrap"}
                textShadow={"0px 0px 100px black"}
                w={"100%"}
                h={"100%"}
                textAlign={"center"}
                color={"black"}
                fontSize={["12px", "12px", "12px", "14px", "14px", "14px"]}
                fontWeight={500}
              >
                Services
              </Text>
            </Box>
          </HStack>
        </HStack>
        <Divider
          mr={["50px", "50px", "50px", "50px", "50px", "50px"]}
          color={"black"}
          bgColor={"black"}
        />
      </Center>

      <HStack
        justify={"center"}
        align={"start"}
        w={"100%"}
        h={"100%"}
        wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
      >
        <Text
          w={["95%", "95%", "95%", "70%", "90%", "100%"]}
          fontSize={["45px", "45px", "45px", "45px", "85px", "65px"]}
          fontWeight={300}
          fontFamily={"Poppins"}
          bgClip="text"
          textAlign={[
            "center",
            "center",
            "center",
            "center",
            "center",
            "center",
          ]}
          color={"black"}
          bgGradient="linear(to-r, magenta, pink)"
        >
          Services tailored to your needs
        </Text>
      </HStack>
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
              bgGradient="linear(to-r, purple, yellow)"
            >
              View our collective Packages
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
                mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
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
                      mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
                      w={"100%"}
                      transition={"all 0.3s ease"}
                      _hover={{
                        bgColor:"black",
                        textColor:"white",
                      }}
                      borderRadius={"10px"}
                      py={"5px"}
                      p={"10px"}
                      border={"1px solid rgb(0, 0,0,0.25)"}
                      boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
                      bgColor={"white"}
                    >
                      <Text
                        fontWeight={300}
                        textAlign={"center"}
                        fontSize={[
                          "14px",
                          "14px",
                          "18px",
                          "18px",
                          "20px",
                          "20px",
                        ]}
                       
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
                      transition={"all 0.3s ease"}
                      _hover={{
                        bgColor:"black",
                        textColor:"white",
                      }}
                      borderRadius={"10px"}
                      py={"5px"}
                      p={"10px"}
                      border={"1px solid rgb(0, 0,0,0.25)"}
                      boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
                      bgColor={"white"}
                    >
                      <Text
                        fontWeight={300}
                        textAlign={"center"}
                        fontSize={[
                          "14px",
                          "14px",
                          "18px",
                          "18px",
                          "20px",
                          "20px",
                        ]}
                       
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
                  border={"1px solid rgb(0, 0,0,0.25)"}
                  borderRadius={"15px"}
                  w={"100%"}
                  h={["400px", "400px", "600px", "480px", "480px", "480px"]}
                  boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
                  p={"30px"}
                >
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"start"}
                    align={"start"}
                  >
                    <VStack
                      w={"100%"}
                      h={"100%"}
                      justify={"start"}
                      align={"start"}
                    >
                      <Text
                        fontSize={[
                          "24px",
                          "24px",
                          "28px",
                          "28px",
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
                          "18px",
                          "18px",
                          "19px",
                          "19px",
                          "20px",
                          "20px",
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

                      <Divider mt={"15px"} w={"100%"} h={"2px"} />
                      <Box
                        lineHeight={"25px"}
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

                      <HStack
                        mt={"25px"}
                        w={["100%", "100%", "60%", "50%", "40%", "30%"]}
                        h={"100%"}
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
                          border={"1px solid rgb(0, 0,0,0.25)"}
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

                    <Divider
                      display={[
                        "none",
                        "none",
                        "block",
                        "block",
                        "block",
                        "block",
                      ]}
                      mx={"15px"}
                      mt={"15px"}
                      w={"2px"}
                      h={"100%"}
                      orientation="vertical"
                    />

                    <Box
                      display={[
                        "none",
                        "none",
                        "block",
                        "block",
                        "block",
                        "block",
                      ]}
                      w={"100%"}
                      h={"100%"}
                      borderRadius={"15px"}
                      bgImage={
                        currentTab === "Linen/Amenity"
                          ? tabs[0].img.src
                          : currentTab === "Cleaning"
                            ? tabs[1].img.src
                            : currentTab === "Listing"
                              ? tabsTwo[0].img.src
                              : currentTab === "Management"
                                ? tabsTwo[1].img.src
                                : null
                      }
                      bgSize={"cover"}
                      bgPosition={"center"}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </HStack>

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
