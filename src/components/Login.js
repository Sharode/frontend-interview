import * as React from "react";
import { useSetUserContext } from "../contexts/user";
import { Btn, Input, Label } from '../elements'


const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });
  const [error, setError] = React.useState(null);
  const setUserContext = useSetUserContext();


  React.useEffect(() => {
    setError(null);
  }, [user.email, user.password]);

  return (
    <section>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form
        onSubmit={e => {
          setError(null);
          e.preventDefault();
          if (
            user.email &&
            user.password &&
            user.password.trim() === "password"
          ) {
            setUserContext({
              name: "Test User",
              ...user
            });
          } else {
            setError("Invalid Password");
          }
        }}
      >
        <Label htmlFor="email"> Email </Label>
        <Input
          name="email"
          type="email"
          value={user.email}
          required={true}
          autoFocus={true}
          onChange={event => setUser({ ...user, email: event.target.value })}
        />
        <Label htmlFor="password"> Password </Label>
        <Input
          name="password"
          type="password"
          value={user.password}
          required={true}
          onChange={event => setUser({ ...user, password: event.target.value })}

        />
        <Btn type="submit">Login</Btn>
      </form>
    </section>
  );
};

export default Login;
