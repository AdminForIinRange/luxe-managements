"use client";

import { HStack, Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  router.push("/airbnb");
};

export default Home;

