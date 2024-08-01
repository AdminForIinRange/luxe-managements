"use client";

import {
  Box,
  Divider,
  HStack,
  Text,
  Spacer,
  Icon,
  Center,
  useMediaQuery,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/svg/Navbar/logo.svg";
import {
  FaDiscord,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaBars,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";
import { RiSpaceShipFill } from "react-icons/ri";
import { GiRapidshareArrow, GiReturnArrow } from "react-icons/gi";
import { GiWideArrowDunk } from "react-icons/gi";
const Navbar = ({}) => {
  const [isTablet] = useMediaQuery("(max-width: 767px)");
  const [night, setNight] = useState(true);
  const [yValue, setYvalue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setYvalue(true);
      } else {
        setYvalue(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [yValue]);

  const links = [
    { name: "About", link: "#aboutUs" },
    { name: "Properties  ", link: "#properties" },
    { name: "Services", link: "#services" },
    { name: "Blog", link: "#blog" },
    { name: "FAQ", link: "#faq" },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      {isTablet ? (
        <Box>
          <HStack
            position={"fixed"}
            zIndex={"5"}
            px={"15"}
            w={"100%"}
            justify={"left"}
            align={"start"}
            mt={"10px"}
          >
            <Box
              backdropFilter="blur(2.5px)"
              transition={"all 0.3s ease-in-out"}
              bg={"rgb(255, 255, 255,0.05)"}
              border={"1px solid rgb(255, 255, 255,0.25)"}
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 0px 10px"}
              rounded={"15px"}
              w={"45px"}
              h={"35px"}
              borderRadius={"10px"}
            >
              <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                <FaBars size={"20px"} color="rgb(255, 255, 255,0.5)" />
              </HStack>
            </Box>
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"center"}
              align={"center"}
            ></HStack>
          </HStack>
        </Box>
      ) : (
        <Box>
          <HStack
            w={"100%"}
            zIndex={"5"}
            position={"fixed"}
            justify={"center"}
            align={"center"}
            mt={"10px"}
          >
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"center"}
              align={"center"}
              mb={"16.5px"}
            >
              <Box
                backdropFilter={yValue ? "blur(8px)" : "blur(2.5px)"}
                transition={"all 0.3s ease-in-out"}
                w={yValue ? ["95%", "95%", "85%", "85%", "85%", "65%"] : "95%"}
                h={"50px"}
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  justify={"center"}
                  align={"center"}
                  gap={["20px", "30px", "40px", "50px", "50px"]}
                  fontFamily={"Poppins"}
                  px={["2", "2", "5", "5", "5"]}
                >
                  <Box w={["500px", "500px", "400px", "400px", "400px", "400px"]}>
                    <a href="/">
                      {" "}
                      <Image src={Logo} width={"100%"} height={"100%"} alt="logo" />
                    </a>
                  </Box>

                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"end"}
                    align={"center"}
                  >
                    <Box
                      bgColor={"black"}
                      h={"90%"}
                      w={["90%", "90%", "90%", "90%", "70%", "50%"]}
                      bg={"rgb(255, 255, 255,1)"}
                      borderRadius={"15px"}
                      _hover={{
                        boxShadow: "0 0 25px rgba(0,0,0,0.3)",
                      }}
                      transition={"all 0.3s ease-in-out"}
                      boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
                    >
                      <HStack w={"100%"} h={"100%"} justify={"end"} px={"15px"}>
                        <Input
                          w={"100%"}
                          border={"none"}
                          variant="unstyled"
                          fontSize={[
                            "12px",
                            "12px",
                            "12px",
                            "12px",
                            "14px",
                            "16px",
                          ]}
                          placeholder="Search..."
                        />

                        <Text
                          fontSize={[
                            "12px",
                            "12px",
                            "12px",
                            "12px",
                            "14px",
                            "16px",
                          ]}
                          cursor={"pointer"}
                        >
                          <FaSearch color="black" />
                        </Text>
                      </HStack>
                    </Box>
                  </HStack>

                  {links.map(({ name, link }, index) => (
                    <>
                      <HStack
                        key={index}
                        h={"100px"}
                        justify={"center"}
                        align={"center"}
                      >
                        <Text
                          color={"black"}
                          fontSize={[
                            "12px",
                            "12px",
                            "12px",
                            "12px",
                            "14px",
                            "16px",
                          ]}
                        >
                          <Link href={link}>{name}</Link>
                        </Text>
                      </HStack>
                    </>
                  ))}
                </HStack>
              </Box>
            </HStack>
          </HStack>
        </Box>
      )}
    </>
  );
};

export default Navbar;
