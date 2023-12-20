import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface RobotState {
  //
  messages: MESSAGE.Message[];
  //
  getHistoryMessage: () => void;
  // 清空所有信息
  deleteEverything: () => void;
}

export const useRobotStore = create<RobotState>()(
  devtools(
    persist(
      immer((set, get) => ({
        //
        messages: [],
        //
        getHistoryMessage() {},
        //
        deleteEverything: () => set({}, true),
      })),
      {
        name: "ROBOT_STORE",
      }
    )
  )
);
