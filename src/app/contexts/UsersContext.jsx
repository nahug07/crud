'use client'

import { createContext } from "react";
import useUsers from "../hooks/useUsers";

export const UsersContext = createContext();

export function UsersProvider({ children }) {

    const { users, deleteUser, showSnackbar, closeSnackbar } = useUsers();

    return (
        <UsersContext.Provider value={{ users, deleteUser, showSnackbar, closeSnackbar }}>
            {children}
        </UsersContext.Provider>
    )
}