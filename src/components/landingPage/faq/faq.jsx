"use client";
import React from "react";
import {
  Divider,
  Center,
  Box,
  VStack,
  Text,
  Accordion,
  AccordionItem,
  HStack,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Image from "next/image";

const Faq = () => {
  // Define an array of FAQ questions and answers
  const faqData = [
    {
      question: "What services does your Airbnb management offer?",
      answer:
        "We offer full-service Airbnb management, including property listing creation, guest communication, pricing optimization, cleaning services, and maintenance, ensuring a seamless hosting experience.",
    },
    {
      question: "How do you help maximize rental income?",
      answer:
        "Our team optimizes your property listings across platforms like Airbnb and Booking.com, adjusts pricing based on market demand, and ensures high occupancy rates, leading to a 40% average increase in rental income.",
    },
    {
      question: "What types of properties do you manage?",
      answer:
        "We manage a wide range of properties, from residential homes and vacation rentals to boutique apartments, focusing on short-term rentals in Adelaide and surrounding areas.",
    },
    {
      question: "How does the linen and amenity service work?",
      answer:
        "We provide high-quality linen and amenity services tailored to each booking. This includes premium bed linens, luxury toiletries, and additional towels, ensuring your guests have a comfortable stay.",
    },
    {
      question: "How can I get started with your services?",
      answer:
        "Getting started is easy! Contact our team, schedule a property inspection, and we'll handle everything from listing creation to guest management and cleaning services.",
    },
    {
      question: "What happens if there's an emergency at my property?",
      answer:
        "We offer 24/7 incidence management, ensuring that any emergencies or issues at your property are addressed immediately for your peace of mind.",
    },
    {
      question: "Do you handle property marketing?",
      answer:
        "Yes, we provide professional marketing services to showcase your property. Our high-quality marketing materials increase your property's appeal and help attract more bookings.",
    },
  ];

  return (
    <>
      <Center my={["100px", "100px", "100px", "150px", "200px", "100px"]}>
        <Divider
          ml={["50px", "50px", "50px", "50px", "50px", "50px"]}
          color={"black"}
          bgColor={"black"}
        />

        <HStack
          //   data-aos="fade-up"

          justify={["center", "center", "center", "center", "center", "center"]}
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
              <Text
                whiteSpace={"nowrap"}
                textShadow={"0px 0px 100px black"}
                w={"100%"}
                h={"100%"}
                textAlign={"center"}
                color={"black"}
                fontSize={["12px", "12px", "12px", "14px", "14px", "14px"]}
                fontWeight={500}
              >
                FAQ
              </Text>
            </Box>
          </HStack>
        </HStack>
        <Divider
          mr={["50px", "50px", "50px", "50px", "50px", "50px"]}
          color={"black"}
          bgColor={"black"}
        />
      </Center>

      <VStack
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        w={"100%"}
        mt={["50px", "50px", "70px", "70px", "70px"]}
        justify={"center"}
        align={"center"}
      >
        <Text
          w={"100%"}
          data-aos="fade-in"
          mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
          fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
          fontWeight={300}
          fontFamily={"Poppins"}
          bgClip="text"
          textAlign={"center"}
          color={"black"}
          bgGradient="linear(to-r, purple, yellow)"
        >
          Frequently Asked Questions
        </Text>
        <Text
          data-aos="fade-in"
          fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
          mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
          textAlign={"center"}
          fontFamily={"Poppins"}
          color={"black"}
          w={"100%"}
          fontWeight={300}
        >
          We handle every detail of managing your property in the short-term
          rental market. Here are answers to some of our most frequently asked
          questions.
        </Text>

        <VStack
          w={["95%", "95%", "95%", "95%", "95%", "95%"]}
          mt={["50px", "50px", "70px", "70px", "70px"]}
        >
          <Accordion
            defaultIndex={[-1]}
            allowMultiple
            w={["100%", "95%", "90%", "70%", "70%"]}
          >
            {/* Map over the faqData array to generate AccordionItems */}
            {faqData.map((faq, index) => (
              <AccordionItem key={index} p={2}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={["16px", "16px", "23px", "23px", "23px"]}
                    >
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color={"gray.600"}
                  pb={4}
                  fontSize={["12px", "12px", "16px", "16px", "16px"]}
                >
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </VStack>
    </>
  );
};

export default Faq;
