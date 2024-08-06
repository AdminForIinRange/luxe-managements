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

          w={["100%", "100%", "90%", "90%", "90%", "100%"]}
          fontSize={["30px", "30px", "35px", "45px", "85px", "65px"]}
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
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["15px", "15px", "15px", "15px", "155px", "155px"]}
      >
        <HStack
          justify={"center"}
          align={"start"}
          w={"100%"}
          h={"100%"}
          gap={["15px", "25px", "35px", "45px", "55px", "100px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["90%", "65%", "30%", "30%", "30%", "35%"]}>
            <HStack
              w={"100%"}
              justify={["center", "center", "start", "start", "start", "start"]}
              align={"center"}
              h={"100%"}
            >
              <HStack
                data-aos="fade-left"
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
                    w={"100%"}
                    h={"100%"}
                    textAlign={"center"}
                    color={"black"}
                    fontSize={["12px", "12px", "12px", "14px", "14px", "14px"]}
                    fontWeight={500}
                  >
                    Improve
                  </Text>
                </Box>
              </HStack>
            </HStack>
            <Text
              data-aos="fade-left"
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              w={["100%", "100%", "90%", "90%", "90%", "90%"]}
              fontSize={["25px", "25px", "25px", "35px", "35px", "40px"]}
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
              data-aos="fade-left"
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
            </Text>
          </Box>
          <Box
            style={{ backgroundImage: `url(${interior.src})` }}
            data-aos="fade-right" // chnage dir
            border={"5px solid rgb(255, 255, 255,0.25)"}
            w={["380px", "380px", "450px", "450px", "550px", "550px"]}
            h={["350px", "350px", "350px", "400px", "400px", "400px"]}
            bg={"rgb(255, 255, 255,0.025)"}
            backdropFilter="blur(1.5px)"
            p={"10px"}
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
          >
            <Box
              data-aos="fade-right"
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
      </HStack>

      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["15px", "15px", "15px", "15px", "155px", "155px"]}
      >
        <HStack
          justify={"center"}
          align={"start"}
          w={"100%"}
          h={"100%"}
          gap={["15px", "25px", "35px", "45px", "55px", "100px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box
            style={{ backgroundImage: `url(${interior.src})` }}
            data-aos="fade-right" // chnage dir
            border={"5px solid rgb(255, 255, 255,0.25)"}
            w={["380px", "380px", "450px", "450px", "550px", "550px"]}
            h={["350px", "350px", "350px", "400px", "400px", "600px"]}
            bg={"rgb(255, 255, 255,0.025)"}
            backdropFilter="blur(1.5px)"
            p={"10px"}
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
          >
            <Box
              data-aos="fade-right"
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
          <Box w={["90%", "65%", "30%", "30%", "30%", "45%"]}>
            <HStack
              w={"100%"}
              justify={["center", "center", "start", "start", "start", "start"]}
              align={"center"}
              h={"100%"}
            >
              <HStack
                data-aos="fade-left"
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
                    w={"100%"}
                    h={"100%"}
                    textAlign={"center"}
                    color={"black"}
                    fontSize={["12px", "12px", "12px", "14px", "14px", "14px"]}
                    fontWeight={500}
                  >
                    Improve
                  </Text>
                </Box>
              </HStack>
            </HStack>

            <Text
              data-aos="fade-left"
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              w={["100%", "100%", "90%", "90%", "90%", "90%"]}
              fontSize={["25px", "25px", "25px", "35px", "35px", "40px"]}
              fontWeight={300}
              fontFamily={"Poppins"}
              bgClip="text"
              textAlign={["center", "center", "left", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, green, red)"
            >
              Say Goodbye to Hosting Hassles
            </Text>

            <HStack
              w={"100%"}
              mt={["15px", "15px", "15px", "15px", "15px", "60px"]}
              justify={"center"}
              align={"start"}
              gap={"50px"}
            >
              {topBoxIcons.map(({ title, icon, description }) => (
                <VStack w={"5000px"} h={"100%"} justify={"start"} align={"left"} key={title}>
                  <Text  data-aos="fade-up"
                    textAlign={"left"}
                    fontSize={["12px", "12px", "12px", "14px", "14px", "30px"]}
                  >
                    {icon}
                  </Text>

                  <Text data-aos="fade-up"
                  fontWeight={500}
                    w={"100%"}
                    fontSize={["12px", "12px", "12px", "14px", "14px", "20px"]}
                    mt={["10px", "10px", "10px", "10px", "10px", "10px"]} 
                  >
                    {title}
                  </Text>
                  <Text  data-aos="fade-up"
                    w={"100%"}
                    fontSize={["12px", "12px", "12px", "14px", "14px", "15px"]}
                  >
                    {description}
                  </Text>
                </VStack>
              ))}
            </HStack>

            <HStack
              w={"100%"}
              mt={["15px", "15px", "15px", "15px", "15px", "50px"]}
              justify={"center"}
              align={"start"}
              gap={"50px"}
            >
              {bottomBoxIcons.map(({ title, icon, description }) => (
                <VStack w={"100%"} justify={"start"} align={"left"} key={title} >
                  <Text  data-aos="fade-up"
                    textAlign={"left"}
                    fontSize={["12px", "12px", "12px", "14px", "14px", "30px"]}
                  >
                    {icon}
                  </Text>

                  <Text  mt={["10px", "10px", "10px", "10px", "10px", "10px"]}  data-aos="fade-up" 
                  fontWeight={500}
                    w={"100%"}
                    fontSize={["12px", "12px", "12px", "14px", "14px", "20px"]}
                  >
                    {title}
                  </Text>
                  <Text  data-aos="fade-up" 
                    w={"100%"}
                    fontSize={["12px", "12px", "12px", "14px", "14px", "15px"]}
                  >
                    {description}
                  </Text>
                </VStack>
              ))}
            </HStack>
            {/* <Text
              data-aos="fade-left"
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
