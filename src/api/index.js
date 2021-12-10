import axios from "axios";
export const API = axios.create({
    baseURL:"https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest"
})