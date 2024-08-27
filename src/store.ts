import { atom } from "jotai";

const localStorageKey = "isCollapsed";

export const isCollapsedAtom = atom(
  // Начальное значение
  typeof window !== "undefined" ? JSON.parse(localStorage.getItem(localStorageKey) || "false") : false,
  // Обновляемое значение
  (get, set, newValue: boolean) => {
    set(isCollapsedAtom, newValue);
    localStorage.setItem(localStorageKey, JSON.stringify(newValue));
  }
);
