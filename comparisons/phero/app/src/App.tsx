import { useCallback, useState } from "react"
import useSWR from "swr"
import "./App.css"
import {
  PheroClient,
  UserNotFoundError,
  UserProfile,
  UserSettings,
} from "./phero.generated"
import UserProfileForm from "./UserProfileForm"
import UserSettingsForm from "./UserSettingsForm"

const phero = new PheroClient(window.fetch.bind(this))
const userId = "user-0"

export default function App() {
  const {
    data: user,
    error,
    mutate,
  } = useSWR("user", () => phero.users.get(userId))
  const [isSubmitting, setSubmitting] = useState<"profile" | "settings">()

  const handleSubmitError = useCallback((error: unknown) => {
    if (error instanceof UserNotFoundError) {
      alert(`Could not get user by id ${userId}`)
    } else {
      alert("Something went wrong")
    }
  }, [])

  const onSubmitProfile = useCallback(
    async (profile: UserProfile): Promise<void> => {
      try {
        if (!user || isSubmitting) return
        setSubmitting("profile")
        await phero.users.updateProfile(userId, profile)
        await mutate({ ...user, profile }, { revalidate: false })
      } catch (error) {
        handleSubmitError(error)
      } finally {
        setSubmitting(undefined)
      }
    },
    [isSubmitting, user],
  )

  const onSubmitSettings = useCallback(
    async (settings: UserSettings): Promise<void> => {
      try {
        if (!user || isSubmitting) return
        setSubmitting("settings")
        await phero.users.updateSettings(userId, settings)
        await mutate({ ...user, settings }, { revalidate: false })
      } catch (error) {
        handleSubmitError(error)
      } finally {
        setSubmitting(undefined)
      }
    },
    [isSubmitting, user],
  )

  return (
    <div className="App">
      {error ? (
        <p>Could not load user</p>
      ) : !user ? (
        <p>Loading user...</p>
      ) : (
        <>
          <UserProfileForm
            profile={user.profile}
            isSubmitting={isSubmitting === "profile"}
            onSubmit={onSubmitProfile}
          />
          <UserSettingsForm
            settings={user.settings}
            isSubmitting={isSubmitting === "settings"}
            onSubmit={onSubmitSettings}
          />
        </>
      )}
    </div>
  )
}
