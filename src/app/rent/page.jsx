"use client";

// import { fetchUsers } from "./lib/data";

import Navbar from "@/components/navbar/Navbar";
import { Text, Center } from "@chakra-ui/react";

import { useState } from "react";
const Rent = () => {
  const [rent, setRent] = useState(true);

  return (
    <>
      <Navbar setRent={setRent} rent={rent} />
 
   

       

    </>
  );
};

export default Rent;
