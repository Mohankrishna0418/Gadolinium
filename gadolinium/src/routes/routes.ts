import { Hono } from "hono";
import { authenticationRoutes } from "./authentication-routes";

export const allRoutes = new Hono();

allRoutes.route("/authentication", (authenticationRoutes));