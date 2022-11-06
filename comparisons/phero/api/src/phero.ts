import { createService } from "@phero/server"

interface User {
  id: string
  profile: UserProfile
  settings: UserSettings
}

interface UserProfile {
  firstName: string
  lastName: string
}

interface UserSettings {
  recieveNewsletter: boolean
  preferredTheme: Theme
}

enum Theme {
  Minimal = "Minimal",
  Advanced = "Advanced",
}

const userDB: User[] = [
  {
    id: "user-0",
    profile: {
      firstName: "Sarah",
      lastName: "Connor",
    },
    settings: {
      recieveNewsletter: true,
      preferredTheme: Theme.Minimal,
    },
  },
]

class UserNotFoundError extends Error {}

async function get(id: string): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const user = userDB.find((u) => u.id === id)
  if (!user) throw new UserNotFoundError()
  return user
}

async function updateProfile(id: string, profile: UserProfile): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const index = userDB.findIndex((u) => u.id === id)
  if (index < 0) throw new UserNotFoundError()
  userDB[index].profile = profile
}

async function updateSettings(
  id: string,
  settings: UserSettings,
): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const index = userDB.findIndex((u) => u.id === id)
  if (index < 0) throw new UserNotFoundError()
  userDB[index].settings = settings
}

export const users = createService({
  get,
  updateProfile,
  updateSettings,
})
