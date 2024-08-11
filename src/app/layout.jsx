import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";
import "aos";
import AOS from "aos";
import "aos/dist/aos.css";
const inter = Inter({ subsets: ["latin"] });
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: {
    default: "Luxe Managements",
    template: "%s | Next.js 14",
  },
  description: "Top Airbnb Management Company in Adelaide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="RootLayout">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}

// style={{ backgroundColor: "#0E0E0E" }}
{
  /* <Box mt={"100px"}>
        <HStack justify={"center"} w={"100%"} h={"100%"} align={"center"}>
          <HStack
            bgImage={Frame}
            justify={"center"}
            w={"100%"}
            h={"100%"}
            align={"center"}
          >
            <Image src={Frame} style={{ transform: "scale(1.1)" }} />
            <Image
              src={Stars}
              style={{ position: "absolute", padding: "50px" }}
            />
          </HStack>
        </HStack>
      </Box> */
}
