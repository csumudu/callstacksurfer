import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FC, useEffect, useReducer } from "react";
import { twMerge } from "tailwind-merge";

export enum CtrlActions {
  NO_ACT = "NO_ACT",
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  RESET = "RESET",
}

const InitMenu = [
  {
    action: CtrlActions.PLAY,
    icon: faPlay,
    isActive: true,
  },
  {
    action: CtrlActions.PAUSE,
    icon: faPause,
    isActive: false,
  },
  {
    action: CtrlActions.RESET,
    icon: faRepeat,
    isActive: false,
  },
];

const PlayControls: FC<{
  selected: CtrlActions | undefined;
  controlAction: (type: CtrlActions) => void;
}> = ({ controlAction, selected }) => {
  const [state, dispatch] = useReducer(
    (state, act) => {
      switch (act.type) {
        case "act-changed": {
          const type = act.payload;
          if (type) {
            
            return state.map((ac) => {
              ac.isActive = ac.action != type;
              return ac;
            });
          } else {
            return [...InitMenu];
          }
        }
        default: {
          return state;
        }
      }
    },
    [...InitMenu]
  );

  useEffect(() => {
    dispatch({ type: "act-changed", payload: selected });
  }, [selected]);

  return (
    <div className="flex gap-5 justify-center items-center px-10">
      {state.map((a) => {
        const isPlayAnimate =
          !selected && a.action == CtrlActions.PLAY
            ? "motion-preset-pulse"
            : "";

        const isActive = a.isActive
          ? "text-pink-600 text-xl"
          : "text-slate-800";

        return (
          <FontAwesomeIcon
            key={a.action}
            icon={a.icon}
            className={twMerge("cursor-pointer ", isPlayAnimate, isActive)}
            onClick={() => controlAction(a.action)}
          />
        );
      })}
    </div>
  );
};

export default PlayControls;
