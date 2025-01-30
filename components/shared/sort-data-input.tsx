"use client";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRandom } from "../binary-search/hooks/use_random";
import { useSortState } from "./sort-shared-state";
import PlayControls from "./play-controls";

const SortDataInput = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<{
    source: string;
    listSize: string;
  }>();

  const [colStr, _, regenerate, setSize] = useRandom(100);
  const { setSource, setAction, playerSelectedAction } = useSortState();

  useEffect(() => {
    setValue("source", colStr);

    submitHandler({ source: colStr });
  }, [colStr]);

  const submitHandler: SubmitHandler<{
    source: string | undefined;
  }> = ({ source }) => {
    setSource(source || "");
  };
  return (
    <div className="bg-slate-800 px-5 py-3 pb-5 rounded-b-lg">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="pb-2">
          <label className="text-slate-400 text-sm">
            Enter unsorted array here
          </label>
          <input
            type="text"
            {...register("source", { required: true, value: colStr })}
            className="w-full rounded-lg border-2 border-gray-400  bg-slate-700 text-slate-300"
          ></input>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end gap-3">
            
            <input
              type="text"
              {...register("listSize", {
                required: true,
                value: "100",
                onChange: (e) => {
                  setSize(+e.target.value);
                },
              })}
              className="w-20 rounded-lg border-2 border-gray-700  bg-slate-800 text-slate-300"
            ></input>
            <button
              type="button"
              onClick={regenerate}
              className="bg-slate-900 text-slate-400 border-2 border-slate-700 focus:outline-none hover:bg-slate-950 focus:ring-2 focus:ring-slate-600 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Generate
            </button>

            <div className="bg-slate-900  h-12 flex justify-center items-center rounded-lg border-2 border-slate-700">
              <PlayControls
                controlAction={setAction}
                selected={playerSelectedAction}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SortDataInput;
