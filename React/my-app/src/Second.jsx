import { useParams } from "react-router-dom";
export const Second = () => {
  let params = useParams();
  let username = params.username;
  return (
    <>
      <p className="myHeading bg-secondary-subtle">Welcome, {username}</p>
    </>
  );
};
