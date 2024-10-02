import { useParams } from "next/navigation";
import React from "react";

const profiles = () => {
  const params = useParams();
  /* 
/profile/shyam
->{username:shyam}
*/

  return (
    <div>
      <h1>Welcome,{params?.username}</h1>
    </div>
  );
};

export default profiles;
