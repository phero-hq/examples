import { initTRPC, TRPCError } from "@trpc/server"
import { createHTTPHandler } from "@trpc/server/adapters/standalone"
import http from "http"
import { z } from "zod"
import { User, userDb, UserProfile, UserSettings } from "./users"

const t = initTRPC.create()

const usersRouter = t.router({
  get: t.procedure
    .input(String)
    .output(User)
    .query((req) => {
      const user = userDb.find((u) => u.id === req.input)
      if (!user) throw new TRPCError({ code: "NOT_FOUND" })
      return user
    }),
  updateProfile: t.procedure
    .input(z.object({ userId: z.string(), profile: UserProfile }))
    .mutation(async (req) => {
      const index = userDb.findIndex((u) => u.id === req.input.userId)
      if (index < 0) throw new TRPCError({ code: "NOT_FOUND" })
      userDb[index].profile = req.input.profile
    }),
  updateSettings: t.procedure
    .input(z.object({ userId: z.string(), settings: UserSettings }))
    .mutation(async (req) => {
      const index = userDb.findIndex((u) => u.id === req.input.userId)
      if (index < 0) throw new TRPCError({ code: "NOT_FOUND" })
      userDb[index].settings = req.input.settings
    }),
})

const appRouter = t.router({ users: usersRouter })
export type AppRouter = typeof appRouter

const trpcHandler = createHTTPHandler({
  router: appRouter,
  createContext: () => ({}),
})

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Request-Method", "*")
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET")
    res.setHeader("Access-Control-Allow-Headers", "*")

    if (req.method === "OPTIONS") {
      res.writeHead(200)
      return res.end()
    }

    trpcHandler(req, res)
  })
  .listen(8080, () => console.log("Ready"))
