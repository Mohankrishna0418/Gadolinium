import "dotenv/config";
import { hono } from "./routes/routes";
import { serve } from "@hono/node-server";

serve(hono);