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
import interior6 from "../../../assets/img/interior6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { GoTriangleRight } from "react-icons/go";
import { IoHappyOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoGitBranch } from "react-icons/io5";
import { FcCustomerSupport } from "react-icons/fc";
import Image from "next/image";
import collage from "../../../assets/img/collage.png";
import skyRise3 from "../../../assets/img/skyRise3.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdHotel } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { FaBroom } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { FaHouseCircleCheck } from "react-icons/fa6";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
const AboutPage = () => {
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

  const top2BoxIcons = [
    {
      title: " Stress-Free Experience",
      icon: <MdHotel />,
      description:
        "We provide a stress-free experience for our clients. Our team of experienced professionals is dedicated to delivering exceptional service.",
    },
    {
      title: "All Basic Amenity Hire",
      icon: <FaHandshake />,
      description:
        "From toiletries to kitchen essentials, we supply everything needed for a comfortable and convenient.",
    },
  ];

  const bottom2BoxIcons = [
    {
      title: "Cleaning Management",
      icon: <FaBroom />,
      description:
        "This includes full home detailing, ensuring every corner of your property is spotless for incoming guests.",
    },
    {
      title: "Property Management",
      icon: <FaLaptopHouse />,
      description:
        "Advertising, finances, insurance, bills, and guest management for seamless operation.",
    },
  ];

  const top3BoxIcons = [
    {
      title: "24/7 Security Coverage",
      icon: <FaEye />,
      description:
        "Around-the-clock security monitoring to keep your property safe and secure at all times.",
    },
    {
      title: "24/7 Incidence Management",
      icon: <FaHouseMedicalCircleCheck />,
      description: "Immediate response to any issues or emergencies.",
    },
  ];

  const bottom3BoxIcons = [
    {
      title: "Professional Marketing",
      icon: <FaChartLine />,
      description:
        "High-quality Marketing to showcase your property, enhancing its appeal and attracting more bookings.",
    },
    {
      title: "Regular Property Inspections",
      icon: <FaHouseCircleCheck />,
      description:
        "Routine checks to ensure the property is in excellent condition.",
    },
  ];

  return (
    <>
      <HStack
        justify={"center"}
        align={"start"}
        w={"100%"}
        h={"100%"}
        wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        mt={["150px", "150px", "150px", "200px", "250px", "150px"]}
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
          bgGradient="linear(to-r, green, red)"
        >
          Seamless Exceptional Management
        </Text>
      </HStack>

      <HStack
        px={["4%", "4%", "4%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["155px", "155px", "155px", "155px", "155px", "155px"]}
      >
        <HStack
          justify={["center", "center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "95%", "60%", "50%", "50%"]}>
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
                border={"1px solid rgb(0, 0, 0,0.25)"}
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
                    Maximize Earnings
                  </Text>
                </Box>
              </HStack>
            </HStack>
            <Text
              w={["100%", "100%", "100%", "80%", "80%", "80%"]}
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
              Maximize Your Rental Income
            </Text>
            <Text
              // data-aos="fade-in"

              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"Poppins"}
              color={"black"}
              w={["100%", "100%", "100%", "80%", "80%", "80%"]} // !important
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

            {/* <HStack
              w={["100%", "100%", "100%", "80%", "80%", "80%"]}
              justify={["center", "center", "center", "start", "start", "start"]}
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
                  "center",
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
                  fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                  color={"white"}
                  px={"8px"}
                >
                  Learn more
                </Text>{" "}
                <Text fontSize={"30px"}>
                  <HiArrowLongRight color="white" />
                </Text>
              </HStack>
            </HStack> */}
          </Box>
          {/* <Image src={collage} width={500} /> */}
          <Box
            mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
            display={["block", "block", "block", "block", "block", "block"]}
            // data-aos="fade-right" // chnage dir
            border={"5px solid rgb(255, 255, 255,0.25)"}
            h={["350px", "350px", "350px", "400px", "400px", "600px"]}
            w={["100%", "100%", "100%", "450px", "550px", "550px"]}
            bg={"rgb(0,0,0,0.05)"}
            backdropFilter="blur(1.5px)"
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
            p={"10px"}
          >
            <Box
              style={{ backgroundImage: `url(${interior6.src})` }}
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
          </Box>
          {/* the collage  down here */}
          {/* <Box
            display={["none", "none", "block", "block", "block", "block"]}
            // data-aos="fade-right" // chnage dir

            w={["390px", "390px", "550px", "550px", "550px", "550px"]}
          >
            <Image src={collage} />
          </Box> */}
        </HStack>
      </HStack>

      <Section1 topBoxIcons={topBoxIcons} bottomBoxIcons={bottomBoxIcons} />
      <Section2 top2BoxIcons={top2BoxIcons} bottom2BoxIcons={bottom2BoxIcons} />
      <Section3 top3BoxIcons={top3BoxIcons} bottom3BoxIcons={bottom3BoxIcons} />
    </>
  );
};

export default AboutPage;
