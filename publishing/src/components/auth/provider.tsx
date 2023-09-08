import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

export const IsLoggedIn = React.createContext<
  [Boolean, (check: string) => void, () => void]
>([false, (check: string) => {}, () => {}]);
export function useIsLoggedInContext() {
  return useContext(IsLoggedIn);
}

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const setLogin = useCallback(
    (access_token: string) => {
      setLoggedIn(true);
      window.sessionStorage.setItem("accessToken", access_token);
    },
    [setLoggedIn]
  );

  const logout = useCallback(() => {
    setLoggedIn(false);
    window.sessionStorage.clear();
  }, [setLoggedIn]);

  useLayoutEffect(() => {
    if (window.sessionStorage.getItem("accessToken")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  return (
    <IsLoggedIn.Provider value={[isLoggedIn, setLogin, logout]}>
      {children}
    </IsLoggedIn.Provider>
  );
};
