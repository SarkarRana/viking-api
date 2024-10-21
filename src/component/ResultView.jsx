import {
  Box,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { resultAtom } from "../store/atom";
import ResponseView from "./ResponseView";
import Metadata from "./Metadata";

const ResultView = () => {
  const response = useRecoilValue(resultAtom);

  return (
    <Box
      width="90%"
      height="100%"
      mx="auto"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      overflowX="auto"
      bg="gray.50"
    >
      <Metadata />
      <Tabs variant="soft-rounded" colorScheme="teal" mt={5} defaultIndex={0}>
        <TabList>
          <Tab>Response</Tab>
          <Tab>Headers</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ResponseView property={response.data} />
          </TabPanel>
          <TabPanel>
            <ResponseView property={response.headers} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ResultView;
