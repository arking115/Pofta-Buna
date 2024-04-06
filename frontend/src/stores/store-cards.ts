import { atom } from "nanostores";
import { CARDS_FETCH_API } from "../constants";
import { IDashboardCardApi } from "../types/cards";

export const cardsStore = atom({
    cards: [] as IDashboardCardApi[],
    total: 0,
    loading: false,
});

export function setCardsLoading(value: boolean) {
    cardsStore.set({ ...cardsStore.get(), loading: value });
}

export function getCardsLoading() {
    return cardsStore.get().loading;
}

export const fetchCards = async () => {
    const response = await fetch(CARDS_FETCH_API, {
        method: 'GET',
        credentials: 'include',
    }).then((res) => res.json());
    return response;
}

export async function fetchAndSetCardsDashboard() {
    setCardsLoading(true);

    const response = await fetchCards();
    const { cards } = response;

    //count the cards set it to total
    const total = cards.length;

    cardsStore.set({
        ...cardsStore.get(),
        cards,
        total,
    });

    setCardsLoading(false);
}