import { createService } from "@phero/server"
import { userDb, User, UserProfile, UserSettings } from "./users"

class UserNotFoundError extends Error {}

async function get(id: string): Promise<User> {
  const user = userDb.find((u) => u.id === id)
  if (!user) throw new UserNotFoundError()
  return user
}

async function updateProfile(id: string, profile: UserProfile): Promise<void> {
  const index = userDb.findIndex((u) => u.id === id)
  if (index < 0) throw new UserNotFoundError()
  userDb[index].profile = profile
}

async function updateSettings(
  id: string,
  settings: UserSettings,
): Promise<void> {
  const index = userDb.findIndex((u) => u.id === id)
  if (index < 0) throw new UserNotFoundError()
  userDb[index].settings = settings
}

export const users = createService({
  get,
  updateProfile,
  updateSettings,
})
