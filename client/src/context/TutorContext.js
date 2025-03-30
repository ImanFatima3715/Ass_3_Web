import { createContext, useState, useEffect } from "react";
import { getProfile } from "../utils/api";

export const TutorContext = createContext();

export const TutorProvider = ({ children }) => {
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    getProfile().then(setTutor);
  }, []);

  return <TutorContext.Provider value={{ tutor, setTutor }}>{children}</TutorContext.Provider>;
};
