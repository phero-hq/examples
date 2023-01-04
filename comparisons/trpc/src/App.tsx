import { useCallback, useState } from "react"
import "./App.css"
import UserProfileForm from "./UserProfileForm"
import UserSettingsForm from "./UserSettingsForm"
import useSWR from "swr"
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "./server/trpc"
import { User, UserProfile, UserSettings } from "./server/users"
import { TRPCError } from "@trpc/server"

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8080",
    }),
  ],
})

const userId = "user-0"

export default function App() {
  const { data, error, mutate } = useSWR("user", () =>
    trpc.users.get.query(userId),
  )
  const [isSubmitting, setSubmitting] = useState<"profile" | "settings">()

  const handleSubmitError = useCallback((error: unknown) => {
    if (error instanceof TRPCError && error.code === "NOT_FOUND") {
      alert(`Could not get user by id ${userId}`)
    } else {
      alert("Something went wrong")
    }
  }, [])

  const onSubmitProfile = useCallback(
    async (profile: UserProfile): Promise<void> => {
      try {
        if (!data || isSubmitting) return
        setSubmitting("profile")
        await trpc.users.updateProfile.mutate({ userId, profile })
        await mutate({ ...data, profile }, { revalidate: false })
      } catch (error) {
        handleSubmitError(error)
      } finally {
        setSubmitting(undefined)
      }
    },
    [isSubmitting, data],
  )

  const onSubmitSettings = useCallback(
    async (settings: UserSettings): Promise<void> => {
      try {
        if (!data || isSubmitting) return
        setSubmitting("settings")
        await trpc.users.updateSettings.mutate({ userId, settings })
        await mutate({ ...data, settings }, { revalidate: false })
      } catch (error) {
        handleSubmitError(error)
      } finally {
        setSubmitting(undefined)
      }
    },
    [isSubmitting, data],
  )

  return (
    <div className="App">
      {error ? (
        <p>Could not load user</p>
      ) : !data ? (
        <p>Loading user...</p>
      ) : (
        <>
          <UserProfileForm
            profile={data.profile}
            isSubmitting={isSubmitting === "profile"}
            onSubmit={onSubmitProfile}
          />
          <UserSettingsForm
            settings={data.settings}
            isSubmitting={isSubmitting === "settings"}
            onSubmit={onSubmitSettings}
          />
        </>
      )}
    </div>
  )
}
