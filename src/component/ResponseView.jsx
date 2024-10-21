import { Box, Code, Text, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { resultAtom } from "../store/atom";
import { useEffect } from "react";

const ResponseView = ({ property }) => {
  useEffect(() => {
    console.log("Received property:: ", property);
  }, [property]);
  return (
    <Code
      display="block"
      whiteSpace="pre-wrap"
      p={4}
      bg="gray.800"
      color="green.300"
      borderRadius="md"
      overflow="auto"
      height="100%"
    >
      {JSON.stringify(property, null, 2)}
    </Code>
  );
};

export default ResponseView;
