const First = () => {
  return (
    <>
      {/* inline css */}
      <h1
        style={{
          backgroundColor: "red",
          color: "blue",
        }}
      >
        This is first component
      </h1>
      <h1 className="myHeading">CUSTOM CSS</h1>
    </>
  );
};
export default First;
