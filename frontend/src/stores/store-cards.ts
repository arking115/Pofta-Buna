import { atom } from "nanostores";
import { CARDS_FETCH_API } from "../constants";
import { ICardApi } from "../types/cards";

export const cardStore = atom({
    cards: [] as ICardApi[],
    total: 0,
    loading: false,
})

// Astea sunt datele pentru display de carduri
// endpoints
// name
// status
// base

// Astea sunt datele pentru display a unui card individual
// ICardApi


export function setCardsLoading(value: boolean) {
    cardStore.set({ ...cardStore.get(), loading: value });
}

export const fetchCards = async () => {
    const response = await fetch(CARDS_FETCH_API, {
        method: 'GET',
        credentials: 'include',
    }).then((res) => res.json());
    return response;
}

export async function fetchAndSetCards() {
    setCardsLoading(true);

    const data = await fetchCards();

    cardStore.set({
        ...cardStore.get(),
        cards: data.data,
        total: data.total,
    });

    setCardsLoading(false);
}