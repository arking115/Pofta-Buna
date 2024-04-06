export type IDashboardCardApi = {
    cardId: number;
    name: string;
    refreshRate: number;
    statusApplication: 'red' | 'green' | 'yellow';
    base: string;
    endpoints: number;
};

export type ICardAbstract = {
    id: number[];
    bugs: number;
    uptime: number;
    lastTime: string;
}

export type ICardSpecific = {
    status: 'red' | 'green' | 'yellow';
    port: string;
}