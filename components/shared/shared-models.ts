import { CtrlActions } from "./play-controls";

export interface SortState {
  source: string;
  playerSelectedAction: CtrlActions | undefined;

  setAction: (a: CtrlActions | undefined) => void;
  setSource: (a: string) => void;
}
