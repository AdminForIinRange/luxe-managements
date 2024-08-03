"use client";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
    }); // Initialize AOS with desired options
  }, []);
  return (
    <>
      <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
        <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
          <Box
            rounded={"10px"}
            mt={"90px"}
            w={["90%", "90%", "90%", "90%", "90%", "90%"]}
            h={"500px"}
            bg={"gray"}
          >
            <VStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
              <Text
                fontSize={["30px", "30px", "35px", "45px", "85px", "85px"]}
                fontWeight={500}
                textAlign={"center"}
                fontFamily={"Poppins"}
                bgClip="text" // Clip the background to the text
                className="animate__animated animate__fadeInDown"
                color={"white"} // Adding white outline effect
                bgGradient="linear(to-r, green, red)"
                // textShadow={"0px 0px 5px white"}
              >
                Luxe Managements{" "}
              </Text>
              <Text
                fontSize={["12px", "12px", "16px", "16px", "18px", "35px"]}
                textAlign={"center"}
                fontFamily={"Poppins"}
                color={"white"}
                fontWeight={300}
                mt={["0px", "0px", "15px", "15px", "15px", "15px"]}
                w={["80%", "60%", "50%", "50%", "50%", "30%"]}
                className="animate__animated animate__fadeInDown"
              >
                Top Airbnb Management Company in Adelaide.
              </Text>
            </VStack>
          </Box>
        </HStack>
      </HStack>

      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["150px", "150px", "150px", "200px", "250px", "250px"]}
      >
        <HStack
          justify={"center"}
          align={"start"}
          w={"100%"}
          h={"100%"}
          gap={["15px", "25px", "35px", "45px", "55px", "65px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["90%", "65%", "30%", "30%", "30%", "30%"]}>
            <HStack
              w={"100%"}
              justify={["center", "center", "start", "start", "start", "start"]}
              align={"center"}
              h={"100%"}
            >
              <HStack
                data-aos="fade-up"
                rounded={"100px"}
                justify={"start"}
                align={"center"}
                h={"100%"}
              
                border={"1px solid rgb(255, 255, 255,0.25)"}
              

                py={[1, 1, 2, 2, 2, 2]}
              >
                <Box
                  transform={[
                    "rotate(90deg)",
                    "rotate(0deg)",
                    "rotate(0deg)",
                    "rotate(0deg)",
                    "rotate(0deg)",
                    "rotate(0deg)",
                  ]}
                >
                  <GoDotFill color="black" fontSize={"20px"} />
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
                    Friendly
                  </Text>
                </Box>
              </HStack>
            </HStack>
            <Text
              data-aos="fade-up"
              textShadow={"0px 0px 100px black"}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              w={["100%", "100%", "90%", "90%", "90%", "90%"]}
              fontSize={["25px", "25px", "25px", "35px", "35px", "40px"]}
              fontWeight={600}
              fontFamily={"Poppins"}
              bgClip="text"
              textAlign={["center", "center", "left", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, green, red)"
            >
              Maximize Your Rental Income
            </Text>
            <Text
              data-aos="fade-up"
              textShadow={"0px 0px 100px black"}
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
              We handle everything for you,
              from listing your property on Airbnb, Booking.com, and more, to
              maximizing rental profits. Experience hassle-free short-term
              rentals with Adelaide's leading Airbnb management service.
            </Text>
          </Box>
          <Box
            data-aos="flip-up"
            border={"2px solid rgb(255, 255, 255,0.25)"}
            w={["380px", "380px", "450px", "450px", "550px", "550px"]}
            h={["350px", "350px", "350px", "400px", "400px", "400px"]}
            bg={"rgb(255, 255, 255,0.025)"}
            backdropFilter="blur(1.5px)"
            p={"10px"}
            borderRadius={"30px"}
          >
            <Box
              data-aos="flip-down"
              backdropFilter="blur(1.5px)"
              bgImage={"https://images.unsplash.com/photo-1601049876560-6f5d2b5b7f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
           bgSize={"cover"}
           bgPos={"center"}
              w={"100%"}
              h={"100%"}
              p={"10px"}
              borderRadius={"30px"}
            >
              <HStack p={"5px"} justify={"start"} align={"start"} w={"100%"}>
                <HStack
                  data-aos="flip-up"
                  rounded={"100px"}
                  backdropFilter="blur(1.5px)"
                  justify={"start"}
                  align={"start"}

                  border={"1px solid rgb(255, 255, 255,0.25)"}
                
                  px={5}
                  py={2}
                >
                  <Box
                    transform={[
                      "rotate(90deg)",
                      "rotate(0deg)",
                      "rotate(0deg)",
                      "rotate(0deg)",
                      "rotate(0deg)",
                      "rotate(0deg)",
                    ]}
                  >
                    <GoDotFill color="black" fontSize={"20px"} />
                  </Box>
                  <Box>
                    <Text
                      textShadow={"0px 0px 100px black"}
                      w={"100%"}
                      h={"100%"}
                      textAlign={"center"}
                      color={"black"}
                      fontSize={[
                        "12px",
                        "12px",
                        "12px",
                        "14px",
                        "14px",
                        "14px",
                      ]}
                      fontWeight={500}
                    >
                      Simple navigation
                    </Text>
                  </Box>
                </HStack>
              </HStack>
            </Box>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default HomePage;
