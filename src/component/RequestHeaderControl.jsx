import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { requestHeaderAtom } from "../store/atom";
import { useRecoilState } from "recoil";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

const RequestHeaderControl = () => {
  const [requestHeaders, setRequestHeaders] = useRecoilState(requestHeaderAtom);

  // Handle adding new query parameter row
  const addHeader = () => {
    setRequestHeaders([...requestHeaders, { key: "", value: "" }]);
  };

  // Handle removing a query parameter row
  const removeHeader = (index) => {
    const updatedParams = requestHeaders.filter((_, i) => i !== index);
    setRequestHeaders(updatedParams);
  };

  // Handle changing the input values
  const handleChange = (index, field, value) => {
    const updatedHeaders = requestHeaders.map((param, i) => {
      if (i === index) {
        return { ...param, [field]: value }; // Create a new object for the updated parameter
      }
      return param; // Return the existing parameter for others
    });
    setRequestHeaders(updatedHeaders);
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg" width="100%">
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          Request Headers
        </Text>
        {requestHeaders.map((param, index) => (
          <HStack key={index} spacing={4}>
            <Input
              placeholder="Key"
              value={param.key}
              onChange={(e) => handleChange(index, "key", e.target.value)}
            />
            <Input
              placeholder="Value"
              value={param.value}
              onChange={(e) => handleChange(index, "value", e.target.value)}
            />
            <IconButton
              aria-label="Remove parameter"
              icon={<DeleteIcon />}
              onClick={() => removeHeader(index)}
              isDisabled={requestHeaders.length === 1}
            />
          </HStack>
        ))}
        <Button onClick={addHeader} leftIcon={<AddIcon />}>
          Add Header
        </Button>
      </VStack>
    </Box>
  );
};

export default RequestHeaderControl;
