import { Stat, StatGroup, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { resultAtom } from "../store/atom";

const Metadata = () => {
  const response = useRecoilValue(resultAtom);

  return (
    <StatGroup ml="5">
      <Stat>
        <StatLabel>Status</StatLabel>
        <StatNumber>
          <Text color="green">
            {response && response.status ? response.status : "NA"}
          </Text>
        </StatNumber>
      </Stat>

      <Stat>
        <StatLabel>Time</StatLabel>
        <StatNumber>
          <Text color="blue.700">
            {response && response.config
              ? `${response.config.metadata.timeTaken} ms`
              : "NA"}
          </Text>
        </StatNumber>
      </Stat>
    </StatGroup>
  );
};

export default Metadata;
