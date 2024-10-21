import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  IconButton,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";
import { queryParamAtom } from "../store/atom";

const QueryParamInput = () => {
  const [queryParams, setQueryParams] = useRecoilState(queryParamAtom);

  // Handle adding new query parameter row
  const addQueryParam = () => {
    setQueryParams([...queryParams, { key: "", value: "" }]);
  };

  // Handle removing a query parameter row
  const removeQueryParam = (index) => {
    const updatedParams = queryParams.filter((_, i) => i !== index);
    setQueryParams(updatedParams);
  };

  // Handle changing the input values
  const handleChange = (index, field, value) => {
    const updatedParams = queryParams.map((param, i) => {
      if (i === index) {
        return { ...param, [field]: value }; // Create a new object for the updated parameter
      }
      return param; // Return the existing parameter for others
    });
    setQueryParams(updatedParams);
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg" width="100%">
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          Query Parameters
        </Text>
        {queryParams.map((param, index) => (
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
              onClick={() => removeQueryParam(index)}
              isDisabled={queryParams.length === 1}
            />
          </HStack>
        ))}
        <Button onClick={addQueryParam} leftIcon={<AddIcon />}>
          Add Parameter
        </Button>
      </VStack>
    </Box>
  );
};

export default QueryParamInput;
