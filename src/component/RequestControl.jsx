import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import QueryParamInput from "./QueryParamInput";
import RequestHeaderControl from "./RequestHeaderControl";

const RequestControl = () => {
  return (
    <Box
      width="100%"
      height="88%"
      mx="auto"
      ml={5}
      mr={5}
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      overflowX="auto"
      bg="gray.50"
    >
      <Tabs variant="soft-rounded" colorScheme="teal" defaultIndex={0}>
        <TabList>
          <Tab>Query parameter</Tab>
          <Tab>Headers</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <QueryParamInput />
          </TabPanel>
          <TabPanel>
            <RequestHeaderControl />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RequestControl;
