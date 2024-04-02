import React from "react";

const ContractMainContainer = ({ children }) => {
  return (
    <div
      className="flex flex-col  grow relative z-3 w-full "
      style={{
        backgroundColor: "white",
        height: "100%",
        borderRadius: "30px",
        borderBottomLeftRadius: "0px",
      }}
    >
      {children}
    </div>
  );
};

export default ContractMainContainer;
