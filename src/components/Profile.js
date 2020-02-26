import * as React from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";
import { Btn, Label, Input } from '../elements'

/**
 * This should update the user context with the new values for email and name
 */
const Profile = () => {
  const { email, name } = useUserContext();

  const setUserContext = useSetUserContext()
  const [user, setUser] = React.useState({
    email, name
  })

  const [error, setError] = React.useState(null)
  const [success, setSuccess] = React.useState(null)

  const handleSuccess = () => {
    setSuccess('Profile Updated!')
    setTimeout(() => {
      setSuccess(null)
    }, 4000);
  }

  return (
    <div>
      <h1>Edit your profile</h1>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}

      <form
        onSubmit={e => {
          e.preventDefault();
          if (user.name && user.name) {
            setError(null)
            handleSuccess()
            setUserContext(user)
          } else {
            if (!user.name) {
              setError('Please enter a username')
            } else {
              setError('Please enter a valid Email')
            }
          }
        }}
      >
        <Label htmlFor="email"> Email </Label>
        <Input
          name="email"
          type="email"
          value={user.email}
          autoFocus={true}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        <Label htmlFor="name"> Name </Label>
        <Input
          name="name"
          type="text"
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}

        />
        <Btn type="submit">Submit</Btn>
      </form>
    </div>
  );
};

export default Profile;
