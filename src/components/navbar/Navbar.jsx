import { fetchUsers } from "@/app/lib/data";
import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const links = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About us",
      link: "/aboutUs",
    },
    {
      name: "Properties",
      link: "/properties",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "FAQ",
      link: "/FAQ",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

const fetchUser = await fetchUsers();
 
  return (
    <>
      <HStack
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        mt={"25px"}
      >

      {/* {console.log(fetchUser)} */}
        <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
          <Box
            bg={"white"}
            rounded={"xl"}
            w={["100%", "100%", "100%", "95%", "90%"]}
            h={"75px"}
            px={"14"}
           
            borderRadius={"15px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"space-between"}
              align={"center"}
              gap={["20px", "30px", "40px", "50px", "50px"]}
              fontFamily={"Raleway"}
              px={["2", "2", "5", "5", "50px"]}
            >
              <Box
                w={"55px"}
                h={"55px"}
                borderRadius={"100%"}
                bgColor={"gray"}
              />
              <Spacer />
              {links.map(({ name, link }) => (
                <Link href={link} key={name}>
                  <Text
                    transition={"all 0.3s ease-in-out"}
                    cursor={"pointer"}
                    _hover={{
                      transform: "scale(1.2)",
                    }}
                    whiteSpace={"nowrap"}
                    fontSize={["12px", "12px", "14px", "16px", "16px"]}
                    fontWeight={600}
                  >
                    {name}
                  </Text>{" "}
                </Link>
              ))}
            </HStack>

            
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
