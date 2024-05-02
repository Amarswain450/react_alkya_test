import axios from "axios";

const api = axios.create({
    baseURL: "https://untitled-twkmuar27a-uc.a.run.app",
    headers: {
        "Content-Type": "Application/json"
    }
});

export const login = async (data) => {
    return api.post("/api/login/", data);
};