import React from "react";

const PersonCard = ({
  name = "unknown",
  address = "unknown",
  phone = "unknown",
}) => {
  // const PersonCard =((props) =>{})
  //   let name = props.name;
  //   let address = props.address;
  //   let phone = props.phone;

  // destructuring object
  //   let { name, address, phone } = props;
  return (
    <div style={{ border: "3px solid gray", padding: "10px", margin: "10px" }}>
      <h3>NAME:{name}</h3>
      <h3>ADDRESS:{address}</h3>
      <h3>PHONE:{phone}</h3>
    </div>
  );
};

export default PersonCard;
