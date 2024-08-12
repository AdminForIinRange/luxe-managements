"use client";

import React, { useEffect } from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Select,
  Input,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import interior from "../../../assets/img/interior.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import { IoHappyOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoGitBranch } from "react-icons/io5";
import { FcCustomerSupport } from "react-icons/fc";
import Image from "next/image";
import collage from "../../../assets/img/collage.png";
import { HiArrowLongRight } from "react-icons/hi2";
const AboutPage = () => {
  const [fliter, setFliter] = React.useState(true);
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
      mirror: true,
    }); // Initialize AOS with desired options
  }, []);

  const topBoxIcons = [
    {
      title: " Stress-Free Experience",
      icon: <IoHappyOutline />,
      description:
        "We provide a stress-free experience for our clients. Our team of experienced professionals is dedicated to delivering exceptional service. ",
    },
    {
      title: "  Versatile Platform Use",
      icon: <IoGitBranch />,
      description:
        "Utilize platforms like Airbnb, Booking.com, and traditional rentals for maximum flexibility.",
    },
  ];

  const bottomBoxIcons = [
    {
      title: "Comprehensive Services",
      icon: <FaListUl />,
      description:
        "Benefit from meticulous maintenance, professional cleaning, and efficient tenant booking.",
    },
    {
      title: "Increased Rental Income",
      icon: <FaArrowTrendUp />,
      description:
        "Boost rental income by an average of 40% and improve occupancy rates with our seasoned Airbnb management team in Adelaide.",
    },
  ];
  return (
    <>
      <HStack
        justify={"center"}
        align={"start"}
        w={"100%"}
        h={"100%"}
        wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        mt={["150px", "150px", "150px", "200px", "250px", "150px"]}
      >
        <Text
          w={["95%", "95%", "70%", "70%", "90%", "100%"]}
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
          bgGradient="linear(to-r, green, red)"
        >
          Seamless Exceptional Management
        </Text>
      </HStack>

      <HStack
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["105px", "105px", "105px", "105px", "155px", "155px"]}
      >
        <HStack
          justify={[
            "center",
            "center",
            "space-between",
            "space-between",
            "space-between",
            "space-between",
          ]}
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
                    Maximize Earnings
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
              Maximize Your Rental Income
            </Text>
            <Text
              // data-aos="fade-in"

              fontSize={["14px", "14px", "18px", "18px", "20px", "20px"]}
              mt={["40px", "40px", "40px", "60px", "60px", "60px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Poppins"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
              fontWeight={300}
            >
              Optimize your income and ease your mind with our experienced
              Airbnb Management team in Adelaide.
              <br />
              <br />
              We handle everything for you, from listing your property on
              Airbnb, Booking.com, and more, to maximizing rental profits.
              Experience hassle-free short-term rentals with Adelaide's leading
              Airbnb management service.
            </Text>

            <HStack
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              justify={["center", "center", "start", "start", "start", "start"]}
              align={"center"}
            >
              <HStack
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["225px", "225px", "170px", "170px", "200px", "200px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(10px)",
                }}
                justify={[
                  "center",
                  "center",
                  "start",
                  "start",
                  "start",
                  "start",
                ]}
                align={"center"}
                borderRadius={"10px"}
                px={"8px"}
                py={"5px"}
                mr={"5px"}
                bg={"white"}
                color={"black"}
                bgColor={"black"}
              >
                <Text
                           fontSize={["14px", "14px", "18px", "18px", "20px", "20px"]}
                  color={"white"}
                  px={"8px"}
                >
                  Learn more
                </Text>{" "}
                <Text fontSize={"30px"}>
                  <HiArrowLongRight color="white" />
                </Text>
              </HStack>
            </HStack>
          </Box>
          {/* <Image src={collage} width={500} /> */}
          <Box
            mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
            display={["block", "block", "none", "none", "none", "none"]}
            // data-aos="fade-right" // chnage dir
            border={"5px solid rgb(255, 255, 255,0.25)"}
            h={["350px", "350px", "350px", "400px", "400px", "600px"]}
            w={["100%", "100%", "350px", "450px", "550px", "550px"]}
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

            {/* <Image src={collage} />   //!cool */}
          </Box>
          <Box
            display={["none", "none", "block", "block", "block", "block"]}
            // data-aos="fade-right" // chnage dir

            w={["390px", "390px", "390px", "390px", "450px", "600px"]}
          >
            <Image src={collage} />
          </Box>
        </HStack>
      </HStack>

      <HStack
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["105px", "105px", "105px", "105px", "155px", "155px"]}
      >
        <HStack
          justify={[
            "center",
            "center",
            "space-between",
            "space-between",
            "space-between",
            "space-between",
          ]}
          align={"start"}
          w={"100%"}
          h={"100%"}
          gap={["45px", "45px", "45px", "45px", "45px", "45px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
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
          <Box w={["100%", "100%", "100%", "80%", "70%", "60%"]}>
            <HStack
              w={"100%"}
              justify={[
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
              ]}
              align={"center"}
              h={"100%"}
              gap={["15px", "25px", "35px", "45px", "55px", "100px"]}
            >
              <HStack
                // data-aos="fade-in"
                rounded={"100px"}
                justify={"start"}
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
                    fontFamily={"Poppins"}
                    h={"100%"}
                    textAlign={"center"}
                    color={"black"}
                    fontSize={["14px", "14px", "18px", "18px", "20px", "20px"]}
                    fontWeight={500}
                  >
                    Feel at ease
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
              Say Goodbye to Hosting Hassles
            </Text>

            <HStack
              h={"100%"}
              w={"100%"}
              mt={["40px", "40px", "40px", "60px", "60px", "60px"]}
              justify={"center"}
              align={"start"}
              gap={"50px"}
            >
              {topBoxIcons.map(({ title, icon, description }) => (
                <VStack
                  fontFamily={"Poppins"}
                  w={"100%"}
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
              mt={["40px", "40px", "40px", "60px", "60px", "60px"]}
              justify={"center"}
              align={"start"}
              gap={["50px", "50px", "50px", "50px", "50px", "50px"]}
            >
              {bottomBoxIcons.map(({ title, icon, description }) => (
                <VStack
                  fontFamily={"Poppins"}
                  w={"100%"}
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
            {/* <Text
              // data-aos="fade-in"
              fontSize={["12px", "12px", "12px", "14px", "14px", "16px"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Poppins"}
              color={"black"}
              w={"100%"}
              fontWeight={300}
            >
              Optimize your income and ease your mind with our experienced
              Airbnb Management team in Adelaide.
              <br />
              <br />
              We handle everything for you, from listing your property on
              Airbnb, Booking.com, and more, to maximizing rental profits.
              Experience hassle-free short-term rentals with Adelaide's leading
              Airbnb management service.
            </Text> */}
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default AboutPage;
