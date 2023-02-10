import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", () => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
      });
    };
  }, []);

  return isOnline; // return status online or offline true or false
};
export default useOnline;
