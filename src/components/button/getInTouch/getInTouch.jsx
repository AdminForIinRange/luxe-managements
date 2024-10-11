"use client";

import {
  Box,
  HStack,
  VStack,
  Text,
  Divider,
  Select,
  Center,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { GoTriangleRight } from "react-icons/go";
import Link from "next/link";


const GetInTouch = ({width=["100%", "100%", "60%", "50%", "40%", "30%"], mt="25px"}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        mt={mt}
        w={width}

        h={"100%"}
        justify={"end"}
        align={"end"}
        gap={"15px"}
      >
        <Box
          as={"a"}
          onClick={() => {
            isOpen ? onClose() : onOpen();
          }}
          transition={"all 0.3s ease"}
          _hover={{
            bg: "black",
            color: "white",
          }}
          cursor={"pointer"}
          borderRadius={"15px"}
          //   boxShadow={"rgba(0, 0, 0, 0.2) 0px 0px 10px"}
          w={"100%"}
          h={"50px"}
          bg={"white"}
          border={"1px solid rgb(0, 0,0,0.25)"}
        >
          {" "}
          <HStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
            <Text
              target="_blank"
              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              textAlign={"center"}
            >
              Get In Touch
            </Text>
          </HStack>
        </Box>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"} height={"100%"}>
        <ModalOverlay />
        <ModalContent bgColor={"#FBFCFD"}>
          <ModalBody>
            <>
              <Box p={0} rounded={"lg"} h={"700px"} w={"100%"}>
                <iframe
                  style={{ width: "100%", height: "100%", border: "none" }}
                  src="https://calendly.com/bhattaraianjesh123"
                ></iframe>
              </Box>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GetInTouch;
