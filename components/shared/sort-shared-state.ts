
import { createContext, useContext, useState } from "react";
import { SortState } from "./shared-models";
import { CtrlActions } from "./play-controls";

export const getSortState = (): SortState => {
  const [source, updateSource] = useState<string>("");
  const [playerSelectedAction, updateAction] = useState<CtrlActions>();

  const setAction = (a: CtrlActions | undefined) => {
    updateAction(a);
  };
  const setSource = (e: string) => updateSource(e);

  return {
    source,
    playerSelectedAction,
    setAction,
    setSource,
  };
};

export const SortContext = createContext<SortState | undefined>(undefined);

export const useSortState = () => {
  const state = useContext(SortContext);
  if (!state) {
    throw new Error("Should be used with in SortContext provider");
  }

  return state;
};
