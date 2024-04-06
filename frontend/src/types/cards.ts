export type ICardApi = {
    cardId: number;
    uID: string;
    name: string;
    refreshRate: number;
    status: 'red' | 'green' | 'yellow';
};

export type ICardsApi = {
    