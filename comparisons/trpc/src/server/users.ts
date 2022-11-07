import { z } from "zod"

export const UserProfile = z.object({
  firstName: z.string(),
  lastName: z.string(),
})
export type UserProfile = z.infer<typeof UserProfile>

export enum Theme {
  Minimal = "Minimal",
  Advanced = "Advanced",
}
export const ThemeEnum = z.nativeEnum(Theme)
export type ThemeEnum = z.infer<typeof ThemeEnum>

export const UserSettings = z.object({
  recieveNewsletter: z.boolean(),
  preferredTheme: ThemeEnum,
})
export type UserSettings = z.infer<typeof UserSettings>

export const User = z.object({
  id: z.string(),
  profile: UserProfile,
  settings: UserSettings,
})
export type User = z.infer<typeof User>

export const userDb: User[] = [
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
