"use client";
import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Select,
  Input,
  Spacer,
  Avatar,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import Quote from "../../../assets/img/QuotesMark.png";
import Image from "next/image";

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "I highly recommend. They was attentive to our needs and worked tirelessly to find us a client for our holiday house property. We couldn't be happier with our new place!",

      name: "Dan Abrahmov",
      src: "https://bit.ly/dan-abramov",
      rating: 5,
    },
    {
      id: 2,
      text: "  Their professionalism and dedication were truly exceptional. They made the entire process seamless and stress-free. I will definitely be working with them again in the future!",

      name: "Kent Dodds",
      src: "https://bit.ly/kent-c-dodds",
      rating: 5,
    },
    {
      id: 3,
      text: " Fantastic service! They took the time to understand exactly what I was looking for and found the perfect match. I couldn’t be happier!",

      rating: 4,
      name: "Segun Adebayo",
      src: "https://bit.ly/sage-adebayo",
    },
    {
      id: 4,
      text: " Great experience from start to finish. They kept us informed and made sure we got the best deal possible. I would recommend them to anyone!",

      rating: 5,
      name: "Christian Nwamba",
      src: "https://bit.ly/code-beast",
    },
    {
      id: 5,
      text: " Very responsive and professional. They helped us find a great property in a short amount of time. Definitely recommend their services!",
      name: "Sophia M. Martinez",
      rating: 5,
    },
    {
      id: 6,
      text: "  They were patient and helped us every step of the way. We appreciated their attention to detail and ability to handle any challenge that came up.",
      name: "Michael T. Garcia",
      rating: 4,
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(2);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === reviews.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? reviews.length - 1 : currentSlide - 1);
  };

  return (
    <>
      <HStack
        mt={["105px", "105px", "105px", "105px", "155px", "155px"]}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
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
              w={"100%"}
              justify={["center", "center", "start", "start", "start", "start"]}
              align={["center", "center", "start", "start", "start", "start"]}
              h={"100%"}
            >
              <HStack
                // data-aos="fade-in"
                rounded={"100px"}
                justify={[
                  "center",
                  "center",
                  "start",
                  "start",
                  "start",
                  "start",
                ]}
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
                    Simple steps to getting Started
                  </Text>
                </Box>
              </HStack>
            </HStack>
            <Text
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              // data-aos="fade-in"
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
              fontWeight={300}
              fontFamily={"Poppins"}
              bgClip="text"
              textAlign={["center", "center", "left", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, green, red)"
            >
              Look What Our Customers Say!
            </Text>
            <Text
              // data-aos="fade-in"

              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Poppins"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
              fontWeight={300}
            >
              Check out our numerous positive reviews from satisfied clients.
            </Text>

            <HStack
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              justify={["center", "center", "start", "start", "start", "start"]}
              align={"center"}
            >
              <HStack
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["225px", "225px", "170px", "170px", "200px", "80px"]}
                h={["50px", "50px", "50px", "50px", "50px", "50px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(-10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                border={"1px solid black"}
                color={"black"}
              >
                <Text
                  fontSize={"40px"}
                  onClick={() => {
                    prevSlide();
                  }}
                >
                  <FaAngleRight
                    style={{ transform: "rotate(180deg)" }}
                    color="black"
                  />
                </Text>
              </HStack>
              <HStack
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["225px", "225px", "170px", "170px", "200px", "80px"]}
                h={["50px", "50px", "50px", "50px", "50px", "50px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                bg={"white"}
                color={"black"}
                border={"1px solid black"}
              >
                <Text
                  fontSize={"40px"}
                  onClick={() => {
                    nextSlide();
                  }}
                >
                  <FaAngleRight color="black" />
                </Text>
              </HStack>
            </HStack>
          </Box>
          {/* <Image src={collage} width={500} /> */}

          <Box
            mt={["80px", "80px", "50px", "50px", "50px", "50px"]}
            display={["block", "block", "block", "block", "block", "block"]}
            // data-aos="fade-right" // chnage dir
            // border={"5px solid rgb(255, 255, 255,0.25)"}
            h={["80%", "80%", "80%", "80%", "80%", "80%"]}
            w={["100%", "100%", "650px", "650px", "650px", "650px"]}
            backdropFilter="blur(1.5px)"
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
          >
            <VStack
              gap={["20px", "20px", "20px", "20px", "20px", "30px"]}
              boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
              borderRadius={"30px"}
              w={"100%"}
              h={"100%"}
              justify={"start"}
              align={"center"}
              pt={["40px", "40px", "40px", "60px", "60px", "60px"]}
              pb={["10px", "10px", "10px", "20px", "20px", "20px"]}
              px={["40px", "40px", "20px", "50px", "50px", "50px"]}
              fontFamily={"Poppins"}
              color={"black"}
              textAlign={["left", "left", "left", "left", "left", "left"]}
            >
              <Text
                h={["100px", "100px", "150px", "150px", "150px", "120px"]}
                w={"100%"}
                fontSize={["16px", "18px", "16px", "18px", "20px", "20px"]}
              >
                {reviews[currentSlide].text}
              </Text>

              <HStack
                py={"10px"}
                w={"100%"}
                h={"100%"}
                borderTop={"1px solid black"}
                justify={"left"}
                align={"center"}
              >
                <Avatar
                  //  style={{ backgroundImage: `url(${reviews[currentSlide].src})` }}
                  bgPos={"center"}
                  bgSize={"cover"}
                  src={reviews[currentSlide].src}
                  w={["50px", "50px", "50px", "50px", "50px", "50px"]}
                  h={["50px", "50px", "50px", "50px", "50px", "50px"]}
                  borderRadius={"100px"}
                  bg={"gray"}
                ></Avatar>
                <Text
                  fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                >
                  {reviews[currentSlide].name}
                </Text>

                <Spacer />

                <Text fontSize={"25px"}>
                  <FaStar
                    color={
                      reviews[currentSlide].rating > 0 ? "#FFC700" : "#D4D4D4  "
                    }
                  />
                </Text>
                <Text fontSize={"25px"}>
                  <FaStar
                    color={
                      reviews[currentSlide].rating > 2 ? "#FFC700" : "#D4D4D4  "
                    }
                  />
                </Text>
                <Text fontSize={"25px"}>
                  <FaStar
                    color={
                      reviews[currentSlide].rating > 3 ? "#FFC700" : "#D4D4D4  "
                    }
                  />
                </Text>
                <Text fontSize={"25px"}>
                  <FaStar
                    color={
                      reviews[currentSlide].rating > 4 ? "#FFC700" : "#D4D4D4  "
                    }
                  />
                </Text>
                <Text fontSize={"25px"}>
                  <FaStar
                    color={
                      reviews[currentSlide].rating > 5 ? "#FFC700" : "#D4D4D4  "
                    }
                  />
                </Text>
                <HStack
                  position="absolute"
                  bottom={["200", "200", "250", "250", "250", "250"]}
                  right="0"
                  left="0"
                >
                  {/* Image positioned absolutely */}
                  <Image
                    width={180}
                    style={{ rotate: "" }}
                    src={Quote}
                    alt="Quotation mark"
                  />
                </HStack>
              </HStack>
            </VStack>{" "}
            {/* <Image src={collage} />   //!cool */}
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Testimonials;
