import { atom } from "nanostores";
import { CARD_DATA_ABSTRACT_PATH } from "../constants";
import { ICardAbstract } from "../types/cards";
import { ICardSpecific } from "../types/cards";
import { CARD_DATA_SPECIFIC_PATH } from "../constants";

export const individualCardData = atom<{
    bugs: number,
    uptime: number,
    lastTime: string,
    details: { [id: number]: { status: 'red' | 'green' | 'yellow', port: string } },
    loading: boolean,
}>({
    bugs: 0,
    uptime: 0,
    lastTime: '',
    details: {},
    loading: false,
});

export function setCardLoading(value: boolean) {
    individualCardData.set({ ...individualCardData.get(), loading: value });
}

export function getCardLoading() {
    return individualCardData.get().loading;
}

export const fetchCardAbstract = async () => {
    const response:ICardAbstract = await fetch(CARD_DATA_ABSTRACT_PATH, {
        method: 'GET',
        credentials: 'include',
    }).then((res) => res.json());
    return response;
}

export const fetchCardSpecific = async (id: number, lastTime: string): Promise<ICardSpecific> => {
    const response = await fetch(`${CARD_DATA_SPECIFIC_PATH}/${id}?lastTime=${lastTime}`, {
        method: 'GET',
        credentials: 'include',
    }).then((res) => res.json());
    return response;
}


export async function fetchAndSetCardsApps() {
    setCardLoading(true); // Ensure this function properly updates the loading state in your store

    try {
        const abstractData = await fetchCardAbstract();
        const { id: ids, lastTime, bugs, uptime } = abstractData;

        const specificDataPromises = ids.map(id => fetchCardSpecific(id, lastTime));
        const specificDataResults = await Promise.all(specificDataPromises);

        const details = ids.reduce<{ [id: number]: { status: 'red' | 'green' | 'yellow', port: string } }>((acc, id, index) => {
            acc[id] = {
                status: specificDataResults[index].status,
                port: specificDataResults[index].port,
            };
            return acc;
        }, {});        

        individualCardData.set({
            bugs,
            uptime,
            lastTime,
            details,
            loading: false,
        });
    } catch (error) {
        console.error('Failed to fetch and set card data:', error);
        setCardLoading(false); // Ensure to set loading to false in case of error
    }
}
