import { useEffect, useState } from "react";

const useStorageState = (key, initalState) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};

export default useStorageState;
