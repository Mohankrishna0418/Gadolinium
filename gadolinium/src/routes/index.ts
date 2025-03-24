import { Hono } from "hono";
import { signUpWithUsernameAndPasswordResponseResult } from "../controllers";
import { SignupError } from '../controllers/+type';

export const hono = new Hono();

hono.post("/authentication/sign-up", async (c) => {
    const { username, password } = await c.req.json();
    try {
        const result = await signUpWithUsernameAndPasswordResponseResult({
            username,
            password
        });

        return c.json({ data: result }, 200);
    } catch (error) {
        if (error === SignupError.CONFLICTING_USERNAME) {
            return c.json({ error: "Username already exists" }, 409);
        }

        if (error === SignupError.UNKNOWN) {
            return c.json({ error: "Unknown error" }, 500);
        };
    }
});



hono.get("/health", (c) => {
  return c.json(
    {
      message: "All Ok",
    },
    200
  );
});