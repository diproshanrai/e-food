import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentInfo";



const ResMenu = () => {
  


  const {resid} = useParams();

  // const [resInfo, setResInfo] = useState(null);

  const resInfo = useRestaurentMenu(resid);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resid
  //   );

  //   const json = await data.json();

  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } = resInfo.cards[2].card.card.info;
  

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;


  return (
    <div className="resMenu">
      <h1>{name}</h1>
      <h2>{costForTwo / 100} for two</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item, id) => (
          <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
