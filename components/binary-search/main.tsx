"use client";

import { useState } from "react";
import PlayControls from "../shared/play-controls";
import SourceList from "./source-list";
import { useBsState } from "./state";
import { Step } from "./hooks/use-binary";

const BSMainContainer = () => {
  const { source, target, playerSelectedAction, setAction } = useBsState();
  const [stp, setStp] = useState<Array<Step>>([]);

  return (
    <div className="bg-slate-900 p-3 mt-3 rounded-lg">
      <div className="text-slate-300">Source Collection:</div>
      <SourceList
        source={source}
        target={target}
        action={playerSelectedAction}
        instructionsSet={setStp}
      />

      <div className="text-slate-300 pt-3">Search Value:</div>
      <div className="flex items-stretch gap-5 mb-3">
        <div className="bg-pink-600 w-20 overflow-hidden h-14 flex justify-center items-center text-white rounded-md">
          {target}
        </div>

        <div className="border-2 border-slate-600 flex justify-center rounded-md relative">
          <PlayControls
            controlAction={setAction}
            selected={playerSelectedAction}
          />
        </div>
      </div>

      {stp.map((s) => (
        <div className="border-2 p-3 rounded-md mb-2 border-pink-600">
          <div className="text-white font-bold text-sm">{s.id}</div>
          <div className="flex flex-col gap-2">
            {s.parameters.map((p) => (
              <div className="bg-pink-900 text-pink-200 italic font-thin text-sm p-1 px-3 rounded">{p}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BSMainContainer;
