import { Signal } from "@preact/signals-react";
import { CtrlActions } from "../shared/play-controls";

export interface Item {
  id: string;
  value: number;
  isActive: boolean;
  isStart: boolean;
  isEnd: boolean;
  isNeedle: boolean;
  isMiddle: boolean;
}

export interface SearchStep {
  rowData: Array<Item>;
}

export interface BSState {
  source: string;
  target: string;
  playerSelectedAction: CtrlActions | undefined;

  setAction: (a: CtrlActions | undefined) => void;
  setTarget: (a: string) => void;
  setSource: (a: string) => void;
}
