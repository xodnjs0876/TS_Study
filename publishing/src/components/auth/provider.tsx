import React, { useContext, useLayoutEffect, useState } from "react";
import { getCookie } from "../cookie";

export const IsLoggedIn = React.createContext(false);
export function useIsLoggedInContext() {
  return useContext(IsLoggedIn);
}

export function useIsLoggin() {
    return React.useContext(IsLoggedIn);
}

export const AuthProvider = ({ children }: React.PropsWithChildren) => {

    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    useLayoutEffect(() => {
        const isLoggedIn = getCookie("token");
        if (isLoggedIn) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
        return;
        }, []);

    return <IsLoggedIn.Provider value={isLoggedIn}>{children}</IsLoggedIn.Provider>;
};