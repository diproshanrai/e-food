import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestro, setlistOfRestro] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const filteredTopRes = () => {
    const filteredList = listOfRestro.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setFilterList(filteredList);
  };

  const [search, setSearch] = useState("");

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
    setFilterList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  
  };

const onlineStatus = useOnlineStatus();

if (onlineStatus === false) {
  return <h1>Looks like You have some connection issues</h1>
};

  //Conditional rendering simple
  // if (listOfRestro.length == 0){
  //   return <Shimmer/>
  // };

  //Condiotional Rendering incorporating directly using ternaeary Operator
  return listOfRestro == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="search"
          className="searchBar"
          placeholder="Type Your Food"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterSearch = listOfRestro.filter((restaurant) => {
             return restaurant.info.name.toLowerCase().includes(search.toLowerCase());
             
            });

            setFilterList(filterSearch);
          }}
        >
          Search
        </button>

        <button id="listOfRestro" onClick={filteredTopRes}>
          Top Restaurant
        </button>
      </div>

      <div className="resCardContainer">
        {filterList.map((resData, id) => (
          <Link key={resData.info.id} to={"/restaurent/"+ resData.info.id}>
          <ResCard  resData={resData} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
