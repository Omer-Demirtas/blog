"uae client";
import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

interface AppStateContextType {
  showTerminal: boolean;
  setShowTerminal: Dispatch<SetStateAction<boolean>>;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showTerminal, setShowTerminal] = useState<boolean>(true);

  const value: AppStateContextType = {
    showTerminal,
    setShowTerminal,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppContext = (): AppStateContextType => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppStateProvider');
  }
  return context;
};