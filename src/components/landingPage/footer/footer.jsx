"use client";
import React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  Stack,
  Icon,
  HStack,
  Center,
  Divider,
} from "@chakra-ui/react";

import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      mt={["150px", "200px", "300px", "300px", "300px"]}
      bgColor="white"
      py={2}
      borderRadius={"15px"}
    >
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
                fontWeight={400}
              >
                Vist our Soicals
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
      <Flex
        w={"100%"}
        direction={{ base: "row", md: "row" }}
        justify="space-around"
        align="start"
        color={"black"}
        bg={"white"}
      >
        <Stack
          spacing={4}
          textAlign="center"
          mb={{ base: 8, md: 0 }}
          color={"black"}
        >
          <Text fontSize="lg" fontWeight="400" color={"black"}>
            Company
          </Text>
          <Link href="#" fontSize="sm" color={"#393939"}>
            About Us
          </Link>
          <Link href="#" fontSize="sm" color={"#393939"}>
            Contact Us
          </Link>
          <Link href="#" fontSize="sm" color={"#393939"}>
            Privacy Policy
          </Link>
          <Link href="#" fontSize="sm" color={"#393939"}>
            Terms of Service
          </Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="400" color={"black"}>
            Get Started
          </Text>
          <Link href="#" fontSize="sm" color={"#393939"}>
            Blog
          </Link>

          <Link href="#" fontSize="sm" color={"#393939"}>
            Properties
          </Link>

          <Link href="#" fontSize="sm" color={"#393939"}>
            Add Listing
          </Link>

          <Link href="/" fontSize="sm" color={"#393939"}>
            Contact
          </Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text color={"black"} fontSize="lg" fontWeight="400">
            Connect
          </Text>
          <Flex justify="center">
            <Link target="_blank" href="#" mr={2}>
              <Icon as={FaInstagram} boxSize={6} color={"#393939"} />
            </Link>
            <Link target="_blank" href="#" mr={2}>
              <Icon as={FaLinkedin} boxSize={6} color={"#393939"} />
            </Link>
          </Flex>
        </Stack>
      </Flex>
      <Text mt={8} textAlign="center" fontSize="sm" color={"#393939"}>
        © Luxe Managements. All rights reserved .
      </Text>
    </Box>
  );
};

export default Footer;
