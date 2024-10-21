import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import ActionArea from "./component/ActionArea";
import { Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import ResponseView from "./component/ResponseView";
import ResultView from "./component/ResultView";

const App = () => {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  const onMethodChange = (e) => {
    console.log("Method changed to :: ", e.target.value);
  };

  return (
    <main className="container">
      <Heading color="teal.400" margin="5">
        Viking API
      </Heading>
      <Divider orientation="horizontal" marginBottom={5} />
      <SimpleGrid columns={2} spacing={5} height="85vh">
        <ActionArea />
        <ResultView />
      </SimpleGrid>
    </main>
  );
};

export default App;
