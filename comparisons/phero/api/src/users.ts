export interface User {
  id: string
  profile: UserProfile
  settings: UserSettings
}

export interface UserProfile {
  firstName: string
  lastName: string
}

export interface UserSettings {
  recieveNewsletter: boolean
  preferredTheme: Theme
}

export enum Theme {
  Minimal = "Minimal",
  Advanced = "Advanced",
}

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
