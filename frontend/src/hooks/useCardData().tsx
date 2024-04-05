import React from "react";
import { fetchDataById } from "../stores/store-data";
import { useEffect } from "react";

const useCardData = (id:string) => {
    useEffect(() => {
        fetchDataById(id);
    }, []);
}

export default useCardData;