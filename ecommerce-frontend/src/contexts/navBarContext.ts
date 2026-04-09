import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";
type navBarContext = {
  navBarToggle: boolean;
  setNavBarToggle: Dispatch<SetStateAction<boolean>>;
};
export const navBarContext = createContext<navBarContext | undefined>(
  undefined,
);
