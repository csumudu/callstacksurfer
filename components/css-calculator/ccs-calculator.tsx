"use client";

import {
  CSSFragment,
  CssResultEvent,
  FragName,
  priorityKeys,
} from "@/models/data.models";
import { PropsWithChildren, useEffect, useReducer } from "react";
import CssCount from "./count";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ComponentState = {
  [keys in priorityKeys]: string | Array<CSSFragment>;
};

const initState: ComponentState = {
  total: "0000",
  selector: "",
  pOne: [
    {
      name: FragName.InLineStyle,
      count: 0,
      fragments: [],
    },
  ],
  pTwo: [
    {
      name: FragName.IDs,
      count: 0,
      fragments: [],
    },
  ],
  pThree: [
    {
      name: FragName.Classes,
      count: 0,
      fragments: [],
    },
    {
      name: FragName.Attributes,
      count: 0,
      fragments: [],
    },
    {
      name: FragName.PseudoClasses,
      count: 0,
      fragments: [],
    },
  ],
  pFour: [
    {
      name: FragName.Tags,
      count: 0,
      fragments: [],
    },
    {
      name: FragName.PseudoElements,
      count: 0,
      fragments: [],
    },
  ],
};

const extract = (cssSelector: string) => {
  const idRegex = /#([\w-]+)/g;
  const classRegex = /\.([\w-]+)/g;
  const pseudoElementRegex = /::([\w-]+)/g;
  const tagsRegex =
    /(?:^|\s|>|\+|~|,)([a-zA-Z][a-zA-Z0-9-]*)(?=\s|#|\.|:|>|~|\+|,|$)/g;
  const pseudoClassesRegex = /:([a-zA-Z-]+)/g;
  const attributesRegex = /\[(\w+)(?:([*^$|~]?=)["']?([^"'\]]*)["']?)?\]/g;

  const pseudoClasses = [];
  const ids = [];
  const classes = [];
  const attributes = [];
  const pseudoElements = [];
  const tags = [];

  let match;

  while ((match = idRegex.exec(cssSelector)) !== null) {
    ids.push(`#${match[1]}`);
  }
  while ((match = classRegex.exec(cssSelector)) !== null) {
    classes.push(`.${match[1]}`);
  }
  while ((match = pseudoElementRegex.exec(cssSelector)) !== null) {
    pseudoElements.push(`::${match[1]}`);
  }
  while ((match = tagsRegex.exec(cssSelector)) !== null) {
    tags.push(`${match[1]}`);
  }
  while ((match = pseudoClassesRegex.exec(cssSelector)) !== null) {
    pseudoClasses.push(`:${match[1]}`);
  }
  while ((match = attributesRegex.exec(cssSelector)) !== null) {
    attributes.push(`[${match[1]}${match[2]}${match[3]}]`);
  }

  return {
    total: `0${ids.length}${classes.length + attributes.length + pseudoClasses.length}${tags.length + pseudoElements.length}`,
    ids,
    classes,
    pseudoElements,
    pseudoClasses,
    tags,
    attributes,
  };
};

const getFragments = (
  selector: string,
  state: ComponentState
): ComponentState => {
  const {
    ids,
    classes,
    pseudoElements,
    tags,
    pseudoClasses,
    attributes,
    total,
  } = extract(selector);

  const newState = { ...state, selector, total };

  newState.pTwo = [
    {
      name: FragName.IDs,
      count: ids.length || 0,
      fragments: ids,
    },
  ];

  newState.pThree = [
    {
      name: FragName.Classes,
      count: classes.length || 0,
      fragments: classes,
    },
    {
      name: FragName.Attributes,
      count: attributes?.length || 0,
      fragments: attributes,
    },
    {
      name: FragName.PseudoClasses,
      count: pseudoClasses?.length || 0,
      fragments: pseudoClasses,
    },
  ];

  newState.pFour = [
    {
      name: FragName.Tags,
      count: tags.length || 0,
      fragments: tags,
    },
    {
      name: FragName.PseudoElements,
      count: pseudoElements?.length || 0,
      fragments: pseudoElements,
    },
  ];

  return newState;
};

const CssCalculator = ({
  id,
  showClose,
  change,
  close,
}: PropsWithChildren<{
  id: number;
  showClose: boolean;
  close: () => void;
  change: ({ selector, value }: CssResultEvent) => void;
}>) => {
  const [state, dispatch] = useReducer((state: ComponentState, act: any) => {
    switch (act.type) {
      case "selector-changed": {
        return getFragments(act.value, state);
      }
      default:
        return state;
    }
  }, initState);

  useEffect(() => {
    change({
      id,
      selector: state.selector as string,
      value: state.total as string,
    });
  }, [state]);

  return (
    <div className="bg-slate-900 rounded-lg p-5">
      {showClose && (
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faClose}
            className="cursor-pointer"
            onClick={close}
          />
        </div>
      )}
      <label className="text-slate-400 text-sm">
        Write your CSS selector here
      </label>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "selector-changed", value: e.target.value })
        }
        className="w-full rounded-lg border-2 border-gray-400  bg-slate-700 text-slate-300 text-xl"
      ></input>

      <div className="w-full flex gap-5 py-6">
        <CssCount fragments={state.pOne}></CssCount>
        <CssCount fragments={state.pTwo}></CssCount>
        <CssCount fragments={state.pThree}></CssCount>
        <CssCount fragments={state.pFour}></CssCount>
      </div>
    </div>
  );
};

export default CssCalculator;
