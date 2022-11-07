import { useCallback, useState } from "react"
import { UserProfile } from "./server/users"

interface Props {
  profile: UserProfile
  onSubmit: (profile: UserProfile) => Promise<void>
  isSubmitting: boolean
}

export default function UserProfileForm(props: Props) {
  const [editingProfile, setEditingProfile] = useState(props.profile)

  const onSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      props.onSubmit(editingProfile)
    },
    [editingProfile],
  )

  return (
    <form
      onSubmit={onSubmit}
      className={props.isSubmitting ? "isSubmitting" : ""}
    >
      <fieldset>
        <label htmlFor="profile-firstName">First name</label>
        <input
          id="profile-firstName"
          value={editingProfile.firstName}
          onChange={(e) =>
            setEditingProfile({
              ...editingProfile,
              firstName: e.target.value,
            })
          }
        />
      </fieldset>

      <fieldset>
        <label htmlFor="profile-lastName">Last name</label>
        <input
          id="profile-lastName"
          value={editingProfile.lastName}
          onChange={(e) =>
            setEditingProfile({
              ...editingProfile,
              lastName: e.target.value,
            })
          }
        />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  )
}
