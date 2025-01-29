"use client";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRandom } from "./hooks/use_random";
import { useBsState } from "./state";

const BSInput = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<{
    source: string;
    target: string;
  }>();

  const [colStr, targetStr, regenerate] = useRandom(100);
  const { setSource, setTarget } = useBsState();

  useEffect(() => {
    setValue("source", colStr);
    if (targetStr) {
      setValue("target", targetStr);
    }
    submitHandler({ source: colStr, target: targetStr });
  }, [colStr, targetStr]);

  useEffect(() => {
    const subscription = watch((value) => {
      submitHandler({ source: value.source || "", target: value.target });
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const submitHandler: SubmitHandler<{
    source: string | undefined;
    target: string | undefined;
  }> = ({ source, target }) => {
    setSource(source || "");
    setTarget(target || "");
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
          <label className="text-slate-400 text-sm">
            Enter Item Value to be searched
          </label>
          <div className="flex justify-start gap-3 ">
            <input
              type="text"
              {...register("target", {
                required: true,
                value: targetStr,
              })}
              className="w-1/2 rounded-lg border-2 border-gray-400  bg-slate-700 text-slate-300 font-light"
            ></input>
            <button
              type="button"
              onClick={regenerate}
              className="bg-transparent text-slate-400 border-2 border-slate-500 focus:outline-none hover:bg-slate-950 focus:ring-2 focus:ring-slate-600 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Generate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BSInput;
