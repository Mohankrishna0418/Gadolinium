import { Hono } from "hono";
import { authenticationRoutes } from "./authentication-routes";
import { usersRoutes } from "./users-routes";
import { logger } from "hono/logger";

export const allRoutes = new Hono();

allRoutes.use(logger()); 

allRoutes.route("/authentication", (authenticationRoutes));

allRoutes.route("/users", (usersRoutes));
 
allRoutes.get("/health", async (c) => {
    return c.json({
      message: "All Ok",
    },200
  );
}
);