import React, { createContext, useContext, useState } from 'react';
import { doctors } from '../data/doctors';

const AppContext = createContext<any>(null);
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: any) => {
  const [appointment, setAppointment] = useState(null);

  return (
    <AppContext.Provider value={{ doctors, appointment, setAppointment }}>
      {children}
    </AppContext.Provider>
  );
};
