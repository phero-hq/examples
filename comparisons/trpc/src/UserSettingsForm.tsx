import React, { useCallback } from "react"
import { UserSettings, Theme, ThemeEnum } from "./server/users"

interface Props {
  settings: UserSettings
  onSubmit: (settings: UserSettings) => Promise<void>
  isSubmitting: boolean
}

export default function UserSettingsForm(props: Props) {
  const onSubmit = useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>) => e.preventDefault(),
    [props.settings],
  )

  const onChangeRecieveNewsletter = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      await props.onSubmit({
        ...props.settings,
        recieveNewsletter: e.currentTarget.checked,
      })
    },
    [props.settings],
  )

  const onChangeTheme = useCallback(
    async (e: React.ChangeEvent<HTMLSelectElement>) => {
      const theme = ThemeEnum.parse(e.currentTarget.value)
      await props.onSubmit({ ...props.settings, preferredTheme: theme })
    },
    [],
  )

  return (
    <form
      onSubmit={onSubmit}
      className={props.isSubmitting ? "isSubmitting" : ""}
    >
      <fieldset>
        <input
          type="checkbox"
          id="settings-recieveNewsLetter"
          checked={props.settings.recieveNewsletter}
          onChange={onChangeRecieveNewsletter}
        />
        <label htmlFor="settings-recieveNewsLetter">Recieve newsletter</label>
      </fieldset>

      <fieldset>
        <label htmlFor="settings-theme">Preferred theme:</label>
        <br />
        <select
          id="settings-theme"
          onChange={onChangeTheme}
          value={props.settings.preferredTheme}
        >
          {Object.values(Theme).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </fieldset>
    </form>
  )
}
