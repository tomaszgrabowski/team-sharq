import axios from "axios";

const api_base = `https://api.pokemontcg.io/v2`;

export const get = <T>(path: string) => axios.get<T>(`${api_base}/${path}`);
