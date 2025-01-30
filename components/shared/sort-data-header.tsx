import { FC, PropsWithChildren } from "react";

const SortDataHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-between items-center bg-slate-900 text-slate-200 p-5 rounded-t-lg">
      <div>{children}</div>
    </div>
  );
};

export default SortDataHeader;
