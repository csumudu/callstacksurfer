import { CssResultEvent } from "@/models/data.models";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CssCalculator from "./ccs-calculator";
import Result from "./result";

const WithResults = () => {
  const [selectors, setSelectors] = useState([{ id: 1, total: 0 }]);
  const [resCol, setResCol] = useState<Array<CssResultEvent>>([]);

  const addSelector = () => {
    setSelectors((s) => [...s, { id: s.length + 1, total: 0 }]);
  };

  const closeHandler = (selector: { id: number }) => {
    setResCol((col) => col.filter((c) => c.id != selector.id));
    setSelectors((all) => all.filter((s) => s.id != selector.id));
  };

  const changeHandler = (e: CssResultEvent) => {
    setResCol((col) => {
      const excluded = col.filter((c) => c.id != e.id);
      const res = [...excluded, e].sort((a, b) => +b.value - +a.value);
      return res;
    });
  };

  return (
    <>
      <div>
        <Result res={resCol} />
      </div>
      <div>
        <div className="flex justify-start">
          <div
            onClick={addSelector}
            className="border border-slate-400 px-6 cursor-pointer rounded-md transition-colors hover:bg-slate-200"
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        {selectors.map((s, i) => (
          <div key={s.id} className="py-3">
            <CssCalculator
              id={s.id}
              change={(e) => changeHandler(e)}
              showClose={i != 0}
              close={() => closeHandler(s)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default WithResults;
