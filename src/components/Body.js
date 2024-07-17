import {resList} from "../utils/dummyData";
import ResCard from "./ResCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="search"
          className="searchBar"
          placeholder="Type Your Food"
        />
        <button>Search</button>
      </div>
      <div className="resCardContainer">
        {resList.map((resData) => (
          <ResCard resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
