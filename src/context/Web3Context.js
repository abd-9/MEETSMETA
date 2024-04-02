import React, { createContext, useContext } from "react";
import MetaMaskHook from "../hooks/Web3Hook";

const Web3Context = createContext({});

export const useWeb3 = () => {
  return useContext(Web3Context);
};

export const Web3Provider = ({ children }) => {
  return (
    <Web3Context.Provider value={{ ...MetaMaskHook() }}>
      {children}
    </Web3Context.Provider>
  );
};
