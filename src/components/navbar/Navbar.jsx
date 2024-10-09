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

const Navbar = ({}) => {
  const [isTablet] = useMediaQuery("(max-width: 767px)");
  const [night, setNight] = useState(true);
  const [yValue, setYvalue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 525) {
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
    { name: "about Us", link: "#aboutUs" },
    { name: "Services  ", link: "#services" },
    { name: "FAQ", link: "#faq" },
    { name: "test", link: "#blog" },
    { name: "test", link: "#faq" },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      {isTablet ? (
        <Box>
          <HStack
            bg={"white"}
            zIndex={"5"}
            position={"fixed"}
            justify={"space-between"}
            w={"100%"}
            py={"3"}
            px={"5"}
          >
            <HStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
              {" "}
              <Box w={["100px", "100px", "400px", "400px", "400px", "400px"]}>
                <a href="/">
                  {" "}
                  <Image src={Logo} width={"100%"} height={"100%"} alt="logo" />
                </a>
              </Box>{" "}
            </HStack>
            <HStack
              h={"100%"}
              zIndex={"5"}
              w={"100%"}
              justify={"right"}
              align={"start"}
            >
              <Box
                backdropFilter="blur(2.5px)"
                bg={"white"}
                border={"1px solid rgb(0, 0, 0,0.25)"}
                boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
                rounded={"15px"}
                w={"35px"}
                h={"30px"}
                borderRadius={"10px"}
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  justify={"center"}
                  align={"center"}
                >
                  <FaBars size={"15px"} color={"black"} />
                </HStack>
              </Box>
            </HStack>
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
          >
            <HStack

            transition={"all 0.3s ease-in-out"}
           
              w={!yValue ?[ "95%", "95%", "95%", "90%", "90%", "90%"] : ["90%", "90%", "90%", "80%", "80%", "80%"]}
              h={"100%"}
              justify={"center"}
              align={"center"}
              mt={"16.5px"}
              mb={"16.5px"}
            >
              <Box rounded={"15px"}
                transition={"all 0.5s ease-in-out"}
                w={"100%"}
                _hover={{
                  h: "65",
                }}
                h={"60px"}
                bg={"white"}
                boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  justify={"center"}
                  align={"center"}
                
                  fontFamily={"Poppins"}
                  px={["2", "2", "5", "5", "5"]}
                >
                  <Box
                    w={["500px", "500px", "400px", "400px", "400px", "250px"]}
                  >
                    <a href="/">
                      {" "}
                      <Image
                        src={Logo}
                        width={"100%"}
                        height={"100%"}
                        alt="logo"
                      />
                    </a>
                  </Box>

                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"space-between"}
                    align={"center"}
                  >
                    <Box
                      bgColor={"black"}
                      h={["80%", "80%", "80%", "80%", "80%", "80%"]}
                      w={["90%", "90%", "90%", "90%", "70%", "70%"]}
                      bg={"rgb(255, 255, 255,1)"}
                      borderRadius={"15px"}
                      border={"1px solid rgb(0, 0,0,0.25)"}
                      boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
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
                        border={"1px solid rgb(0, 0,0,0.25)"}
                        rounded={"15px"}
                        px={[5, 5, 5, 5, 5, 5]}
                        py={[2, 2, 2, 2, 2, 2]}
                        _hover={{
                          bg: "black",
                          color: "white",
                          cursor: "pointer",
                        }}
                        key={index}
                        justify={"end"}
                        align={"end"}
                      >
                        <Text
                        whiteSpace={"nowrap"}
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
