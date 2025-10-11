import { initTRPC } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import superjson from "superjson";

type CreateContextOptions =
  | CreateNextContextOptions
  | FetchCreateContextFnOptions
  | undefined;

type TRPCContext = Record<string, never>;

export const createTRPCContext = (_opts?: CreateContextOptions): TRPCContext => {
  return {};
};

const t = initTRPC.context<TRPCContext>().create({
  transformer: superjson
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
