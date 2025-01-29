import { useState } from "react";
import { Item } from "../models";
import { useBsState } from "../state";

export interface Step {
  id: string;
  parameters: Array<string>;
}

export const useBinary = (): [
  number | undefined,
  Array<Step>,
  Array<Item>,
  (lst: Array<Item>) => void,
] => {
  const [updatedList, setUpdatedList] = useState<Array<Item>>([]);
  const [stepNarration, setStepNarration] = useState<Array<Step>>([]);
  const [foundIndex, setFoundIndex] = useState<number>();
  const { target } = useBsState();

  const setBoundaries = (
    prop: "isStart" | "isEnd" | "isMiddle",
    lst: Array<Item>,
    newIndex: number
  ) => {
    if (newIndex >= 0) {
      lst[newIndex][prop] = true;
    }
  };

  const updateGrid = (
    lst: Array<Item>,
    start: number,
    end: number,
    middle: number,
    iteration: number,
    step: Step
  ) => {
    setTimeout(() => {
      lst.forEach((itm, i) => {
        itm.isEnd = false;
        itm.isStart = false;
        itm.isMiddle = false;
        itm.isActive = i >= start && i <= end;
      });

      setBoundaries("isStart", lst, start);
      setBoundaries("isEnd", lst, end);
      setBoundaries("isMiddle", lst, middle);

      setUpdatedList([...lst]);
      setStepNarration((s) => [...s, step]);
    }, 1000 * iteration);
  };

  const setFound = (lst: Array<Item>, index: number, iterCount: number) => {
    setTimeout(() => {
      if (index >= 0) {
        lst.forEach((itm, i) => {
          itm.isEnd = false;
          itm.isStart = false;
        });
        lst[index].isNeedle = true;
        setUpdatedList([...lst]);
        setFoundIndex(index);
      }
    }, 1000 * iterCount);
  };

  const getInstructions = (
    step: number,
    start: number,
    end: number,
    mid: number,
    value: number,
    target: number
  ) => {
    const isFound = value == target;
    const isTargetIsGreater = target > value;

    const stp: Step = {
      id: "STEP : " + step,
      parameters: [
        `Search Iteration ${step}`,
        `Start Index Set To : ${start}`,
        `End Index Set To : ${end}`,
        `Middle Index Set To : ${mid}`,
        `Is Searched value ${target} found in Mid Index position(${mid}) Value(${value}): ${isFound ? "YES" : "NO"}`,
        isFound ? `Stop Iteration` : "",

        !isFound
          ? isTargetIsGreater
            ? `Searched value ${target} is Greater than the Mid index(${mid}) Value(${value})`
            : `Searched value ${target} is Less than the Mid index(${mid}) Value(${value})`
          : "",

        !isFound && isTargetIsGreater
          ? `Adjust the Start Index to ${mid + 1} and ignore Indexes Less Than ${mid}`
          : `Adjust the End Index to ${mid - 1} and ignore Indexes Greater Than ${mid}`,
      ].filter((x) => !!x),
    };

    return stp;
  };

  const search = (lst: Array<Item>) => {
    let start = 0;
    let end = lst.length - 1;
    let found = -1;
    let iterCount = 1;

    while (start <= end) {
      iterCount += 1;

      const mid = Math.floor((start + end) / 2);
      const item = lst[mid];
      const t = +target;

      updateGrid(
        lst,
        start,
        end,
        mid,
        iterCount,
        getInstructions(iterCount - 1, start, end, mid, item.value, t)
      );

      if (item.value == t) {
        found = mid;
        break;
      }

      if (t < item.value) {
        end = mid - 1;
      } else if (t > item.value) {
        start = mid + 1;
      }
    }
    setFound(lst, found, iterCount);
  };

  return [foundIndex, stepNarration, updatedList, search];
};
