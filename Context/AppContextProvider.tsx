
"use client";

import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

interface AppContextparams {
user: User | null;
setUser: (user: User | null) => void;
}

const AppContext = createContext<AppContextparams | undefined>(undefined);

export const AppContextProvider = ({
children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        //Listen for login/logout changes
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                //console.log("User signed in:", firebaseUser.email);
                setUser(firebaseUser);
            } else {
                //console.log("User signed out");
                setUser(null);
            }
        });
        //Cleanup listener on unmount
        return () => unsubscribe();
    }, []);

    const value = { 
        user, 
        setUser,
    };

    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextparams => {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};