import { useContext, useState } from 'react';
import { DiseasesContext } from '../store/DiseasesContext';

export const DiseasesContextProvider = ({ children }) => {
  const [diseases, setDiseases] = useState([]);

  return (
    <DiseasesContext.Provider value={{ diseases, setDiseases }}>
      {children}
    </DiseasesContext.Provider>
  );
};
