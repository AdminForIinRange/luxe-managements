"use client";
import { Box, HStack, VStack, Text , Divider} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import Aos from "aos";
import "aos/dist/aos.css";
import interior from "../../../assets/img/interior.jpg";
import skyRise2 from "../../../assets/img/skyRise2.jpg";

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
    }); // Initialize AOS with desired options
  }, []);
  return (
    // add some functional content at the end of the banner
    <>
      <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
        <HStack
          w={"100%"}
          h={"100%"}
          justify={"center"}
          align={"center"}
          pl={"5px"}
          py={"5px"}
        >
          <Box
            className="animate__animated animate__fadeInUp"
            rounded={"10px"}
            borderBottomRadius={"100px"}
            w={["90%", "90%", "90%", "90%", "90%", "100%"]}
            h={"600px"}
            bgPos={"center 60%"}
            bgSize={"cover"}
            style={{ backgroundImage: `url(${skyRise2.src})` }}
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
                textShadow={"0px 0px 5px gray"}
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
                textShadow={"0px 0px 5px gray"}
              >
                Top Airbnb Management Company in Adelaide.
              </Text>
            </VStack>
          </Box>
        </HStack>
      </HStack>

      <HStack
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        mt={"-100px"}
      >
        <Box
          w={"70%"}
          h={"115px"}
          bgColor={"white"}
          shadow={"lg"}
          rounded={"10px"}
          zIndex={"10"}
        >
          <HStack
            w={"100%"}
            h={"100%"}
            justify={"space-between"}
            align={"center"}
            gap={"10px"}
            p={"10px"}
            px={"130px"}
          >
            <VStack>
              <Text fontWeight={400} color={"gray.700"} >Property Type</Text>
              <Box>
                <Text fontWeight={700} fontSize={"24px"} color={"gray.600"} >
                  House
                </Text>
              </Box>
            </VStack>{" "}

            <Divider orientation="vertical" borderColor="gray.400" h="100%" />
          
            <VStack>
              <Text fontWeight={400} color={"gray.700"} >Post Code</Text>
              <Box>
                <Text fontWeight={700} fontSize={"24px"} color={"gray.600"}>
                  5000
                </Text>
              </Box>
            </VStack>
            <Divider orientation="vertical" borderColor="gray.400" h="100%" />
          
            <VStack>
              <Text  fontWeight={400} color={"gray.700"} >Service</Text>
              <Box >
                <Text fontWeight={700} fontSize={"24px"} color={"gray.600"} >
                Linen/Amenity
                </Text>
              </Box>
            </VStack>
            <Divider orientation="vertical" borderColor="gray.400" h="100%" />
          
            <VStack>
              <Text  fontWeight={400}>Currently listed</Text>
              <Box >
                <Text fontWeight={700} fontSize={"24px"} color={"gray.600"}>
                  Not Listed
                </Text>
              </Box>
            </VStack>
            
          </HStack>
        </Box>
      </HStack>

      {/* 
below is the a display of Services and about */}

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
          gap={["15px", "25px", "35px", "45px", "55px", "200px"]}
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
              data-aos="fade-up"
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              w={["100%", "100%", "90%", "90%", "90%", "90%"]}
              fontSize={["25px", "25px", "25px", "35px", "35px", "40px"]}
              fontWeight={500}
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
            data-aos="flip-up" // chnage dir
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
              data-aos="flip-down"
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
    </>
  );
};

export default HomePage;
