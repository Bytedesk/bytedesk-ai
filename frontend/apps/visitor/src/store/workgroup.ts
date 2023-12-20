import { getWorkGroup } from "src/apis/workgroup";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface WorkGroupState {
  //
  currentWorkGroup: WORKGROUP.WorkGroup;
  //
  getWorkGroup: (wid: string) => void;
  // 清空所有信息
  deleteEverything: () => void;
}

export const useWorkGroupStore = create<WorkGroupState>()(
  devtools(
    persist(
      immer((set, get) => ({
        //
        currentWorkGroup: {
          id: 0,
          wid: "",
          nickname: "",
          avatar: "",
          description: "",
        },
        //
        getWorkGroup: async (wid) => {
          // 
          const response = await getWorkGroup(wid);
          console.log("getWorkGroup", response);
          if (response.data.status_code === 200) {
            set({
              currentWorkGroup: response.data.data,
            });
          } else {
            console.log("error");
          }
        },
        //
        deleteEverything: () => set({}, true),
      })),
      {
        name: "WORKGROUP_STORE",
      }
    )
  )
);
