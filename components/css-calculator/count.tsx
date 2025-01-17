import { PropsWithChildren, useEffect, useState } from "react";
import StyleFragment from "./style-fragnebt";
import { CSSFragment } from "@/models/data.models";

const CssCount = ({
  fragments,
}: PropsWithChildren<{ fragments: string | Array<CSSFragment> }>) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      (fragments as Array<CSSFragment>).reduce((acc, c) => {
        acc += c.count;
        return acc;
      }, 0)
    );
  }, [fragments]);

  return (
    <div className="flex-1 flex flex-col justify-start items-center ">
      <div className="mb-3 h-40 text-6xl w-full border-2 rounded-lg bg-slate-800 text-stone-300 flex justify-center items-center">
        {total}
      </div>
      <div className="w-full flex flex-col gap-3">
        {(fragments as Array<CSSFragment>).map((f) => (
          <StyleFragment key={f.name} fragment={f} />
        ))}
      </div>
    </div>
  );
};

export default CssCount;
