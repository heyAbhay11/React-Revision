import React from "react";
import { api } from "../config/api";

export const GamesDetailLoader = async ({ params }) => {
    console.log(params)

    const res = await api.get(`/games/${params.id}`, {
        params: {
            key: import.meta.env.VITE_API_KEY
        }
    })
        return res



}
export default GamesDetailLoader
