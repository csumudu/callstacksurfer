"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Logo from "./logo";

export default function Header({ slug }: any) {
  const segment = useSelectedLayoutSegment();

  console.log("==>", segment);

  return (
    <header
      className="fixed  z-30 w-full bg-white/90  shadow-lg
        shadow-black/[0.03] "
    >
      <div
        className="relative 
        container
        m-auto 
        sm:px-6 
        flex 
        h-14 
        items-center
        justify-between 
        gap-3  
        px-3       
        backdrop-blur-sm
        before:pointer-events-none 
        before:absolute 
        before:inset-0 
        before:rounded-[inherit]         
        before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box]
        before:[mask-composite:exclude_!important] 
        before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
      >
        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        <ul className="flex 2 items-center justify-end gap-3">
          <li className="py-1 px-4 rounded hover:bg-slate-200">
            <Link
              href="/"
              className={`${
                segment == "(default)" || segment == "(articles)"
                  ? "text-gray-900 font-bold"
                  : "text-gray-500"
              } hover:text-gray-600`}
            >
              Articles
            </Link>
          </li>
          <li className="py-1 px-4 rounded hover:bg-slate-200">
            <Link
              href="/tools"
              className={`${
                segment == "(tools)"
                  ? "text-gray-900 font-bold"
                  : "text-gray-500"
              } hover:text-gray-600`}
            >
              Tools
            </Link>
          </li>
          <li className="py-1 px-4 rounded hover:bg-slate-200">
            <a
              href="https://algo.callstacksurfer.com/"
              target="_blank"
              className="text-gray-500 hover:text-gray-600"
            >
              Algorithms
            </a>
          </li>
          <li className="py-1 px-4 rounded hover:bg-slate-200">
            <Link
              href="/profile"
              className={`${
                segment == "(profile)"
                  ? "text-gray-900 font-bold"
                  : "text-gray-500"
              } hover:text-gray-600`}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
