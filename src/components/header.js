import React from "react";


const Header = ({ title, status }) => {
  return (
    <header className="h-12 bg-brand text-gray-100 text-xl font-bold flex justify-center items-center">
      <div>
        <span className="tracking-tighter">{title}</span>
        {" > "}
        <span>{status}</span>
      </div>
    </header>
  );
};

export default Header;
