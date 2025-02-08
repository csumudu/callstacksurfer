import { FC, PropsWithChildren } from "react";

const AlgorithmsLayout:FC<PropsWithChildren> = ({children}) => {
    return ( 
        <div className="bg-slate-500">{children}</div>
     );
}
 
export default AlgorithmsLayout;