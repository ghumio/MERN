import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 bg-green-400">Left Sidebar</div>
        <div className="w-3/4 bg-red-400">
          Main Contents
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;
