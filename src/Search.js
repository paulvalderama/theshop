import React from "react";

export default function Search() {
  return (
    <div>
      <div className="box">
        <input
          type="text"
          className="input"
          placeholder="Enter Stylist Phone Number or Full Name"
        />
        <button className="searchbtn">Search</button>
      </div>
    </div>
  );
}
