import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurentMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resid
    );

    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;
