import { atom } from "nanostores";

const id = atom<string>("");

export const setId = (value: string) => {
    id.set(value);
};

export const getId = () => {
    return id.get();
};