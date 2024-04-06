import React from "react";
import { fetchAndSetCardsApps } from "../stores/store-data";
import { useEffect } from "react";

const useCardData = () => {
    useEffect(() => {
        fetchAndSetCardsApps();
    }, []);
}

export default useCardData;