import { CSSFragment } from "@/models/data.models";
import { PropsWithChildren } from "react";

const StyleFragment = ({
  fragment: { fragments = [], name },
}: PropsWithChildren<{ fragment: CSSFragment }>) => {
  return (
    <div className="w-full border-2 rounded-lg p-3">
      <div className="text-slate-400">{name}</div>
      <div className="p-3 flex flex-col gap-2">
      {fragments.map((f) => (
        <div className="rounded-md px-3 py-1 bg-slate-600 text-slate-100 text-sm" key={f}>{f}</div>
      ))}
      </div>
    </div>
  );
};

export default StyleFragment;
