import { atom } from "nanostores";
import { CARD_DATA_PATH } from "../constants";

export const dataStore = atom({ loading: false, data: null });

export const setCardsLoading = (value: boolean) => {
    dataStore.set({ ...dataStore.get(), loading: value });
}

export const fetchDataByIdAndSetInStore = async (id: string) => {
    setCardsLoading(true);
    const url = CARD_DATA_PATH.replace("${id}", id);
    const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
    }).then((res) => res.json());
    dataStore.set({ ...dataStore.get(), data: response, loading: false });
    setCardsLoading(false);
};

export const getData = () => {
    return dataStore.get();
}