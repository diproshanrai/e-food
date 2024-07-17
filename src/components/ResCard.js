

const ResCard = ({resData}) => {
  const { featured_image,name, cuisines, user_rating } = resData.restaurant || {};

  return( <div className="resCard">
    <img src={featured_image} alt={name}/>
    <h3>{name}</h3>
    <h4>{cuisines}</h4>
    <h4>{user_rating?.rating_text}</h4>
    <h4>{user_rating?.aggregate_rating}</h4>
  </div>);
};

export default ResCard;


