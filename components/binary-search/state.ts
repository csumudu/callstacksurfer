import { createContext, useContext, useState } from "react";
import { CtrlActions } from "../shared/play-controls";
import { BSState } from "./models";

export const getState = (): BSState => {
  const [source, updateSource] = useState<string>("");
  const [target, updateTarget] = useState<string>("");
  const [playerSelectedAction, updateAction] = useState<CtrlActions>();

  const setAction = (a: CtrlActions | undefined) => {
    updateAction(a);
  };
  const setTarget = (a: string) => updateTarget(a);
  const setSource = (e: string) => updateSource(e);

  return {
    source,
    target,
    playerSelectedAction,
    setAction,
    setTarget,
    setSource,
  };
};

export const BSContext = createContext<BSState | undefined>(undefined);

export const useBsState = () => {
  const state = useContext(BSContext);
  if (!state) {
    throw new Error("Should be used with in BSContext provider");
  }

  return state;
};
