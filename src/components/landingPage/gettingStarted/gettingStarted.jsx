import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Select,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
const GettingStarted = () => {
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
      {/* <HStack
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
          Seamless Exceptional Managemen
        </Text>
      </HStack> */}

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
              How we can get you get started
            </Text>
            <Text
              // data-aos="fade-in"

              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              mt={["40px", "40px", "40px", "50px", "50px", "50px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Poppins"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
              fontWeight={300}
            >
              Learn how we can help you get started with personalized guidance
              and expert support every step of the way.
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
            </HStack>
          </Box>
          {/* <Image src={collage} width={500} /> */}

          <Box
            mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
            display={["block", "block", "block", "block", "block", "block"]}
            // data-aos="fade-right" // chnage dir
            // border={"5px solid rgb(255, 255, 255,0.25)"}
            h={["350px", "350px", "350px", "400px", "400px", "600px"]}
            w={["100%", "100%", "100%", "450px", "550px", "550px"]}
          
            backdropFilter="blur(1.5px)"
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
          >
            {" "}
            {GettingStartedSteps.slice(0, 4).map(({ id, title, description }, index) => (
              <VStack
                key={id}
                w={"100%"}
                align={"center"}
                justify={"start"}
              
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  justify={"start"}
                  align={"start"}
                  gap={2}
                >
                  <VStack justify={"center"} gap={0} >
                
                    <Box
                      w={"50px"}
                      h={"50px"}
                      borderRadius={"15px"}
                      bg={"white"}
                      border={"2.5px solid #BFBFBF"}
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
                   { index < 3 && <Box
                    zIndex={-1}
                     
                      w={"5px"}
                      h={"70px"}
                    
                      bg={"#BFBFBF"}
                    ></Box>}
                  </VStack>

                  <Box >
                    <Text align={"start"}
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
            ))}
            {/* <Image src={collage} />   //!cool */}
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default GettingStarted;
