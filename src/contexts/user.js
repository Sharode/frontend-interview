import * as React from "react";

const SetUserContext = React.createContext(null);
const UserContext = React.createContext(null);
const RepoContext = React.createContext(null)
const SetRepoContext = React.createContext(null)

export const useUserContext = () => {
  const user = React.useContext(UserContext);
  if (!user) throw new Error("Used outside of user context");
  return user;
};

export const useSetUserContext = () => {
  const setUser = React.useContext(SetUserContext);
  if (!setUser) throw new Error("Used outside of setUser context");
  return setUser;
};


export const useRepoContext = () => {
  const repo = React.useContext(RepoContext)
  // if (!repo) throw new Error("Used outside of repo context");
  return repo
}
export const useSetRepoContext = () => {
  const setRepo = React.useContext(SetRepoContext)
  // if (!repo) throw new Error("Used outside of repo context");
  return setRepo
}

export const AuthController = ({ children }) => {
  const [user, setUser] = React.useState({
    name: "Test user"
  });

  const [repo, setRepo] = React.useState([])

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        <RepoContext.Provider value={repo}>
          <SetRepoContext.Provider value={setRepo}>
            {children}
          </SetRepoContext.Provider>
        </RepoContext.Provider>
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
};
