import { CssResultEvent } from "@/models/data.models";
import { PropsWithChildren } from "react";

const Result = ({
  res,
}: PropsWithChildren<{ res?: Array<CssResultEvent> }>) => {
  return (
    <div>
      <h3>Result: Order by Specificity</h3>
      {res?.length ? (
        res.map((r, i) => (
          <div className="flex gap-2 pb-3" key={r.id}>
            <div className="border border-slate-300 rounded-md  py-1 px-3">
              {i + 1}
            </div>
            <div className="border border-slate-300 rounded-md  py-1 px-3">
              {r.value}
            </div>
            <div className="flex-1 border border-slate-300 rounded-md  py-1 px-3">
              {r.selector}
            </div>
          </div>
        ))
      ) : (
        <div className="p-3 mb-3 rounded-md text-sm bg-slate-200 ">
          No Result. Please provide css selectors
        </div>
      )}
    </div>
  );
};

export default Result;
