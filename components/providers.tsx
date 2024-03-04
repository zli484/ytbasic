"use client";

import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
