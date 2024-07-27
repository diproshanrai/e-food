import { Image_URL } from "../utils/constant";


const ResCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, areaName } =
    props.resData.info;
    console.log(props.resData.info);

  return (
    <div className="resCard">
      <img src={Image_URL+cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default ResCard;
