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
      desc: "For non-management clients, we offer cleaning services priced based on the number of rooms and amenities required.",
      html: (
        <>
          <UnorderedList>
            <ListItem>$15 per bedroom per booking</ListItem>
            <ListItem>$5 per bathroom per booking</ListItem>
            <ListItem>
              Additional charges may apply for extra amenities or services, such
              as:
              <UnorderedList>
                <ListItem>Premium toiletries: $10 per booking</ListItem>
                <ListItem>Extra towels and linens: $7 per booking</ListItem>
                <ListItem>Kitchen cleaning: $20 per booking</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </>
      ),
    },
    {
      title: "Cleaning",
      desc: "Our cleaning services ensure your property is spotless and welcoming for every guest.",
      html: (
        <>
          <UnorderedList>
            <ListItem>Standard cleaning: $50 per booking</ListItem>
            <ListItem>Deep cleaning: $100 per booking</ListItem>
            <ListItem>
              Post-stay inspection and cleaning: $75 per booking
            </ListItem>
            <ListItem>
              Additional services:
              <UnorderedList>
                <ListItem>Carpet cleaning: $25 per room</ListItem>
                <ListItem>Window cleaning: $15 per window</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </>
      ),
    },
    {
      title: "Listing",
      desc: "We help create and manage your AirBnB listings to attract more guests and optimize bookings.",
      html: (
        <>
          <UnorderedList>
            <ListItem>
              Listing creation and optimization: $150 one-time fee
            </ListItem>
            <ListItem>Professional photography: $200 per session</ListItem>
            <ListItem>Monthly listing management: $50 per month</ListItem>
            <ListItem>Dynamic pricing setup: $30 per month</ListItem>
          </UnorderedList>
        </>
      ),
    },
    {
      title: "Management",
      desc: "Comprehensive AirBnB property management services to maximize your rental income.",
      html: (
        <>
          <UnorderedList>
            <ListItem>
              Full-service property management: 20% of booking revenue
            </ListItem>
            <ListItem>Guest communication and support: Included</ListItem>
            <ListItem>Maintenance coordination: Included</ListItem>
            <ListItem>Monthly performance reporting: Included</ListItem>
            <ListItem>
              Optional add-ons:
              <UnorderedList>
                <ListItem>
                  Interior design consultation: $300 per session
                </ListItem>
                <ListItem>24/7 emergency support: $50 per month</ListItem>
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
                  boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
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
                            ? tabs[2].title
                            : currentTab === "Management"
                              ? tabs[3].title
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
                      mt={"15px"}
                    >
                      {currentTab === "Linen/Amenity"
                        ? tabs[0].desc
                        : currentTab === "Cleaning"
                          ? tabs[1].desc
                          : currentTab === "Listing"
                            ? tabs[2].desc
                            : currentTab === "Management"
                              ? tabs[3].desc
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
                            ? tabs[2].html
                            : currentTab === "Management"
                              ? tabs[3].html
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
                    </HStack>
                  </VStack>
                </Box>
                <Box
                  h={["100%", "100%", "100%", "400px", "400px", "400px"]}
                  p={"30px"}
                  borderRadius={"15px"}
                  w={["100%", "100%", "100%", "50%", "40%", "40%"]}
                  boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
                  fontSize={["14px", "14px", "16px", "16px", "18px", "18px"]}
                >
                  
                  <Stack flexDir={["row", "row", "row", "column", "column", "column"]} flexWrap={"wrap"} gap={"15px"} justify={"start"} align={"start"}>
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
