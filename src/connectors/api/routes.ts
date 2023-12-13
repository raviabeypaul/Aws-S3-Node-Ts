import { Application } from "express";
import { handlers } from "./handlers";

export const routes = (app : Application)=>{
    app.put("/", handlers.updateReservation);
    app.get("/test", handlers.test);
    app.get("/", handlers.getAllReservation);
    app.post("/", handlers.create)
}