import { get } from "./reqMethods";

export const userLogin = () => get("/users/userDB.json");
