import { atom } from "recoil";

export const resultAtom = atom({
  key: "result", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const queryParamAtom = atom({
  key: "queryParam", // unique ID (with respect to other atoms/selectors)
  default: [{ key: "", value: "" }], // default value (aka initial value)
});

export const requestHeaderAtom = atom({
  key: "requestHeader", // unique ID (with respect to other atoms/selectors)
  default: [{ key: "", value: "" }], // default value (aka initial value)
});
