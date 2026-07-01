
"use client";

import React, { ReactNode } from "react";
import { useAppContext } from "@/Context/AppContextProvider";

export const ShowOnLogin = ({ children }: { children: ReactNode }) => {
  const { user } = useAppContext();

  return user ? children : null;
};


export const ShowOnLogout = ({ children }: { children: ReactNode }) => {
  const { user } = useAppContext();

  return !user ? children : null;
};