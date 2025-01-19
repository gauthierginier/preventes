import React from "react";
import { auth } from "@/firebase/firebase";

const AuthContext = React.createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [userLoggedIn, setUserLoggedIn] = React.useState<boolean>(false);


    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;