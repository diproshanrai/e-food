import { resList } from "../utils/dummyData";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestro, setlistOfRestro] = useState([]);

  const filteredTopRes = () => {
    const filteredList = resList.filter(
      (restaurant) => restaurant.restaurant.user_rating.aggregate_rating > 4.3
    );
    setlistOfRestro(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setlistOfRestro(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="search"
          className="searchBar"
          placeholder="Type Your Food"
        />
        <button>Search</button>

        <button id="listOfRestro" onClick={filteredTopRes}>
          Top Restaurant
        </button>
      </div>

      <div className="resCardContainer">
        {listOfRestro.map((resData) => (
          <ResCard resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
