import Link from "next/link";

const ToolsPage = () => {
  return (
    <div className="p-5 grid grid-cols-3 ">
      <Link
        href={"/tools/css"}
        className=" motion-preset-slide-down-sm rounded-lg relative drop-shadow-lg bg-css-tool block h-96 bg-cover"
      >
        <div className="bg-slate-900 absolute rounded-lg shadow-2xl bottom-0 left-0 right-0 h-20 z-10 hover:h-full transition-all hover:bg-opacity-90 text-slate-400 flex items-center p-5 justify-center hover:text-slate-100">
          Css Specificity Calculator
        </div>
        <div className="bg-slate-900 rounded-lg h-full opacity-20"></div>
      </Link>
    </div>
  );
};

export default ToolsPage;
