import { publicProcedure, createTRPCRouter } from "~/server/api/trpc";

export const healthRouter = createTRPCRouter({
  ping: publicProcedure.query(() => ({ status: "ok" }))
});
