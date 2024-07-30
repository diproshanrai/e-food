import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="errorPage">
      <h1>This Is Some kind of ERROr</h1>
      <h2>Please Go back We will look into it </h2>
      <h2>{err.status}</h2>
      <h2>{err.statusText}</h2>
    </div>
  );
};

export default Error;
