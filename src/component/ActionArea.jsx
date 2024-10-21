import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { queryParamAtom, requestHeaderAtom, resultAtom } from "../store/atom";
import api from "../util/ApiClient";
import RequestControl from "./RequestControl";

const ActionArea = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("https://");
  const [result, setResult] = useRecoilState(resultAtom);
  const [isLoading, setIsLoading] = useState(false);
  const queryParams = useRecoilValue(queryParamAtom);
  const headers = useRecoilValue(requestHeaderAtom);

  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const queryObject = queryParams.reduce((acc, param) => {
        if (param.key && param.value) {
          acc[param.key] = param.value;
        }
        return acc;
      }, {});

      const headerObject = headers.reduce((acc, param) => {
        if (param.key && param.value) {
          acc[param.key] = param.value;
        }
        return acc;
      }, {});
      const data = await api.request({
        method,
        url,
        params: queryObject,
        headers: headerObject,
      });
      console.log("data: ", data);
      setResult(data);
    } catch (error) {
      console.log("Error while calling api");
    }
    setIsLoading(false);
  };

  return (
    <Box>
      <Flex color="black" gap={2} height="10vh" marginLeft={5}>
        <Select
          size="lg"
          width="10vw"
          defaultValue={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </Select>

        <Input
          size="lg"
          width="50vw"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <Button
          isLoading={isLoading}
          colorScheme="teal"
          variant="solid"
          size="lg"
          type="submit"
          onClick={sendRequest}
        >
          Send
        </Button>
      </Flex>
      <RequestControl />
    </Box>
  );
};

export default ActionArea;
