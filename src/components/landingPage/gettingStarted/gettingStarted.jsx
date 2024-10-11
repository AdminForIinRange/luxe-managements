"use client";

import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Select,
  Center,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { GoTriangleRight } from "react-icons/go";
import Link from "next/link";
import GetInTouch from "@/components/button/getInTouch/getInTouch";
const GettingStarted = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const GettingStartedSteps = [
    {
      id: 1,
      title: "Get Started",
      description:
        'Click "Get In Touch" with our team to discuss your property.',
    },
    {
      id: 2,
      title: "Meet Your Local Hosting Partner",
      description:
        "Meet at your property for an inspection. We'll gather details and start our partnership.",
    },
    {
      id: 3,
      title: "Onboarding and Listing Creation",
      description:
        "We handle photos and listing creation. Your property will shine on Airbnb and Booking.com.",
    },
    {
      id: 4,
      title: "Enjoy Hassle-Free Management",
      description:
        "Relax while we manage everything. Bookings, pricing, guest management, and cleaning are all covered.",
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
          justify={["center", "center", "center", "center", "center", "center"]}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "70%", "60%", "50%", "50%"]}>
            <HStack
              //   data-aos="fade-up"
              w={"100%"}
              justify={["center", "center", "start", "start", "start", "start"]}
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
                    Getting Started
                  </Text>
                </Box>
              </HStack>
            </HStack>

            <Text
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              data-aos="fade-in"
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
              fontWeight={300}
              fontFamily={"Poppins"}
              bgClip="text"
              textAlign={["center", "center", "left", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              How We Can Get You Get Started
            </Text>
            <Text
              data-aos="fade-in"
              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Poppins"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
              fontWeight={300}
            >
              Learn how we can help you get started with personalized guidance
              and expert support every step of the way.
            </Text>
            <GetInTouch />
          </Box>

          <Box
            mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
            display={["block", "block", "block", "block", "block", "block"]}
            data-aos="fade-right" // chnage dir
            // border={"1px solid rgb(0, 0, 0,0.25)"}
            h={["500px", "500px", "500px", "500px", "500px", "500px"]}
            w={["100%", "100%", "100%", "450px", "550px", "550px"]}
            backdropFilter="blur(1.5px)"
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
          >
            {" "}
            {GettingStartedSteps.slice(0, 4).map(
              ({ id, title, description }, index) => (
                <VStack key={id} w={"100%"} align={"center"} justify={"start"}>
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"start"}
                    align={"start"}
                    gap={2}
                  >
                    <VStack justify={"center"} gap={0}>
                      <Box
                        w={"50px"}
                        h={"50px"}
                        borderRadius={"15px"}
                        bg={"white"}
                        border={"1px solid rgb(0, 0,0,0.25)"}
                      >
                        <HStack
                          w={"100%"}
                          justify={"center"}
                          h={"100%"}
                          align={"center"}
                        >
                          <Text
                            fontSize={[
                              "14px",
                              "18px",
                              "16px",
                              "16px",
                              "18px",
                              "18px",
                            ]}
                            fontWeight={500}
                            fontFamily={"Poppins"}
                            color={"black"}
                          >
                            {id}
                          </Text>
                        </HStack>
                      </Box>
                      {index < 3 && (
                        <Box
                          transition={"transform 0.3s ease"}
                          zIndex={-1}
                          w={"5px"}
                          h={"70px"}
                          bg={"#BFBFBF"}
                        ></Box>
                      )}
                    </VStack>

                    <Box>
                      <Text
                        align={"start"}
                        fontSize={[
                          "12px",
                          "16px",
                          "14px",
                          "14px",
                          "16px",
                          "16px",
                        ]}
                        fontWeight={500}
                        textAlign={"left"}
                        fontFamily={"Poppins"}
                        color={"black"}
                        w={"100%"} // !important
                      >
                        {title}
                      </Text>
                      <Text
                        fontSize={[
                          "12px",
                          "16px",
                          "14px",
                          "14px",
                          "16px",
                          "16px",
                        ]}
                        textAlign={"left"}
                        fontFamily={"Poppins"}
                        color={"black"}
                        w={"100%"}
                        fontWeight={300}
                      >
                        {description}
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              ),
            )}
            {/* <Image src={collage} />   //!cool */}
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default GettingStarted;
