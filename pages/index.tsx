import Head from "next/head";
import Image from "next/image";
import { Box, Flex, Grid, GridItem,Input,HStack,Text } from "@chakra-ui/react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import JsonEditor from "../components/JsonEditor";
import ProgramIdInput from "../components/ProgramIdInput";

import { useState } from "react";
import OnChainData from "../components/OnChainData";
import FunctionStack from "../components/FunctionStack";

export default function Home() {

  return (
    <Box>
      <ProgramIdInput />
      <JsonEditor />
    </Box>
    
  );

}
