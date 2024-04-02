import React from "react";

const CollectionMainContainer = ({ children }) => {
  return (
    <div
      className="d-flex flex-column grow-1 relative z-3 w-full "
      style={{
        backgroundColor: "white",
        height: "92%",
        borderRadius: "30px",
        borderBottomLeftRadius: "0px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default CollectionMainContainer;
